import type {  SchemaTypeDefinition } from 'sanity'
import { article } from './schemas/page/article.schema'
import objects from './schemas/objects'
import { project } from './schemas/page/project.schema'

export const schemaTypes = [
  article,
  project,
  ...objects,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
