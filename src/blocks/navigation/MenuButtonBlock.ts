import {Block} from "payload/types";

const MenuButtonBlock:Block = {
    slug: "MenuButton",
    fields: [
        {
            name: "item",
            type: "relationship",
            relationTo: ["pages"]
        },
        {
            name: "text",
            type: "text"
        },
        {
            name: "buttonStyle",
            type: "select",
            options: ["primary","secondary","tertiary","highlight","text"]
        }
    ]
}

export default MenuButtonBlock;
