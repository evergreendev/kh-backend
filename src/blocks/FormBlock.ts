import {Block} from "payload/types";

export const FormBlock: Block = {
    slug: "FormBlock",
    fields: [
        {
            name: "form",
            type: "relationship",
            relationTo: "forms"
        }
    ]
}

export default FormBlock;
