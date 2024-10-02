import {Block} from "payload/types";

const GalleryBlock:Block = {
    slug: "gallery",
    fields: [
        {
            name: "items",
            type: "array",
            fields: [
                {
                    name: "image",
                    type: "upload",
                    required: true,
                    relationTo: "media"
                },
                {
                    name: "caption",
                    type: "text"
                }
            ]
        },

    ]
}

export default GalleryBlock;
