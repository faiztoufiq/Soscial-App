import { Stack, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Box from "@mui/material/Box";
import NavBar from "./components/NavBar";

import Addd from "./addd"; // Import the specific Add icon
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Addd /> {/* Render the Add icon */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
