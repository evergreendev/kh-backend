import {Block} from "payload/types";

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
            name: "collectionsToPull",
            type: "select",
            options: [
                "pages",
                "events",
                "collections"
            ]
        }
    ]
}

export default CollectionCardBlock;
