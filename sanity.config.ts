import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemas/schema'

const projectId = process.env.SANITY_PROJECT_ID || 'mk35mbbk'
const dataset = process.env.SANITY_DATASET || 'production'

export default defineConfig({
  title: 'Smartholiday.az CMS',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema,
})
