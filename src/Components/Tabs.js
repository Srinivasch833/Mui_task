import React from "react";
import { AppBar, Tab, Toolbar } from "@mui/material";

const Tabs = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Tabs>
            <Tab label="Home" />

            <Tab label="React JS" />

            <Tab label="Angular JS" />

            <Tab label="Node JS" />

            <Tab label="VUE JS" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Tabs;
