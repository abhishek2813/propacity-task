import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuBox from "./MenuBox";
import SideDetail from "./SideDetail";

export default function ListView({moiveData}) {

  const [rightSidebar, setRightSidebar] = React.useState(false);
 
  const [selectedMovie, setSelectedMovie] = React.useState({});

  const handleDetail = (movie) => {
    setSelectedMovie(movie);
    setRightSidebar(true);
  };

  return (
    <>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Director</TableCell>
            <TableCell align="left">Release Date</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {moiveData.map((movie, index) => (
            <TableRow key={index}>
              <TableCell align="left" onClick={()=>handleDetail(movie)}>{movie.title}</TableCell>
              <TableCell align="left">{movie.director}</TableCell>
              <TableCell align="left">{movie.release_date}</TableCell>
              <TableCell align="left"><MenuBox moiveName={movie.title}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {rightSidebar && (
        <SideDetail
          isOpen={rightSidebar}
          setRightSidebar={setRightSidebar}
          moiveData={selectedMovie}
        />
      )}
    </>
    
  );
}
