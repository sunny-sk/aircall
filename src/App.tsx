
import { Toaster } from "@/components/ui/sonner";
import Archive from "@/pages/Archive";
import Feed from "@/pages/Feed";
import FeedDetails from "@/pages/FeedDetails";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DesktopLayout from "./Layout/Desktop-layout";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <DesktopLayout />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "/archive",
        element: <Archive />,
      }
    ]
  },
  {
    path: "/details/:feedId",
    element: <FeedDetails />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  )
}

export default App