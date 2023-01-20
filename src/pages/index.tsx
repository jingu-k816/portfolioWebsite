import { Layout } from "@/components"
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Layout>

        </Layout>
      </ThemeProvider>
    </main>
  )
}
