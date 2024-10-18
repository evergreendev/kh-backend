import {Block} from "payload/types";
import navItemFields from "../fields/navItemFields";

export const AdmissionBlock: Block = {
    slug: "AdmissionBlock",
    fields: [
        {
            name: "showAllFuture",
            type: "checkbox"
        },
        ...navItemFields.filter(x => {
            return (x as any).name !== "title"
        })
    ]
}

export default AdmissionBlock;
