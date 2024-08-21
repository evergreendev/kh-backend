import {Block} from "payload/types";

export const TextBlock: Block = {
    slug: "TextBlock",
    fields: [
        {
            name: "heading_1",
            label: "Heading 1",
            type: "text"
        },
        {
            name: "heading_2",
            label: "Heading 2",
            type: "text"
        },
        {
            name: "heading_link",
            label: "Heading Link",
            type: "group",
            fields: [
                {
                    name: "link",
                    type: "text"
                },
                {
                    name: "label",
                    type: "text"
                }
            ]
        },
        {
            name: "body",
            type: "group",
            fields: [
                {
                    name: "text",
                    type: "richText"
                },
                {
                    name: "link_list",
                    label: "Link List",
                    type: "array",
                    fields: [
                        {
                            name: "link",
                            type: "text"
                        },
                        {
                            name: "label",
                            type: "text"
                        }
                    ]
                }
            ]
        }

    ]
}

export default TextBlock;
