import { Link, styled } from "@mui/material";
import theme from "@/theme";


import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Root = styled("div")(({
    maxWidth: "100%",
    height: "60vh",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.whites.main

}));

const HeaderWrapper = styled("span")(({
    paddingTop: "4em",
    display: "flex",
    justifyContent: "center",
    fontSize: "2em",
}));

const DescriptionWrapper = styled("div")(({
    width: "35%",
    marginLeft: "35%",
    marginTop: "2em",
    opacity: "0.85"
}));

const IconWrapper = styled("div")(({
    marginTop: "2em",
    marginLeft: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "13vh"
}));

const Contact: React.FC = () => {
    const socialLinks: string[] = ["github", "linkedin"]

    const githubLink: string = "https://github.com/jkang95";
    const linkedInLink: string = "https://www.linkedin.com/in/jingukang";

    return (
        <Root>
            <HeaderWrapper>Thank you for stopping by!</HeaderWrapper>
            <DescriptionWrapper>
                If you would like to chat and/or know more about my journey, please feel free to reach out!
                I love sharing my stories and hearing about exciting opportunities.
            </DescriptionWrapper>

            <HeaderWrapper sx={{ fontSize: "1.6em", paddingTop: "2em" }}>
                Want to connect?
            </HeaderWrapper>
            <IconWrapper>
                {socialLinks.map((link, i) => {
                    return (
                        <Link
                            href={link === "github" ? githubLink : linkedInLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={i}
                            sx={{ color: theme.palette.whites.dark, width: "10%" }}
                        >
                            {link === "github" ?
                                (<>
                                    <GitHubIcon fontSize="large" />
                                    <div style={{ marginLeft: "3em", fontSize: "1.2em", marginTop: "-2em" }}>
                                        Github
                                    </div>
                                </>) :
                                (<>
                                    <LinkedInIcon fontSize="large" />
                                    <div style={{ marginLeft: "3em", fontSize: "1.2em", marginTop: "-2em" }}>
                                        LinkedIn
                                    </div>
                                </>)
                            }
                        </Link>
                    );
                })}
            </IconWrapper>
        </Root>
    );
}

export default Contact;