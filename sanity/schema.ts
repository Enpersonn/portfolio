import type {  SchemaTypeDefinition } from 'sanity'
import { article } from './schemas/page/article.schema'
import objects from './schemas/objects'

export const schemaTypes = [
  article,

  ...objects,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
