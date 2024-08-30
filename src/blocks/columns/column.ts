import {Block} from "payload/types";
import widthField from "../../fields/widthField";

const Column: (contentBlocks:Block[]) => Block = (contentBlocks) => {
    return {
        slug: "column",
        fields: [
            {
                type: "checkbox",
                name: "vertical_separator",
                label: "Vertical separator",
                admin: {
                    description: "If checked all columns will be seperated by a vertical line"
                }
            },
            {
                name: "columns",
                type: "array",
                fields: [
                    {
                        name: "content",
                        type: "blocks",
                        blocks: contentBlocks
                    },
                    widthField
                ]
            },

        ]
    }
}

export default Column;
