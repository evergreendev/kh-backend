import {GlobalConfig} from "payload/types";
import navItemFields from "../../fields/navItemFields";
import {ArrayRowLabel} from "../../components/ArrayRowLabel";
import {revalidateNavigation} from "../hooks/revalidateNavigation";
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
                    RowLabel: ArrayRowLabel
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
