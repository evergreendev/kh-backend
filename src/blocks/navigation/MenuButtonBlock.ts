import {Block} from "payload/types";

const MenuButtonBlock:Block = {
    slug: "MenuButton",
    fields: [
        {
            name: "item",
            type: "relationship",
            relationTo: ["pages"]
        }
    ]
}

export default MenuButtonBlock;
