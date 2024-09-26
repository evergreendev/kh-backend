import {Block} from "payload/types";

export const HeaderBlock: Block = {
    slug: "HeaderBlock",
    labels: {
        singular: "Rich Text",
        plural: "Rich Text",
    },
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
