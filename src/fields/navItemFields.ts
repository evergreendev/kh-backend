import {Field} from "payload/types";

const navItemFields: Field[] = [{
    name: "title",
    type: "text",
},{
    name: "Relation",
    type: "relationship",
    relationTo: ["pages"]
}

]

export default navItemFields;
