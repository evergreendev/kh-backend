import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/isAdmin";
import {isAdminOrPublished} from "../../access/isAdminOrPublished";
import {populatePublishedAt} from "../../hooks/populatePublishedAt";
import {revalidatePage} from "./hooks/revalidatePage";
import standardFields from "../../fields/standardFields";
import {ArrayRowLabel} from "../../components/ArrayRowLabel";
import Column from "../../blocks/columns/column";
import BreakerBlock from "../../blocks/BreakerBlock";
import MediaBlock from "../../blocks/MediaBlock";
import TextBlock from "../../blocks/TextBlock";
import HeaderBlock from "../../blocks/HeaderBlock";
import MenuButtonBlock from "../../blocks/navigation/MenuButtonBlock";
import CompareSliderBlock from "../../blocks/CompareSliderBlock";
import FormBlock from "../../blocks/FormBlock";

export const Pages: CollectionConfig = {
    slug: "pages",
    admin: {
        useAsTitle: "title",
        hidden: ({user}) => user.role !== "admin",
        livePreview: {
            url: ({data}) => `${process.env.PAYLOAD_PUBLIC_NEXT_URL}${data.slug !== 'home' ? `/${data.slug}`:""}?draft=true&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`,
        },
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
    fields: [
        {
          name: "intro_content",
          label: "Intro Content",
            type: "group",
            admin:{disableListColumn:true},
            fields: [
                {
                    name: "video",
                    type: "text",
                    admin: {
                        description: "URL to youtube video. If this is empty slides will show on front end instead of the video"
                    }
                },
                {
                    name: "thumbnail",
                    type: "upload",
                    relationTo: "media"
                },
                {
                    name: "images",
                    type: "array",
                    fields: [
                        {
                            name: "media",
                            type: "upload",
                            relationTo: "media"
                        }
                    ]
                },
                {
                    name: "header",
                    type: "text"
                },
                {
                    name: "content",
                    type: "textarea"
                }
            ]
        },
        {
            name: "jump_menu",
            label: "Jump Menu",
            type: "array",
            admin: {
                components: {
                    RowLabel: ArrayRowLabel
                },
                description: "Each jump menu nav item should have either a Link to another page, or an internal link to a section within the current page"
            },
            labels: {
                singular: "item",
                plural: "items"
            },
            fields: [
                {
                    name: "title",
                    type: "text"
                },
                {
                    name: "link",
                    type: "relationship",
                    relationTo: ["pages"],
                },
                {
                    name: "internal_link",
                    type: "text",
                    admin: {
                        description: "Used to link to sections within the current page. Name sections the same as this to link"
                    }
                }
            ]
        },
        {
            name: 'parent_page',
            label: "Parent Page",
            type: "relationship",
            relationTo: "pages",
            filterOptions: ({id}) => {
                if(!id){
                    return {};
                }

                return {
                    id: {not_equals: id},
                };
            },
            admin: {
                position: "sidebar"
            }
        },
        {
            name: "excerpt",
            type: "textarea",
            admin: {
                position: "sidebar"
            }
        },
        {
            name: 'full_path',
            label: "Full path",
            type: "text",
            admin: {
                position: "sidebar"
            },
            access: {
                update: () => false,
                create: () => false,
            },
            hooks: {
                afterRead: [
                    async ({ data, req }) => {
                        const { parent_page } = data

                        if (!parent_page) return data.slug

                        const pages = await req.payload.find({
                            req,
                            collection: "pages",
                            where: {
                                'id': {equals: parent_page}
                            },
                            limit: 0,
                            depth: 0,
                            pagination: false
                        });

                        let curr = pages.docs[0];
                        let final = [];
                        final.push(data.slug);
                        final.push(curr.slug);

                        while (curr.parent_page) {
                            const pages = await req.payload.find({
                                req,
                                collection: "pages",
                                where: {
                                    'id': {equals: curr.parent_page}
                                },
                                limit: 0,
                                depth: 0,
                                pagination: false
                            });
                            curr = pages.docs[0];

                            final.push(curr.slug);
                        }

                        return final.reverse().join("/");
                    }
                ]
            }
        },
        {
            name: "layout",
            type: "blocks",
            labels: {
                singular: "row",
                plural: "rows",
            },
            blocks: [Column([MediaBlock, TextBlock,MenuButtonBlock, HeaderBlock,CompareSliderBlock,FormBlock]),BreakerBlock,MediaBlock,HeaderBlock,MenuButtonBlock,CompareSliderBlock,FormBlock]
        },
        ...standardFields
    ]
}
