import {GlobalConfig} from "payload/types";
import {isAdmin} from "../../access/isAdmin";
import {fixDuplicationHook} from "../../hooks/fixDuplicationHook";
import {revalidateSiteOptions} from "../hooks/revalidateSiteOptions";
import {useField} from "payload/components/forms";

export const Admission: GlobalConfig = {
    slug: "admission",
    admin: {
        hidden: ({user}) => user.role !== "admin"
    },
    hooks:{
        afterChange: [revalidateSiteOptions]
    },
    access: {
        read: () => true,
        update: isAdmin(),
    },
    fields: [
        {
            name: "Admissions",
            type: "array",
            admin: {
                components: {
                    RowLabel: ({ data, index, path: arrayFieldPath }) => {
                        // arrayFieldPath example: "Navs.0"
                        const path = `${arrayFieldPath}.admission_start`
                        const start  = useField({ path })
                        const end = useField({path:`${arrayFieldPath}.admission_end`})

                        if (start.value && end.value) {
                            const dateObj = new Date(start.value as string);
                            const endDateObj = new Date(end.value as string);
                            return dateObj.getMonth()+1 +"/"+ dateObj.getDate() +"/" +dateObj.getFullYear() + " - "
                                + (endDateObj.getMonth()+1) +"/"+endDateObj.getDate()+"/"+endDateObj.getFullYear();
                        }

                        return `Item ${index + 1}`;
                    }
                },
            },
            hooks: {
                beforeChange: [
                    fixDuplicationHook
                ]
            },
            fields: [{
                type: "row",
                fields: [
                    {
                        name: "admission_start",
                        label: "Admission Start",
                        type: "date",
                        required: true,
                        admin: {
                            width: '50%',
                        },
                    },
                    {
                        name: "admission_end",
                        label: "Admission End",
                        type: "date",
                        required: true,
                        admin: {
                            width: '50%',
                        },
                    },
                    {
                        name: "body",
                        type: "richText"
                    }
                ]
            },]
        }

    ]
}
