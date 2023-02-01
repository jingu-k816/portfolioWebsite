import { Grid, styled, Link } from "@mui/material";
import theme from "@/theme";
import Image from "next/image";

// import pictures
import bookifyPic from "../../public/assets/bookify_project.gif"
import weatherCheckerPic from "../../public/assets/weatherChecker_project.gif"
import schedulerPic from "../../public/assets/scheduler_project.png"
import pizzaTentPic from "../../public/assets/pizzatent_project.png"

const Root = styled("div")(({
    maxWidth: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.whites.main,
    paddingTop: "15vh",
    fontSize: "40px",
    textAlign: "center",
}));

const ProjectWrapper = styled("div")(({
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    paddingTop: "5vh",
    color: theme.palette.whites.dark,
    fontSize: "25px"
}))

const DescriptionWrapper = styled("div")(({
    margin: "2% 20%",
    textAlign: "center",
    fontSize: "15px",
}))
const Project: React.FC = ({ }) => {
    const bookifyLink = "https://github.com/jkang95/Bookify"
    const weatherCheckerLink = "https://github.com/jkang95/WeatherChecker"
    const schedulerLink = "https://github.com/jkang95/scheduler"
    const pizzatentLink = "https://github.com/jkang95/PizzaTentFoodPickUpApp"

    return (
        <Root id="portfolio">
            Portfolio
            <DescriptionWrapper>(Click the image to go to Github Repository of the portfolio)</DescriptionWrapper>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <ProjectWrapper>
                        Bookify
                        <Link href={bookifyLink} target="_blank" rel="noopener">
                            <Image
                                src={bookifyPic}
                                alt="bookify_project"
                                width={400}
                                height={250}
                            />
                        </Link>
                        <DescriptionWrapper>
                            A <b>MERN</b> stack bookkeeping web application that allows users to scan expenses and input incomes to thoroughly analyze flows of the budget.
                        </DescriptionWrapper>
                    </ProjectWrapper>
                </Grid>
                <Grid item xs={6}>
                    <ProjectWrapper>
                        WeatherChecker
                        <Link href={weatherCheckerLink} target="_blank" rel="noopener">
                            <Image
                                src={weatherCheckerPic}
                                alt="weatherChecker_project"
                                width={400}
                                height={250}
                            />
                        </Link>
                        <DescriptionWrapper>
                            A responsive weather checker web application built using <b>React, Material-UI, NextJS and RecoilJS</b>.
                            Web application includes presenting current weather and forecast of next 5 days
                            that shows temperatures of morning, day and night and as well as humidity of the day.
                        </DescriptionWrapper>
                    </ProjectWrapper>
                </Grid>
                <Grid item xs={6}>
                    <ProjectWrapper>
                        Scheduler
                        <Link href={schedulerLink} target="_blank" rel="noopener">
                            <Image
                                src={schedulerPic}
                                alt="scheduler_project"
                                width={400}
                                height={250}
                            />
                        </Link>
                        <DescriptionWrapper>
                            A <b>React</b> app that allows users to book, edit and cancel interviews.
                            Data is persisted through schedule API server using <b>PostgreSQL</b> database.
                            <b>Jest, Cypress</b> are used for integration, end to end tests throughout the project.
                            <b>Storybook</b> is used for testing component isolation.
                        </DescriptionWrapper>
                    </ProjectWrapper>
                </Grid>
                <Grid item xs={6}>
                    <ProjectWrapper>
                        PizzaTent
                        <Link href={pizzatentLink} target="_blank" rel="noopener">
                            <Image
                                src={pizzaTentPic}
                                alt="pizzatent_project"
                                width={400}
                                height={250}
                            />
                        </Link>
                        <DescriptionWrapper>
                            A full-stack restaurant web app inspired by Pizza Hut.
                            This app was created using <b>PostgreSQL Express, Node.js, SCSS, HTML and the Twilio API</b>.
                        </DescriptionWrapper>
                    </ProjectWrapper>
                </Grid>
            </Grid>

        </Root>
    );
}

export default Project;