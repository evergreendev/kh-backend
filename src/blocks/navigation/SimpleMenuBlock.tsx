import {Block} from "payload/types";
import {ArrayRowLabel} from "../../components/ArrayRowLabel";

const SimpleMenuBlock: Block = {
    slug: 'SimpleMenu', // required
    fields: [
        {
            name: "items",
            type: "array",
            admin: {
                components: {
                    RowLabel: ArrayRowLabel
                }
            },
            fields: [
                {
                    name: "title",
                    type: "text",
                },
                {
                    name: "page",
                    type: "relationship",
                    relationTo: ["pages"],
                }
            ]
        }
    ],
}

export default SimpleMenuBlock;
