import {GlobalConfig} from "payload/types";
import navItemFields from "../../fields/navItemFields";
import {ArrayRowLabel} from "../../components/ArrayRowLabel";
import {revalidateNavigation} from "../hooks/revalidateNavigation";
import widthField from "../../fields/widthField";
import PhotoMenuBlock from "../../blocks/navigation/PhotoMenuBlock";
import MenuWithSubMenuBlock from "../../blocks/navigation/MenuWithSubMenu";
import MenuButtonBlock from "../../blocks/navigation/MenuButtonBlock";
import collectionCardBlock from "../../blocks/CollectionCardBlock";

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
                    name: "columns",
                    type: "array",
                    fields: [
                        {
                            name: "content",
                            type: "blocks",
                            blocks: [MenuButtonBlock,MenuWithSubMenuBlock,PhotoMenuBlock, collectionCardBlock]
                        },
                        widthField
                    ]
                },
            ]
        }
    ]
}
