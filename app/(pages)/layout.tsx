import "./globals.css";

import {Red_Hat_Display} from "next/font/google"

//apenas instancio a fonte
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${redHatDisplay.className} bg-background-primary text-content-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
