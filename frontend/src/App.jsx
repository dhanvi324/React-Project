import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import User from "./components/User";

function App() {
    const routingObj = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "home", element: <Home /> },
            { path: "AddUser", element: <AddUser /> },
            { path: "UserList", element: <UserList /> },
            { path: "User", element: <User /> },
        ],
    },
    ]);

    return <RouterProvider router={routingObj} />;
}

export default App;