import {Block} from "payload/types";
import navItemFields from "../../fields/navItemFields";

const PhotoMenuBlock:Block = {
    slug: "photoMenu",
    fields: [
        {
            name: "item",
            type: "array",
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media"
                },
                ...navItemFields
            ]
        }
    ]
}

export default PhotoMenuBlock
