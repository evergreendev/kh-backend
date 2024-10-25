import {GlobalConfig} from "payload/types";
import {isAdmin} from "../../access/isAdmin";
import {revalidateSiteOptions} from "../hooks/revalidateSiteOptions";

export const Banner: GlobalConfig = {
    slug: "banner",
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
            type: "row",
            fields: [
                {
                    name: "banner_start",
                    label: "Banner Start Date",
                    type: "date",
                    admin: {
                        width: '49%',
                    },
                },
                {
                    name: "banner_end",
                    label: "Banner End Date",
                    type: "date",
                    admin: {
                        width: '49%',
                    },
                },
                {
                    name: "message",
                    type: "richText"
                }
            ]
        },
    ]
}

