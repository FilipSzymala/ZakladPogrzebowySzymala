import React from "react";
import { Outlet } from "react-router-dom";

const TopBar = () => (
  <>
    <div>TopBar</div>
    <Outlet />
  </>
);

export default TopBar;
