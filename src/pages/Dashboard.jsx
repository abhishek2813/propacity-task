import React from "react";
import CardComp from "../components/Card";
import { Box, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
function Dashboard() {
  return (
    <div>
      <Container sx={{ marginTop: 10 }}>
        <Card
          sx={{ maxWidth: 695 }}
          style={{ padding: "25px", boxShadow: "1px" }}
        >
          <CardMedia
            component="img"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4">
              Welcome to Star Wars Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Star Wars is an American epic space opera multimedia franchise
              created by George Lucas, which began with the eponymous 1977 film
              and quickly became a worldwide pop culture phenomenon.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Dashboard;
