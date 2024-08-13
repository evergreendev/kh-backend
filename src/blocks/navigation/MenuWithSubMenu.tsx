import {Block} from "payload/types";
import {ArrayRowLabel} from "../../components/ArrayRowLabel";

const MenuWithSubMenuBlock: Block = {
    slug: 'MenuWithSubMenu', // required
    fields: [
        {
            name: "items",
            type: "array",
            admin: {
                components: {
                    RowLabel: ArrayRowLabel
                }
            },
            fields: [
                {
                    name: "title",
                    type: "text",
                },
                {
                    name: "page",
                    type: "relationship",
                    relationTo: ["pages"],
                }
            ]
        }
    ],
}

export default MenuWithSubMenuBlock;
