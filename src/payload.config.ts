import path from 'path'
import {postgresAdapter} from '@payloadcms/db-postgres'
import {webpackBundler} from '@payloadcms/bundler-webpack'
import {HTMLConverterFeature, lexicalEditor, LinkFeature, RelationshipFeature} from "@payloadcms/richtext-lexical";
import {buildConfig} from 'payload/config'
import search from '@payloadcms/plugin-search'

import Users from './collections/Users'
import {Navigation} from "./globals/Navigation/Navigation";
import {SiteOptions} from "./globals/SiteOptions";
import {Media} from "./collections/Media";
import {Pages} from "./collections/Pages";
import {Hours} from "./globals/Hours/Hours";
import {Footer} from "./globals/Footer";
import {revalidate} from "./utilities/revalidate";
import payload from "payload";

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
    editor: lexicalEditor({
        features: ({defaultFeatures}) => {
            return [
                ...defaultFeatures.filter(feature => {
                    return feature.key !== 'upload' && feature.key !== 'checkList'
                }),
                LinkFeature({
                    enabledCollections: ["pages"]
                }),
                RelationshipFeature({
                    enabledCollections: ["pages"]
                }),
                HTMLConverterFeature({}),
            ]
        }
    }),
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections: [Users, Media, Pages],
    globals: [Navigation, SiteOptions, Hours, Footer],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
    plugins: [
        search({
            collections: ['pages'],
            defaultPriorities: {
                pages: 10
            },
            beforeSync: ({ originalDoc, searchDoc }) => {

                revalidate({payload, collection: 'search', slug: ""})

                return searchDoc;
            }
        })
    ],
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI,
        },
    }),
})
