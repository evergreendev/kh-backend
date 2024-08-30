import {GlobalConfig} from "payload/types";
import navItemFields from "../../fields/navItemFields";
import {ArrayRowLabel} from "../../components/ArrayRowLabel";
import {revalidateNavigation} from "../hooks/revalidateNavigation";
import widthField from "../../fields/widthField";
import SimpleMenuBlock from "../../blocks/navigation/SimpleMenuBlock";
import Column from "../../blocks/columns/column";
import PhotoMenuBlock from "../../blocks/navigation/PhotoMenuBlock";
import CollectionCardBlock from "../../blocks/CollectionCardBlock";

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
                    type: "array",
                    admin: {
                        components: {
                            RowLabel: ArrayRowLabel
                        }
                    },
                    labels: {
                        singular: "item",
                        plural: "items"
                    },
                    fields: [
                        widthField,
                        ...navItemFields,
                        {
                            name: "content",
                            type: "blocks",
                            blocks: [
                                SimpleMenuBlock,
                                PhotoMenuBlock,
                                CollectionCardBlock,
                                Column([SimpleMenuBlock,PhotoMenuBlock,CollectionCardBlock])
                            ]
                        }
                    ],
                }
            ]
        }
    ]
}
