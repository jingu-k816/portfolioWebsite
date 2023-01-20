import { Box, CssBaseline } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import NavBar from "./navbar";
//@ts-ignore
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
}));
//@ts-ignore
const Layout: React.FC = ({ children }) => {
    //@ts-ignore
    const classes = useStyles();
    return (
        //@ts-ignore
        <Box className={classes.root}>
            <CssBaseline />
            <NavBar />
            {children}
        </Box>
    )
};

export default Layout;