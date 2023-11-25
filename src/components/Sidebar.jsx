import FolderIcon from "@mui/icons-material/Folder";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useLocation, Link, useNavigate } from "react-router-dom";

function SidebarNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      {/* backgroundColor="#03123D" rtl={false}
        style={{ height: "100vh" }} */}
      <Sidebar>
        <h1 onClick={() => navigate("/")}>Logo</h1>
        <Menu>
          <SubMenu
            label="Films"
            onClick={() => navigate("/movies")}
            active={location.pathname === "/movies"}
            icon={<FolderIcon />}
          >
            <MenuItem> Movie Name </MenuItem>
            <MenuItem> Movie Name </MenuItem>
            <MenuItem> Movie Name </MenuItem>
          </SubMenu>
          <SubMenu
            label="People"
            icon={<FolderIcon />}
            onClick={() => navigate("/people")}
            active={location.pathname === "/people"}
          >
            <MenuItem> Pie charts </MenuItem>
          </SubMenu>
          <SubMenu
            label="Planets"
            icon={<FolderIcon />}
            onClick={() => navigate("/planets")}
            active={location.pathname === "/planets"}
          >
            <MenuItem> Pie charts </MenuItem>
          </SubMenu>
          <SubMenu
            label="Species"
            icon={<FolderIcon />}
            onClick={() => navigate("/species")}
            active={location.pathname === "/species"}
          >
            <MenuItem> Pie charts </MenuItem>
          </SubMenu>
          <SubMenu
            label="Starships"
            icon={<FolderIcon />}
            onClick={() => navigate("/starships")}
            active={location.pathname === "/starships"}
          >
            <MenuItem> Pie charts </MenuItem>
          </SubMenu>
          <SubMenu
            label="Vehicles"
            icon={<FolderIcon />}
            onClick={() => navigate("/vehicles")}
            active={location.pathname === "/vehicles"}
          >
            <MenuItem> Pie charts </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SidebarNav;
