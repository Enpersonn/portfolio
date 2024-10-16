import type {  SchemaTypeDefinition } from 'sanity'
import { article } from './schemas/page/article.schema'
import objects from './schemas/objects'
import { project } from './schemas/page/project.schema'
import { contactSchema } from './schemas/page/contact.schema'
import { aboutSchema } from './schemas/page/about.schema'
import { hookDocsSchema } from './schemas/page/hooks.shema'

export const schemaTypes = [
  article,
  project,
  aboutSchema,
  contactSchema,
  hookDocsSchema,
  ...objects,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
