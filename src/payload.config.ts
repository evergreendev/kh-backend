import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import {Navigation} from "./globals/Navigation/Navigation";
import {SiteOptions} from "./globals/SiteOptions";
import {Media} from "./collections/Media";
import {Pages} from "./collections/Pages";
import {Hours} from "./globals/Hours/Hours";

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
  editor: lexicalEditor({}),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Users, Media, Pages],
  globals: [Navigation, SiteOptions, Hours],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})
