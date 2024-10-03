import {Block} from "payload/types";
import widthField from "../../fields/widthField";
import navItemFields from "../../fields/navItemFields";
import React from "react";

const Column: (contentBlocks:Block[]) => Block = (contentBlocks) => {
    return {
        slug: "column",
        labels: {
            singular: "Columns",
            plural: "Columns"
        },
        fields: [
            {
                type: "text",
                name: "sectionID",
                label: "ID (optional)"
            },
            {
                type: "checkbox",
                name: "vertical_separator",
                label: "Vertical separator",
                admin: {
                    description: "If checked all columns will be seperated by a vertical line"
                }
            },
            {
                type: "checkbox",
                name: "fullWidth",
                admin: {
                    description: "Makes row go to the edge of the screen"
                }
            },
            {
                type: "checkbox",
                name: "narrowRow",
                admin: {
                    condition: (data, siblingData, { user, }) => {
                        return !siblingData.fullWidth
                    },
                    description: "Make this group of columns narrow"
                }
            },
            {
                type: "checkbox",
                name: "wideSpacing",
                admin: {
                    description: "Adds more spacing between rows"
                }
            },
            {
                type: "checkbox",
                name: "grayBackground",
                admin: {
                    description: "Make this group of columns have a gray background"
                }
            },
            {
                name: "columns",
                type: "array",
                fields: [
                    {
                        name: "content",
                        type: "blocks",
                        blocks: contentBlocks
                    },
                    widthField,
                    {
                        name: "center",
                        label: "Center column",
                        type: "checkbox"
                    },
                    {
                        name: "linkLabel",
                        type: "ui",
                        admin: {
                            components: {
                                Field: ()=> {
                                    return <h3>Add Link to Column (optional)</h3>
                                }
                            }
                        }
                    },
                    ...navItemFields,

                ]
            },

        ]
    }
}

export default Column;
