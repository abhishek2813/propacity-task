import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Grid } from "@mui/material";
import SidebarNav from "./components/Sidebar";
import Films from "./pages/Films";
function App() {
  return (
    <>
      <Router>
        <Grid container spacing={4}>
          {/* Sidebar */}
          <Grid item xs={2}>
            <SidebarNav />
          </Grid>

          {/* Main Content */}
          <Grid item xs={10}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/movies" element={<Films />} />
              <Route path="/people" element={<h1>people</h1>} />
              <Route path="/species" element={<h1>species</h1>} />
              <Route path="/planets" element={<h1>planets</h1>} />
              <Route path="/starships" element={<h1>starships</h1>} />
              <Route path="/vehicles" element={<h1>vehicles</h1>} />
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </>
  );
}

export default App;
