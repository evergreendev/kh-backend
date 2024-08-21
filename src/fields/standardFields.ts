import {slugField} from "./slug";
import {Field} from "payload/types";

const standardFields: Field[] = [{
    name: "title",
    type: "text",
    required: true,
    admin: {
        position: "sidebar"
    }
},
    slugField(),
    {
        name: 'publishedAt',
        type: 'date',
        admin: {
            position: 'sidebar',
        },
    },
    {
        name: 'featuredImage',
        label: 'Featured Image',
        type: 'upload',
        relationTo: "media",
        admin: {
            position: 'sidebar',
        }
    }]

export default standardFields;
