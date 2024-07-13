import type {  SchemaTypeDefinition } from 'sanity'
import { article } from './schemas/page/article.schema'

export const schemaTypes = [
  article,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
