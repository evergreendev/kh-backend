import {Block} from "payload/types";
import {collectionSlugs} from "./fields/collectionSlugs";

const SingleCollectionBlock:Block = {
    slug: "singleCollectionBlock",
    fields: [
        {
            name: "type",
            type: "select",
            options: [
                "vertical",
                "horizontal"
            ]
        },
        {
            name: "collection",
            type: "relationship",
            required: true,
            relationTo: collectionSlugs
        }
    ]
}

export default SingleCollectionBlock;
