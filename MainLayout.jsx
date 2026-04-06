// src/layout/MainLayout.jsx
import { Box } from "@mui/material";
import BottomNav from "../components/navigation/BottomNav";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        background: "#1d2f50",
      }}
    >
      {/* App Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "420px",
          position: "relative",
          px: 2,
          pt: 2,
          pb: "100px",
        }}
      >
        {children}
      </Box>

      <BottomNav />
    </Box>
  );
};

export default MainLayout;