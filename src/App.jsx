import React from 'react';
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import Blogs from "./components/Blogs/Blogs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import PageNotFound from './components/PageNotFound/PageNotFound';
import Statistics from "./components/Statistics/Statistics";
import Topic from "./components/Topic/Topic";
import Topics from "./components/Topics/Topics";
import MainLayout from "./layout/MainLayout/MainLayout";

function App() {
  // router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          loader: () => redirect('/topics'),
          errorElement: <ErrorPage />,
        },
        {
          path: '/topics',
          element: <Topics />,
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          errorElement: <ErrorPage />,
        },
        {
          path: '/topics/:id',
          element: <Topic />,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          errorElement: <ErrorPage />,
        },
        {
          path: '/statistics',
          element: <Statistics />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/blogs',
          element: <Blogs />,
          errorElement: <ErrorPage />,
        },
        {
          path: '*',
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
