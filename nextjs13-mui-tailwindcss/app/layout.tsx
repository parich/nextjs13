"use client";
import "./globals.css";
import { darkTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./theme/navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body>
          <ResponsiveAppBar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

//create a fuction to validate an email with regex and comment each line