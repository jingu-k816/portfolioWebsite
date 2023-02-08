import { Link, styled, Button } from "@mui/material";
import Image from "next/image";
import theme from "@/theme";

import { saveAs } from "file-saver";

// import resume photo
import resumePic from "@/../public/assets/resume.png";
import resumeFile from "@/../public/assets/jkang_resume.pdf";

const Root = styled("div")(({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.light,
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
    color: theme.palette.whites.main,
}))

const ImageWrapper = styled("div")(({
    display: "flex",
    justifyContent: "center",
    padding: "5vh 0",
}));

const Resume: React.FC = () => {
    const handleDownload = () => {
        saveAs(resumeFile, "jingu_kang_resume.pdf")
    }

    return (
        <Root id="resume">
            Resume
            <DescriptionWrapper>
                (Click the image to download the resume in PDF format)
            </DescriptionWrapper>
            <ImageWrapper>
                <Image
                    src={resumePic}
                    alt="resume photo"
                    onClick={handleDownload}
                />
            </ImageWrapper>
        </Root>
    );
}

export default Resume;