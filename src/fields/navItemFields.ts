import {Field} from "payload/types";

const navItemFields: Field[] = [{
    name: "title",
    label: "Link Title (optional)",
    type: "text",
},
    {
        name: "external",
        type: "checkbox"
    },
    {
    name: "Relation",
        admin: {
            condition: (data, siblingData) => {
                return !siblingData.external;
            }
        },
    type: "relationship",
    relationTo: ["pages"],
},
    {
        name: "external_url",
        label: "External URL",
        type: "text",
        admin: {
            condition: (data, siblingData) => {
                return siblingData.external;
            }
        }
    }

]

export default navItemFields;
