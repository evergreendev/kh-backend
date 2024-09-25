import {Block} from "payload/types";

export const EmploymentBlock: Block = {
    slug: "EmploymentBlock",
    fields: [
        {
            name: "company",
            required: true,
            type: "select",
            options: [{label: "Crazy Horse Memorial®", value: "crazy-horse"},{label:"Korczak's Heritage",value: "korczak"}],
        },
        {
            name: "positionType",
            required: true,
            type: "select",
            options: ["year-round","seasonal"]
        },
    ]
}

export default EmploymentBlock;
