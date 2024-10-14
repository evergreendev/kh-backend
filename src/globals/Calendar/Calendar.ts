import {GlobalConfig} from "payload/types";
import {isAdmin} from "../../access/isAdmin";
import {ArrayRowLabel} from "../../components/ArrayRowLabel";
import {fixDuplicationHook} from "../../hooks/fixDuplicationHook";

export const Calendar: GlobalConfig = {
    slug: "calendar",
    admin: {
        hidden: ({user}) => user.role !== "admin"
    },
    access: {
        read: () => true,
        update: isAdmin(),
    },
    fields: [
        {
            name: "calendarItems",
            type: "array",
            admin: {
                components: {
                    RowLabel: ArrayRowLabel
                },
            },
            hooks: {
                beforeChange: [
                    fixDuplicationHook
                ]
            },
            fields: [
                {
                    name: "title",
                    type: "text"
                },
                {
                    name: "eventPage",
                    label: "Link to event page (optional)",
                    type: "relationship",
                    relationTo: ["event"]
                },
                {
                    type: "row",
                    fields: [
                        {
                            name: "monthLongEvent",
                            label: "This event is for the entire month",
                            type: "checkbox",
                            admin: {
                                width: "100%",
                                description: "This is helpful for items that last the entire month such as an artist in residence"
                            }
                        },
                        {
                            name: "dates",
                            type: "array",
                            admin: {
                                width: "100%",
                                condition: (siblingData) => {
                                    return !siblingData?.monthLongEvent;
                                },
                            },
                            fields: [
                                {
                                    name: "date",
                                    type: "date",
                                }
                            ],

                        },
                        {
                            name: "hour_start",
                            label: "Start Time",
                            type: "date",
                            admin: {
                                width: '50%',
                                condition: (siblingData) => {
                                    return !siblingData?.monthLongEvent;
                                },
                                date: {
                                    timeIntervals: 10,
                                    pickerAppearance: 'timeOnly',
                                    displayFormat: 'h:mm a',
                                },
                            },
                        },
                        {
                            name: "hour_end",
                            label: "End Time",
                            type: "date",
                            admin: {
                                width: '50%',
                                condition: (siblingData) => {
                                    return !siblingData?.monthLongEvent;
                                },
                                date: {
                                    timeIntervals: 10,
                                    pickerAppearance: 'timeOnly',
                                    displayFormat: 'h:mm a',
                                },
                            },
                        },
                    ]
                },
            ]
        },
    ]
}
