import { SEARCH_LIMIT, searchQueryWithLimit } from "@/common/queries/search.query";
import { client } from "@/sanity/lib/client";


export const GET = async (req: Request) => {
    const query = new URLSearchParams(req.url.split('?')[1]);
    const search = query.get('q');
    const page = query.get('page');
    const type = query.get('type');

    if (!search) return new Response('Missing search query', { status: 400 });

    const pageInt = Number.parseInt(page || '1');
    if(Number.isNaN(pageInt)) return new Response('Invalid page number', { status: 400 });

    const c = client;

    const SKIP = Math.max(0, (pageInt - 1) * SEARCH_LIMIT);
    const searchType = type || 'article';

    const data = await c.fetch(searchQueryWithLimit,{
        q: search?.split(' ').map((s) => `*${s}*`),
        limit: SEARCH_LIMIT * pageInt,
        type: searchType,
        skip: SKIP
    });

    return Response.json(data);
}