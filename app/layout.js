import { Volkhov, Poppins, Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "./_utils/Contexts";

const volkhov = Volkhov({
  variable: "--font-volkhov",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Jadoo",
  description: "Jadoo travel agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${volkhov.variable} ${poppins.variable} ${openSans.variable} ${inter.variable}`}
      >
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
