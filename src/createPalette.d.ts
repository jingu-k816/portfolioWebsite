import * as createPalette from "@mui/materi/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    interface PaletteOptions {
        whites?: PaletteColorOptions;
    }

    interface Palette {
        primary: PaletteColor,
        whites: PaletteColor;
    }
}