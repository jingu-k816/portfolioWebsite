import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Container, Button } from '@mui/material';
import { cloneElement } from 'react';
import Image from 'next/image';
import imageLogo from "../../../public/assets/logo.png";


interface NavBarProps {
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: NavBarProps) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const NavBar: React.FC = (props: NavBarProps) => {
    const menuItems = ['Portfolio', 'Resume', 'Contact']
    return (
        <>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Container>
                            <Image src={imageLogo} width={80} height={80} alt="Logo" />
                        </Container>
                        <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {menuItems.map((item) =>
                                <Button
                                    key={item}
                                    sx={{ color: '#ffffff' }}
                                >
                                    {item}
                                </Button>
                            )}
                        </Container>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </>
    );
}

export default NavBar;