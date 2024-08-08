import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/isAdmin";
import {isAdminOrPublished} from "../../access/isAdminOrPublished";
import {populatePublishedAt} from "../../hooks/populatePublishedAt";
import {revalidatePage} from "./hooks/revalidatePage";
import standardFields from "../../fields/standardFields";

export const Pages: CollectionConfig = {
    slug: "pages",
    admin: {
        useAsTitle: "title",
        hidden: ({user}) => user.role !== "admin"
    },
    hooks: {
        beforeChange: [populatePublishedAt],
        afterChange: [revalidatePage]
    },
    versions: {
        drafts: true
    },
    access: {
        read: isAdminOrPublished(),
        update: isAdmin(),
        create: isAdmin(),
        delete: isAdmin()
    },
    fields: [...standardFields]
}
