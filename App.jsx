import { ThemeProvider, Box } from "@mui/material";
import theme from "./theme/theme";
import MainLayout from "./layout/MainLayout";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: `
  radial-gradient(circle at 10% 20%, rgba(179, 170, 236, 0.25), transparent),
  radial-gradient(circle at 90% 80%, rgba(103, 189, 167, 0.2), transparent),
  #131418
`,
        }}
      >
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </Box>
    </ThemeProvider>
  );
};

export default App;