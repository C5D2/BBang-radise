import useClassApis from '@hooks/apis/useClassApis.mjs';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useQuery } from '@tanstack/react-query';

export const useGetClassInfo = (page, searchParams) => {
  const axios = useCustomAxios();

  return useQuery({
    queryKey: ['/products?showSoldOut=true', page],
    queryFn: () =>
      axios.get('/products?showSoldOut=true', {
        params: {
          page,
          limit: import.meta.env.VITE_POST_LIMIT,
          sort: JSON.stringify({ updatedAt: -1 }),
          keyword: searchParams.get('keyword'),
        },
      }),
    select: (response) => response.data,
    suspense: false,
  });
};

export const useGetClassDetail = (_id) => {
  const { getClassDetail } = useClassApis();

  return useQuery({
    queryKey: ['products', _id],
    queryFn: () => getClassDetail(_id),
    select: (response) => response.data,
    enabled: !!_id,
    suspense: true,
  });
};
