import Contact from "./components/blocks/Contact";
import Header from "./components/common/Header";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

// Load fonts with CSS variables
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Shravan Naikini",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <main className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow container mx-auto max-w-6xl px-4">
            {children}
          </div>
          <Contact />
        </main>
      </body>
    </html>
  );
}
