import {Block} from "payload/types";
import navItemFields from "../../fields/navItemFields";
import {ArrayRowLabel} from "../../components/ArrayRowLabel";

const PhotoMenuBlock:Block = {
    slug: "photoMenu",
    fields: [
        ...navItemFields,
        {
            name: "item",
            type: "array",
            admin: {
              components:{
                  RowLabel: ArrayRowLabel
              }
            },
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
