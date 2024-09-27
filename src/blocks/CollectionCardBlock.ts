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
            required: true,
            options: [
                {label:"Pages", value:"pages"},
                {label: "Events",value:"events"},
                {
                    label: "Museum Collections",
                    value:"museumCollections"}
            ]
        }
    ]
}

export default CollectionCardBlock;
