import "./globals.css";
import Navigation from "@/components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header-class">
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
