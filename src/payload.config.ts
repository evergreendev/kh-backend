import path from 'path'
import {postgresAdapter} from '@payloadcms/db-postgres'
import {webpackBundler} from '@payloadcms/bundler-webpack'
import {
    HTMLConverterFeature,
    lexicalEditor,
    LinkFeature,
    RelationshipFeature,
    BlocksFeature
} from "@payloadcms/richtext-lexical";
import {buildConfig} from 'payload/config'
import search from '@payloadcms/plugin-search'
import formBuilder from '@payloadcms/plugin-form-builder'
import seoPlugin from '@payloadcms/plugin-seo'

import Users from './collections/Users'
import {Navigation} from "./globals/Navigation/Navigation";
import {SiteOptions} from "./globals/SiteOptions";
import {Media} from "./collections/Media";
import {Pages} from "./collections/Pages";
import {Hours} from "./globals/Hours/Hours";
import {Footer} from "./globals/Footer";
import {revalidate} from "./utilities/revalidate";
import payload from "payload";
import {revalidateForm} from "./collections/Forms/hooks/revalidateForm";
import FileUploadBlock from "./blocks/FileUploadBlock";
import {UserUploadedFormDocuments} from "./collections/UserUploadedFormDocuments";
import {Employment} from "./collections/Employment";
import {collectionSlugs} from "./blocks/fields/collectionSlugs";
import {fixDuplicationCollectionHook} from "./hooks/fixDuplicationCollectionHook";
import HoursBlock from "./blocks/HoursBlock";
import AdmissionBlock from "./blocks/AdmissionBlock";
import redirects from "@payloadcms/plugin-redirects";
import sendEmail from './hooks/sendEmail';
import {Banner} from "./globals/Banner";
import IFrame from "./blocks/IFrame";

// @ts-ignore
export default buildConfig({
    admin: {
        user: Users.slug,
        bundler: webpackBundler(),
    },
    cors: [
        process.env.PAYLOAD_PUBLIC_NEXT_URL,
        process.env.PAYLOAD_PUBLIC_SERVER_URL
    ],
    csrf: [
        process.env.PAYLOAD_PUBLIC_NEXT_URL,
        process.env.PAYLOAD_PUBLIC_SERVER_URL
    ],
    editor:
        lexicalEditor({
            features: ({defaultFeatures}) => {
                return [
                    ...defaultFeatures.filter(feature => {
                        return feature.key !== 'upload' && feature.key !== 'checkList'
                    }),
                    LinkFeature({
                        enabledCollections: [...collectionSlugs, "media"]
                    }),
                    RelationshipFeature({
                        enabledCollections: collectionSlugs
                    }),
                    HTMLConverterFeature({}),
                    BlocksFeature({
                        blocks: [HoursBlock,AdmissionBlock,IFrame]
                    })
                ]
            }
        }),
    serverURL:
    process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections:
        [Users, Media, Pages, UserUploadedFormDocuments, Employment],
    globals:
        [Navigation, SiteOptions, Hours, Footer, Banner],
    typescript:
        {
            outputFile: path.resolve(__dirname, 'payload-types.ts'),
        }
    ,
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    }
    ,
    plugins: [
        redirects({
            collections: [...collectionSlugs]
        }),
        seoPlugin({
            collections: [
                ...collectionSlugs
            ],
            uploadsCollection: 'media',
            generateTitle: ({doc}) => {
                // @ts-ignore
                if (doc.title.value === "home") {
                    return 'Crazy Horse Memorial®'
                } else {
                    // @ts-ignore
                    return `Crazy Horse Memorial® - ${doc.title.value}`
                }
            },
            // @ts-ignore
            generateDescription: ({doc}) => doc.excerpt.value
        }),
        formBuilder({
            fields: {
                payment: false,
                FileUploadBlock
            },
            formOverrides: {
                hooks: {
                    beforeChange: [fixDuplicationCollectionHook],
                    afterChange: [revalidateForm]
                },
                fields:[
                    {
                        name: "showFieldTable",
                        type: "checkbox",
                        defaultValue: true
                    }
                ]
            },
            formSubmissionOverrides:{
                hooks: {
                    beforeChange: [
                        (data) => sendEmail(data),
                    ]
                }
            }
        }),
        search({
            collections: collectionSlugs,
            defaultPriorities: {
                pages: 10
            },
            beforeSync: ({originalDoc, searchDoc}) => {

                revalidate({payload, collection: 'search', slug: ""})

                return searchDoc;
            }
        })
    ],
    db:
        postgresAdapter({
            pool: {
                connectionString: process.env.DATABASE_URI,
            },
        }),
})
