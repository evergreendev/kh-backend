import {Block} from "payload/types";
import navItemFields from "../fields/navItemFields";

export const HoursBlock: Block = {
    slug: "HoursBlock",
    fields: [
        {
            name: "showAllCurrent",
            admin: {
                description: "This will display all the opening and closing times for all facilities"
            },
            type: "checkbox"
        },
        {
            name: "showAllFuture",
            admin: {
                description: "This will display all hours for all facilities happening in the future"
            },
            type: "checkbox"
        },
        {
            name: "centerText",
            type: "checkbox"
        },
        {
            name: "boldText",
            type: "checkbox"
        },
        ...navItemFields.filter(x => {
            return (x as any).name !== "title"
        })
    ]
}

export default HoursBlock;
