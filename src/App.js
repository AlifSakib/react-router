import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Products from "./components/Products/Products";
import ShowUserDetails from "./components/ShowUserDetails/ShowUserDetails";
import Users from "./components/Users/Users";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/products",
          element: <Products></Products>,
        },
        {
          path: "/users",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Users></Users>,
        },
        {
          path: "/posts",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Posts></Posts>,
        },
        {
          path: "/user/:userId",
          loader: async ({ params }) => {
            console.log(params);

            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.userId}`
            );
          },
          element: <ShowUserDetails></ShowUserDetails>,
        },
        {
          path: "/user/:userId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.userId}`
            );
          },
          element: <ShowUserDetails></ShowUserDetails>,
        },
      ],
    },

    {
      path: "/about",
      element: <About></About>,
    },
  ]);
  return (
    <div className="App font-lora">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
