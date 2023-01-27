import { Layout, Header } from "@/components"
import { styled, ThemeProvider } from "@mui/material";
import theme from "@/theme";

const Root = styled("main")(() => ({
  backgroundColor: theme.palette.primary.gray
}))

export default function Home() {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <Layout>
          <Header />
        </Layout>
      </ThemeProvider>
    </Root>
  )
}
