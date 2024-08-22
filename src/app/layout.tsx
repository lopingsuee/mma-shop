import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import V0Navbar from "@/components/component/V0Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({  
  children,
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <V0Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
