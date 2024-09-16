import {Block} from "payload/types";

export const CompareSliderBlock: Block = {
    slug: "CompareSliderBlock",
    fields: [
        {
            name: "media1",
            type: "upload",
            relationTo: "media"
        },
        {
            name: "media2",
            type: "upload",
            relationTo: "media"
        },
    ]
}

export default CompareSliderBlock;
