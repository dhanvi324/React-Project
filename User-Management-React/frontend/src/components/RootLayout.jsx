import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div>
      <Header />
      <Outlet context={{ users, addUser }} />
    </div>
  );
}

export default RootLayout;