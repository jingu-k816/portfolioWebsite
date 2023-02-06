import { styled, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

import theme from "@/theme";

const Root = styled("div")(({
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "100%",
    height: "8vh",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.whites.dark,
    paddingTop: "3vh",
    paddingLeft: "10vh"
}));

const CopyRightWrapper = styled("span")(({
    opacity: "0.8"
}))

const LinkSymbolWrapper = styled("div")(({
    display: "flex",
    justifyContent: "space-between",
    width: "8%",
    marginRight: "5vh",
    opacity: "0.8",
}))

const Footer: React.FC = () => {
    const linkItems = ["github", "linkedin", "email"];

    const githubLink = "https://github.com/jkang95"
    const linkedInLink = "https://www.linkedin.com/in/jingukang"
    const emailLink = "mailto:jinguk0816@gmail.com"

    return (
        <Root>
            <CopyRightWrapper>
                © 2023 Jingu Kang
            </CopyRightWrapper>
            <LinkSymbolWrapper>
                {linkItems.map((link, i) => {
                    return (
                        <Link
                            href={link === "github" ? githubLink : link === "linkedin" ? linkedInLink : emailLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={i}
                            sx={{ color: theme.palette.whites.dark }}
                        >
                            {link === "github" ? <GitHubIcon /> : link === "linkedin" ? <LinkedInIcon /> : <MailIcon />}
                        </Link>
                    );
                })}
            </LinkSymbolWrapper>
        </Root>
    );
}

export default Footer;