"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  // Only render breadcrumbs if the path is not the root
  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="text-sm bg-white shadow-sm py-2">
      <div className="container mx-auto px-6">
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
          </li>
          {paths.map((path, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              <Link
                href={`/${paths.slice(0, index + 1).join("/")}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {path}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
