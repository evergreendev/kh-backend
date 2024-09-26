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
            hasMany: true,
            options: [
                "pages",
                "events",
                "collections"
            ]
        }
    ]
}

export default CollectionCardBlock;
