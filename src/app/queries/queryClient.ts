import { QueryClient } from '@tanstack/react-query';
import { APIError, StatusCode } from 'api/types';
import { minutesToMilliseconds } from 'date-fns';

const useErrorBoundary = (error: unknown) =>
  error instanceof APIError && error.status === StatusCode.FORBIDDEN;

const generateQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: minutesToMilliseconds(6),
        cacheTime: minutesToMilliseconds(15),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        useErrorBoundary,
      },
      mutations: {
        useErrorBoundary,
      },
    },
  });

const queryClient = generateQueryClient();
export default queryClient;
