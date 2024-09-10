import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from '@styles/GlobalStyle';
import { Suspense } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ErrorBoundary } from 'react-error-boundary';
// import { FallbackComponent } from '@components/error';
import router from '@routes/routes';
import { Loading } from '@components/ui/Loading';
import MetaTag from '@components/ui/MetaTag';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <MetaTag />
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
