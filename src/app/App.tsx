import React from "react";

// @ts-ignore CSS imports are handled by the bundler.
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./material/MaterialTheme/styled";

function App() {
  return (
    <Container sx={{background: "yellow"}} >
      <Stack direction="column">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h4">
            Create React App on TypeScript with REDUX
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}></RippleBadge>
          <Button variant="contained">Contained</Button>
        </Box>
        <Button variant="contained" color={"secondary"}>Contained</Button>
      </Stack>
    </Container>
  );
}

export default App;


