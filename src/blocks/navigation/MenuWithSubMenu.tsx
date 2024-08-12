import {Block} from "payload/types";
import {NavRowLabel} from "../../globals/Navigation/components/NavRowLabel";

const MenuWithSubMenuBlock: Block = {
    slug: 'MenuWithSubMenu', // required
    fields: [
        {
            name: "items",
            type: "array",
            admin: {
                components: {
                    RowLabel: NavRowLabel
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
