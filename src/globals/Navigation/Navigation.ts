import {GlobalConfig} from "payload/types";
import navItemFields from "../../fields/navItemFields";
import {NavRowLabel} from "./components/NavRowLabel";
import {revalidateNavigation} from "../hooks/revalidateNavigation";

export const Navigation: GlobalConfig = {
    slug: "navigation",
    admin: {
        hidden: ({user}) => user.role !== "admin"
    },
    hooks: {
        afterChange: [
            revalidateNavigation
        ]
    },
    fields: [
        {
            name: "items",
            type: "array",
            admin: {
                components: {
                    RowLabel: NavRowLabel
                }
            },

            required: true,
            fields: [
                ...navItemFields,
                {
                    name: "sub_menu_1",
                    label: "Sub Menu",
                    type: "array",
                    labels: {
                        singular: "item",
                        plural: "items"
                    },
                    admin: {
                        components: {
                            RowLabel: NavRowLabel
                        }
                    },
                    fields: [
                        ...navItemFields,
                        {
                            name: "sub_menu_2",
                            label: "Sub Menu",
                            type: "array",
                            labels: {
                                singular: "item",
                                plural: "items"
                            },
                            admin: {
                                components: {
                                    RowLabel: NavRowLabel
                                }
                            },
                            fields: [
                                ...navItemFields,
                                {
                                    name: "sub_menu_3",
                                    label: "Sub Menu",
                                    type: "array",
                                    labels: {
                                        singular: "item",
                                        plural: "items"
                                    },
                                    admin: {
                                        components: {
                                            RowLabel: NavRowLabel
                                        }
                                    },
                                    fields: [
                                        ...navItemFields,
                                        {
                                            name: "sub_menu_4",
                                            label: "Sub Menu",
                                            type: "array",
                                            labels: {
                                                singular: "item",
                                                plural: "items"
                                            },
                                            admin: {
                                                components: {
                                                    RowLabel: NavRowLabel
                                                }
                                            },
                                            fields: [
                                                ...navItemFields,

                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
