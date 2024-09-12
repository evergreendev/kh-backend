import {Block} from "payload/types";

export const HeaderBlock: Block = {
    slug: "HeaderBlock",
    fields: [
        {
            name: "text",
            type: "richText"
        },
        {
            name: "underlineHighlight",
            type: "checkbox",
        },
        {
            name: "largeText",
            type: "checkbox"
        }
    ]
}

export default HeaderBlock;
