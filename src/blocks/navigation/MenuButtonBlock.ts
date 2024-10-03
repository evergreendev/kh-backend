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
            name: "fragment",
            type: "text",
            admin: {
                description:"Used to scroll to a section on the specified page",
                condition: (data, siblingData) => {
                    return !siblingData.external;
                }
            }
        },
        {
            name: "hasIcon",
            type: "checkbox",
        }
    ]
}

export default MenuButtonBlock;
