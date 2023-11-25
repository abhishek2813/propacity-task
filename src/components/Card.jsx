import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import MenuBox from "./MenuBox";
import SideDetail from "./SideDetail";

function CardComp({moivedata,moiveId}) {
  const [rightSidebar, setRightSidebar] = useState(false);
  const {title,opening_crawl} = moivedata || {}
  const handleDetail = () => {
    setRightSidebar(true);
  };
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
          onClick={handleDetail}
            component="img"
            src={`https://picsum.photos/300/200?random=${Math.random()}`}
            alt="green iguana"
          />
          <CardContent>
            <Grid container justifyContent={"space-between"}>
              <Grid item>
                <Typography gutterBottom variant="h5" component="div">
                 {title}
                </Typography>
              </Grid>
              <Grid item>
                <MenuBox moiveName={title}/>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
      {rightSidebar && <SideDetail isOpen={rightSidebar} setRightSidebar={setRightSidebar} moiveData={{title,opening_crawl}} />}
    </div>
  );
}

export default CardComp;
