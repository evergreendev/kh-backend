import {GlobalConfig} from "payload/types";
import {isAdmin} from "../../access/isAdmin";
import {ArrayRowLabel} from "../../components/ArrayRowLabel";
import {fixDuplicationHook} from "../../hooks/fixDuplicationHook";

export const Hours: GlobalConfig = {
    slug: "hours",
    admin: {
        hidden: ({user}) => user.role !== "admin"
    },
    access: {
        read: () => true,
        update: isAdmin(),
    },
    fields: [
        {
            name: "Schedules",
            type: "array",
            hooks: {
                beforeChange: [
                    fixDuplicationHook
                ]
            },
            fields: [{
                type: "row",
                fields: [
                    {
                        name: "schedule_start",
                        label: "Schedule Start",
                        type: "date",
                        admin: {
                            width: '50%',
                        },
                    },
                    {
                        name: "schedule_end",
                        label: "Schedule End",
                        type: "date",
                        admin: {
                            width: '50%',
                        },
                    },
                    {
                        name: "hours",
                        type: "array",
                        admin: {
                            components: {
                                RowLabel: ArrayRowLabel
                            }
                        },
                        fields: [
                            {
                                name: "title",
                                type: "text"
                            },
                            {
                                type: "row",
                                fields: [
                                    {
                                        name: "hour_start",
                                        label: "Start",
                                        type: "date",
                                        admin: {
                                            width: '50%',
                                            date: {
                                                timeIntervals: 10,
                                                pickerAppearance: 'timeOnly',
                                                displayFormat: 'h:mm a',
                                            },
                                        },
                                    },
                                    {
                                        name: "hour_end",
                                        label: "End",
                                        type: "date",
                                        admin: {
                                            width: '50%',
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
                    }
                ]
            },]
        }

    ]
}
