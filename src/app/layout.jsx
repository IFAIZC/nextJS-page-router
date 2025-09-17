import "./globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <nav>
          <Navbar/>
        </nav>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
