"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ label, href }) {
  const pathName = usePathname();
  return (
    <div>
      <Link
        className={`nav-link ${pathName ? "nav-link-active" : ""}`}
        href={href}
      >
        {label}
      </Link>
    </div>
  );
}
