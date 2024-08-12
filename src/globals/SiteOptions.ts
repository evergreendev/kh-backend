import { GlobalConfig } from "payload/types";
import {isAdmin} from "../access/isAdmin";
import {revalidateSiteOptions} from "./hooks/revalidateSiteOptions";

export const SiteOptions: GlobalConfig = {
    slug: "site-options",
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
            name: "siteTitle",
            label: "Site Title",
            type: "text",
            required: true,
        },
        {
            name: "siteDescription",
            label: "Site Description",
            type: "textarea",
            required: true,
        },
        {
            name: "siteLogo",
            label: "Site Logo Large",
            type: "upload",
            relationTo: "media",
            required: true
        },
        {
            name: "siteLogoSmall",
            label: "Site Logo Small",
            type: "upload",
            relationTo: "media",
            required: true
        }
    ]
}
