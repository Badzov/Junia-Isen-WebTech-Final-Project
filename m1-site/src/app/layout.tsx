import "../styles/globals.css";
import Link from "next/link";
import { Breadcrumbs } from "../components/ui/BreadCrumbs";

export const metadata = {
  title: "Book Manager",
  description: "A modern book and author management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        {/* Header with Navigation Menu */}
        <header className="bg-white shadow">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Book Manager
              </Link>
              {/* Navigation Links */}
              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/books"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    href="/authors"
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    Authors
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/* Breadcrumbs (Conditional Rendering) */}
        <Breadcrumbs />{" "}
        {/* Breadcrumbs will handle conditional rendering internally */}
        {/* Main Content */}
        <main className="container mx-auto px-6 py-8 flex-grow">
          {children}
        </main>
        {/* Footer */}
        <footer className="bg-white shadow mt-8">
          <div className="container mx-auto px-6 py-4 text-center text-gray-600">
            <p>&copy; 2024 Book Manager. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
