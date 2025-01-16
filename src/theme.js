import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    customGray: {
      main: "#EEEEEE",
    },
  },
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 8,
          "& .MuiSvgIcon-root": {
            fontSize: 16,
          },
        },
      },
    },
  },
});

export default theme;
