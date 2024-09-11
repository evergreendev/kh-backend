import {Block} from "payload/types";
import navItemFields from "../../fields/navItemFields";

const MenuButtonBlock:Block = {
    slug: "MenuButton",
    fields: [
        ...navItemFields,
        {
            name: "buttonStyle",
            type: "select",
            options: ["primary","secondary","tertiary","highlight","text"]
        },
        {
            name: "hasIcon",
            type: "checkbox",
        }
    ]
}

export default MenuButtonBlock;
