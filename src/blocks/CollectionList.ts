import {Block} from "payload/types";
import {collectionSlugsOptions} from "./fields/collectionSlugs";

const CollectionCardBlock:Block = {
    slug: "collectionList",
    fields: [
        {
            name: "perPage",
            label: "Number of items to show per page",
            type: "number",
            min: 1,
            defaultValue: 10
        },
        {
            name: "collectionsToPull",
            type: "select",
            required: true,
            options: collectionSlugsOptions
        }
    ]
}

export default CollectionCardBlock;
