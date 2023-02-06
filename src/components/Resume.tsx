import { styled } from "@mui/material";
import Image from "next/image";
import theme from "@/theme";

// import resume photo
import resumePic from "@/../public/assets/resume.png"

const Root = styled("div")(({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.gray,
    paddingTop: "15vh",
    paddingBottom: "5vh",
    textAlign: "center",
    color: theme.palette.whites.main,
    fontSize: "2.5em"
}));

const DescriptionWrapper = styled("div")(({
    margin: "2% 20%",
    textAlign: "center",
    fontSize: "0.4em",
}))

const ImageWrapper = styled("div")(({
    display: "flex",
    justifyContent: "center",
    padding: "5vh 0",
}));

const Resume: React.FC = () => {
    return (
        <Root id="resume">
            Resume
            <DescriptionWrapper>(Click the image to download)</DescriptionWrapper>
            <ImageWrapper>
                <Image
                    src={resumePic}
                    alt="resume photo"
                />
            </ImageWrapper>

        </Root>
    );
}

export default Resume;