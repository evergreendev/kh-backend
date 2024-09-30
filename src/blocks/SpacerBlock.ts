import {Block} from "payload/types";

export const SpacerBlock: Block = {
    slug: "SpacerBlock",
    fields: [
        {
            type: "number",
            defaultValue: 48,
            name: "height",
            label: "height(pixels)"
        }
    ]
}

export default SpacerBlock;
