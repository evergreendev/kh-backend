import {Block} from "payload/types";

export const ImageCard: Block = {
    slug: "ImageCard",
    fields: [
        {
            name: "image",
            type: "upload",
            relationTo: "media"
        },
        {
            name: "text",
            type: "richText"
        },
        {
            name: "reverse",
            label: "Reverse Card",
            type: "checkbox",
            admin: {
                description: "If this is checked the image will appear on the left hand side of the card"
            }
        }
    ]
}

export default ImageCard;
