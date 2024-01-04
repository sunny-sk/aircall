
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Feed from "@/pages/Feed";
import FeedDetails from "@/pages/FeedDetails";
import Archive from "@/pages/Archive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
    children: [
      {
        path: "/details/:feedId",
        element: <FeedDetails />,
      },
      {
        path: "/achive",
        element: <Archive />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App