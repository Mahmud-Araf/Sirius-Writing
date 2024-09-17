import type { Metadata } from "next";
import "./globals.css";
import { AppContextProvider } from "@/contexts/AppContext";


export const metadata: Metadata = {
  title: "Sirius Writing",
  description: "A web app for generating automatic writing prompts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
