import {Block} from "payload/types";

const CollectionCardBlock:Block = {
    slug: "collectionCards",
    fields: [
        {
            name: "items",
            type: "relationship",
            relationTo: ["pages"]
        }
    ]
}

export default CollectionCardBlock;
