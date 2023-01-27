import { useRef, useEffect } from "react";
import { styled } from "@mui/material";
import theme from "@/theme";
import Typed from "typed.js";

const Root = styled("div")(({
    maxWidth: "100%",
    height: "75vh",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    paddingTop: "32.5vh",
    fontSize: "40px",
    fontFamily: "Special Elite",
    textAlign: "center"
}));

const Header: React.FC = ({ }) => {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);
    // Create reference to store the Typed instance itself.
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                "crafting efficient solutions."
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
            A Chef turned Software Developer, <span ref={el} />
        </Root>
    );
}
export default Header;