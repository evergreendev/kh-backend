import path from 'path'
import {postgresAdapter} from '@payloadcms/db-postgres'
import {webpackBundler} from '@payloadcms/bundler-webpack'
import {HTMLConverterFeature, lexicalEditor, LinkFeature, RelationshipFeature} from "@payloadcms/richtext-lexical";
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
import {MuseumCollections} from "./collections/MuseumCollections";
import {ContinuingToImpact} from "./collections/ContinuingToImpact";
import {StudentSpotlight} from "./collections/StudentSpotlight";
import {PassionsForTheProject} from "./collections/PassionsForTheProject";
import {collectionSlugs} from "./blocks/fields/collectionSlugs";
import {Support} from "./collections/Support";
import {EventCollections} from "./collections/Events";
import {fixDuplicationCollectionHook} from "./hooks/fixDuplicationCollectionHook";
import {Calendar} from "./globals/Calendar/Calendar";

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
                ]
            }
        }),
    serverURL:
    process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections:
        [Users, Media, Pages,UserUploadedFormDocuments,Employment,MuseumCollections,ContinuingToImpact,StudentSpotlight,PassionsForTheProject,Support,EventCollections],
    globals:
        [Navigation, SiteOptions, Hours, Footer, Calendar],
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
        seoPlugin({
            collections: [
                'pages'
            ],
            uploadsCollection: 'media',
            generateTitle: ({doc}) => {
                // @ts-ignore
                if (doc.title.value === "home"){
                    return 'Crazy Horse Memorial®'
                }else {
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
