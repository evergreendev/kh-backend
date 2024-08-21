import {Block} from "payload/types";
import navItemFields from "../fields/navItemFields";

export const Breaker: Block = {
    slug: "Breaker",
    fields: [
        {
            name: "heading_1",
            label: "Heading 1",
            type: "group",
            fields: [
                {
                    name: "text",
                    type: "text"
                },
                {
                    name: "highlight",
                    type: "checkbox"
                }
            ]
        },
        {
            name: "heading_2",
            label: "Heading 2",
            type: "group",
            fields: [
                {
                    name: "text",
                    type: "text"
                },
                {
                    name: "highlight",
                    type: "checkbox"
                }
            ]
        },
        {
            name: "button",
            type: "group",
            fields: [
                {
                    name: "text",
                    type: "text"
                },
                {
                    name: "type",
                    type: "select",
                    options: [
                        {
                            value: "primary",
                            label: "Primary"
                        },
                        {
                            value: "secondary",
                            label: "Secondary"
                        },
                        {
                            value: "highlight",
                            label: "Highlight"
                        }
                    ]
                },
                {
                    name: "link",
                    type: "group",
                    fields: navItemFields
                }
            ]
        }


    ]
}

export default Breaker;
