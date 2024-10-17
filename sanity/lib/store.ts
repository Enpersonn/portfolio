import * as queryStore from '@sanity/react-loader';
import { client } from './client';

queryStore.setServerClient(client);

export const { loadQuery } = queryStore;
