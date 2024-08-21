import {Block} from "payload/types";
import TextBlock from "../TextBlock";

export const Column: Block = {
    slug: "column",
    fields: [
        {
            name: "columns",
            type: "array",
            fields: [
                {
                    name: "content",
                    type: "blocks",
                    blocks: [
                        TextBlock
                    ]
                },
                {
                    name: "width",
                    type: "select",
                    options: [
                        {
                            label: "1/3",
                            value: "1/3"
                        },
                        {
                            label: "2/3",
                            value: "2/3"
                        },
                        {
                            label: "1/2",
                            value: "1/2",
                        },
                        {
                            label: "1/4",
                            value: "1/4",
                        },
                        {
                            label: "3/4",
                            value: "3/4",
                        }
                    ]
                }
            ]
        },

    ]
}

export default Column;