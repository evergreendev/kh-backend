import {GlobalConfig} from "payload/types";
import navItemFields from "../../fields/navItemFields";
import {NavRowLabel} from "./components/NavRowLabel";
import {revalidateNavigation} from "../hooks/revalidateNavigation";
import simpleMenuBlock from "../../blocks/navigation/SimpleMenuBlock";
import NavigationBlock from "../../blocks/navigation/NavigationBlock";

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
                    type: "blocks",
                    labels: {
                        singular: "item",
                        plural: "items"
                    },
                    blocks: [
                        NavigationBlock
                    ]
                }
            ]
        }
    ]
}
