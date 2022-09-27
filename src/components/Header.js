// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Box, Typography} from "@mui/material";
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height: "auto",
      }}
      my={5}
    >
      <Typography variant="h1" >Call a Friend</Typography>
      <Typography variant="h5" mt={5}>Your friendly contact app</Typography>
    </Box>
  );
};

export default Header;
