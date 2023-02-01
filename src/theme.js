import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            light: '#656565',
            dark: '#000000',
            main: '#111111',
            gray: '#181818',
        },
        secondary: {
            main: "#e6e6e6"
        },
        whites: {
            main: "#ffffff",
            dark: "#e6e6e6"
        }
    }
})

export default theme;