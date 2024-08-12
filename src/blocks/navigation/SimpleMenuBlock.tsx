import {Block} from "payload/types";
import {NavRowLabel} from "../../globals/Navigation/components/NavRowLabel";

const SimpleMenuBlock: Block = {
    slug: 'SimpleMenu', // required
    fields: [
        {
            name: "items",
            type: "array",
            admin: {
                components: {
                    RowLabel: NavRowLabel
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
