import React, { useEffect, useState } from "react";
import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CardComp from "../components/Card";
import axios from "axios";
import ListView from "../components/ListView";
function Films() {
  const [alignment, setAlignment] = useState("grid");
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  //fetch
  useEffect(() => {
    const fetchData = async () => {
      const urlData = await axios.get("https://swapi.dev/api/films/");
      const result = urlData.data.results;
      setData(result);
      console.warn(result);
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Grid container justifyContent={"flex-end"}>
        <Grid item>
          <TextField
            id="outlined-search"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent={"space-between"}>
        <Grid item>
          <h1>Films</h1>
        </Grid>
        <Grid item>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
          >
            <ToggleButton value="grid">Grid</ToggleButton>
            <ToggleButton value="list">list</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {alignment === "grid" ? (
          <>
            {filteredData &&
              filteredData.map((itemData, i) => (
                <Grid item xs={4} key={i}>
                  <CardComp moivedata={itemData} moiveId={i + 1} />
                </Grid>
              ))}
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <ListView moiveData={filteredData} />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}

export default Films;
