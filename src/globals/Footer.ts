import {GlobalConfig} from "payload/types";
import {revalidateFooter} from "./hooks/revalidateFooter";
import {isAdmin} from "../access/isAdmin";
import {lexicalHTML} from "@payloadcms/richtext-lexical";

export const Footer: GlobalConfig = {
    slug: "footer",
    admin: {
        hidden: ({user}) => user.role !== "admin"
    },
    hooks: {
        afterChange: [
            revalidateFooter
        ]
    },
    access: {
        read: () => true,
        update: isAdmin(),
    },
    fields: [
                {
                    name: "columns",
                    type: "array",
                    fields: [
                        {
                            name: "content",
                            type: "richText",
                        },
                        lexicalHTML("content",{name: "content_html"}),
                        {
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
                    ]
                }
    ]
}
