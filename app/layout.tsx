import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme_provider";
import "@/styles/globals.scss";


export const metadata: Metadata = {
  title: "Trip ui",
  description: "built by bob @bobstudio.",
};

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
