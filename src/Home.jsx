import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Form />
      <Movies />
      <Outlet />
    </main>
  );
};

export default Home;
