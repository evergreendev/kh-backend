import {Block} from "payload/types";

export const MediaBlock: Block = {
    slug: "MediaBlock",
    fields: [
        {
            name: "media",
            type: "upload",
            relationTo: "media"
        }
    ]
}

export default MediaBlock;
