import React from "react";
import Drawer from "@mui/material/Drawer";
import { Button, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextShow from "./TextShow";

function SideDetail({ isOpen, setRightSidebar, moiveData }) {
  const drawerWidth = 600;
  const { title, opening_crawl } = moiveData;
  const handleClose = () => {
    setRightSidebar(false);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="right"
      open={isOpen}
    >
      <div style={{ padding: "1rem" }}>
        <Grid container spacing={2} justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="h5">Moive Details</Typography>
          </Grid>
          <Grid item>
            <CloseIcon onClick={handleClose} />
          </Grid>
        </Grid>
        <h5>image</h5>
        <img
          src={`https://picsum.photos/300/200?random=${Math.random()}`}
          alt="image deatils"
        />
        <h5>title </h5>
        <TextShow text={title} />
        <h5>Opening Crawl</h5>
        <TextShow text={opening_crawl} />
        <Button size="large" variant="contained" onClick={handleClose}>
          Close
        </Button>
      </div>
    </Drawer>
  );
}

export default SideDetail;
