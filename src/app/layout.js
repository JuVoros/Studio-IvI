// app/layout.js
import './globals.css';
import Title from "../components/Title";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Studio IvI - Interior Architecture",
  description: "Professional interior architecture and design portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Title />
        <link rel="icon" type="image/x-icon" href="/images/Favicon Original.ico"></link>    {/*This is where the icon for the tab is set */}
        <Navbar />
          <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
