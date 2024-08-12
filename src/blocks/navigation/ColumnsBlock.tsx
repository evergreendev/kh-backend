import {Block} from "payload/types";
import navBlocks from "./navBlocks";

const ColumnsBlock: Block = {
    slug: 'columns-block',
    fields: [
        {
            name: 'layout',
            type: 'select',
            defaultValue: 'oneColumn',
            options: [
                {
                    label: 'One Column',
                    value: 'oneColumn',
                },
                {
                    label: 'Two Columns',
                    value: 'twoColumns',
                },
                {
                    label: 'Two Thirds + One Third',
                    value: 'twoThirdsOneThird',
                },
                {
                    label: 'Half + Half',
                    value: 'halfAndHalf',
                },
                {
                    label: 'Three Columns',
                    value: 'threeColumns',
                },
            ],
        },
        {
            name: "columnOne",
            type: "blocks",
            labels: {
                plural: "items",
                singular: "item"
            },
            blocks: [
                ...navBlocks
            ]
        },
        {
            name: "columnTwo",
            type: "blocks",
            admin: {
                condition: (_, siblingData) =>
                    ['twoColumns', 'twoThirdsOneThird', 'halfAndHalf', 'threeColumns'].includes(
                        siblingData.layout,
                    ),
            },
            blocks: [
                ...navBlocks
            ]
        },
        {
            name: "columnThree",
            type: "blocks",
            admin: {
                condition: (_, siblingData) =>
                    ['threeColumns'].includes(
                        siblingData.layout,
                    ),
            },
            blocks: [
                ...navBlocks
            ]
        }
    ]
}

export default ColumnsBlock;
