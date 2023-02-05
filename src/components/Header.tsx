import { useRef, useEffect } from "react";
import { styled } from "@mui/material";
import theme from "@/theme";
import Typed from "typed.js";
import style from './header.module.css';

const Root = styled("div")(({
    maxWidth: "100%",
    height: "85vh",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.whites.main,
    paddingTop: "42.5vh",
    fontSize: "40px",
    fontFamily: "Special Elite",
    textAlign: "center",
}));

const Header: React.FC = ({ }) => {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);
    // Create reference to store the Typed instance itself.
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                "A Chef turned Software Developer, crafting efficient solutions."
            ],
            typeSpeed: 50,
        }

        //elRef refers to the <span>
        typed.current = new Typed(el.current, options);

        return () => {
            // Necessary to destroy the instance during cleanup to prevent memory leaks
            typed.current.destroy();
        }
    }, [])
    return (
        <Root>
            <div className={style.stars}></div>
            <div className={style.twinkling}></div>
            <div className={style.clouds}></div>
            <span style={{
                display: "block",
                position: "relative",
                zIndex: 3
            }} ref={el} />
        </Root>
    );
}
export default Header;