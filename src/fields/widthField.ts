import {Field} from "payload/types";

const widthField:Field = {
    name: "width",
    type: "select",
    options: [
        {
            label: "1/3",
            value: "1/3"
        },
        {
            label: "2/3",
            value: "2/3"
        },
        {
            label: "1/2",
            value: "1/2",
        },
        {
            label: "1/4",
            value: "1/4",
        },
        {
            label: "3/4",
            value: "3/4",
        }
    ]
}

export default widthField;
