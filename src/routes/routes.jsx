import Layout from '@components/layout';
import ErrorPage from '@pages/ErrorPage';
import { PrivateRoute } from '@routes/PrivateRoute';
import { createBrowserRouter } from 'react-router-dom';
import * as Lazy from '@/routes/lazy';
import { Loading } from '@components/ui/Loading';
import { Suspense } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Lazy.MainPage />
          </Suspense>
        ),
      },
      {
        path: 'class',
        element: (
          <Suspense fallback={<Loading />}>
            <Lazy.ClassList />
          </Suspense>
        ),
      },
      {
        path: 'class/:_id',
        element: (
          <Suspense fallback={<Loading />}>
            <Lazy.ClassDetail />
          </Suspense>
        ),
      },
      {
        path: 'class/add',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <Lazy.ClassAdd />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: 'class/:_id/edit',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <Lazy.ClassEdit />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: 'class/:_id/order',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <Lazy.ClassOrder />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: 'class/qna',
        element: (
          <Suspense fallback={<Loading />}>
            <Lazy.ClassQnAList />
          </Suspense>
        ),
      },
      {
        path: 'recipe',
        element: (
          <Suspense fallback={<Loading />}>
            <Lazy.RecipeList />,
          </Suspense>
        ),
      },
      {
        path: 'recipe/:_id',
        element: (
          <Suspense fallback={<Loading />}>
            <Lazy.RecipeDetail />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <Lazy.ReplyList />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'recipe/add',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <Lazy.RecipeAdd />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: 'recipe/:_id/edit',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <Lazy.RecipeEdit />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: 'mypage/:_id',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <Lazy.MyPage />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: 'mypage/:_id/edit',
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <Lazy.MyPageEdit />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<Loading />}>
            <Lazy.Login />
          </Suspense>
        ),
      },
      {
        path: 'signup',
        element: (
          <Suspense fallback={<Loading />}>
            <Lazy.SignUp />
          </Suspense>
        ),
      },
      {
        path: 'signup-alert',
        element: (
          <Suspense fallback={<Loading />}>
            <Lazy.SignUpWelcome />
          </Suspense>
        ),
      },
      {
        path: 'admin',
        element: (
          <PrivateRoute requiredRole="admin">
            <Suspense fallback={<Loading />}>
              <Lazy.Admin />
            </Suspense>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
