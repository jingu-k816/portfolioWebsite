import { Box, CssBaseline, styled } from "@mui/material";
import NavBar from "./navbar";

const Root = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
}));

const Layout: React.FC = ({ children }) => {

    return (
        <Root>
            <Box>
                <CssBaseline />
                <NavBar />
                {children}
            </Box>
        </Root>
    )
};

export default Layout;