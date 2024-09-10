import {Block} from "payload/types";
import navItemFields from "../fields/navItemFields";

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
                ...navItemFields,
                {
                    name: "label",
                    type: "text"
                },
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
                        ...navItemFields,
                        {
                            name: "label",
                            type: "text",
                            admin: {
                                description: "Text to link to the page. Leave blank to just use the Title"
                            }
                        }
                    ]
                }
            ]
        }

    ]
}

export default TextBlock;
