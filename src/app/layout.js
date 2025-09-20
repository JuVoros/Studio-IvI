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
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Title />
        <Navbar />
          <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
