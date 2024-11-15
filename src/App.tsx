import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as homeLoader } from "@/components/home/loader";

import "./index.css";
import HomePage from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./layout/ErrorPage";
import { Suspense } from "react";
import SkeletonHome from "./layout/skeleton/SkeletonHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<SkeletonHome />}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
