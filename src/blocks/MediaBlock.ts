import {Block} from "payload/types";

export const MediaBlock: Block = {
    slug: "MediaBlock",
    fields: [
        {
            name: "media",
            type: "upload",
            relationTo: "media"
        },
        {
            name: "thumbnail",
            admin: {
                description: "Thumbnail to show for videos. This field won't be used if Media is not a video"
            },
            type: "upload",
            relationTo: "media"
        },
        {
            name: "expandImage",
            type: "checkbox",
            admin: {
                description: "Forces image to expand to fill the size of the container"
            }
        }
    ]
}

export default MediaBlock;
