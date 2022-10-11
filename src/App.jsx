import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import ErrorPage from "./components/ErrorPage/ErrorPage";
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
        },
        {
          path: '/topics',
          element: <Topics />,
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        },
        {
          path: '*',
          element: <ErrorPage />,
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
