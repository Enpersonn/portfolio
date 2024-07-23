import type { PreviewPageType } from "../types/page/pages.type";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


export default function useSearch({ page, search, type = "article"}: { page: number; search: string; type: string }) {
    const queryKey =  ['search', {page, search, type}];
    const isSearchEnabled = search.length > 0;
    
    const res = useQuery<{
        items: PreviewPageType[];
        count: number;
    }>({

        queryKey,
        enabled: isSearchEnabled,
        queryFn: async () => {
            const params = new URLSearchParams({
                q: search,
                page: page.toString(),
                type: type,
            }).toString();
            const res = await axios.get(`/api/search?${params}`);
            return res.data;
        }
    });

    return {
        ...res,
        isPending: res.isPending && isSearchEnabled,
    }
    
}