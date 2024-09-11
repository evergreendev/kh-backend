import {Block} from "payload/types";

export const HeaderBlock: Block = {
    slug: "HeaderBlock",
    fields: [
        {
            name: "text",
            type: "richText"
        },
    ]
}

export default HeaderBlock;
