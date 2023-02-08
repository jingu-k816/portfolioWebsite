import { PropsWithChildren } from "react";
import { Box, CssBaseline, styled } from "@mui/material";
import NavBar from "./navbar";
import Footer from "./Footer";

const Root = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
}));

const Layout: React.FC<PropsWithChildren> = ({ children }) => {

    return (
        <Root>
            <Box>
                <CssBaseline />
                <NavBar />
                {children}
                <Footer />
            </Box>
        </Root>
    )
};

export default Layout;