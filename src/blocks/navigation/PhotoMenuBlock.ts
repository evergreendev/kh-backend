import {Block} from "payload/types";
import navItemFields from "../../fields/navItemFields";

const PhotoMenuBlock:Block = {
    slug: "photoMenu",
    fields: [
        ...navItemFields,
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
