import React, { useState } from "react";
import { Grid as MuiGrid } from "@mui/material";
import CardComp from "./Card";
import SideDetail from "./SideDetail";

function MovieGrid({ movieList }) {
  const [rightSidebar, setRightSidebar] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleDetail = (movie) => {
    setSelectedMovie(movie);
    setRightSidebar(true);
  };

  return (
    <div>
      <MuiGrid container spacing={3}>
        {movieList &&
          movieList.map((itemData, i) => (
            <MuiGrid item xs={4} key={i}>
              <CardComp moivedata={itemData} moiveId={i + 1} onClick={() => handleDetail(itemData)} />
            </MuiGrid>
          ))}
      </MuiGrid>
      {rightSidebar && (
        <SideDetail isOpen={rightSidebar} setRightSidebar={setRightSidebar} moiveData={selectedMovie} />
      )}
    </div>
  );
}

export default MovieGrid;
