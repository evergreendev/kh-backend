import {Block} from "payload/types";
import {collectionSlugs, collectionSlugsOptions} from "./fields/collectionSlugs";

const CollectionCardBlock:Block = {
    slug: "collectionCards",
    fields: [
        {
            name: "numberOfItemsToShow",
            type: "number",
            min: 1,
            defaultValue: 3
        },
        {
            name: "type",
            type: "select",
            options: [
                "slider",
                "blocks"
            ]
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
