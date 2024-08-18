"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import RightIcons from "../icons/RightIcons";
import "./style.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function Breadcrums() {
  const paths = usePathname();
  const pathsplit = paths.split("/");
  const pathNames = pathsplit.filter((path) => path);
  const pathItems = pathNames.map((path, i) => ({
    // Optionally you can capitalize the first letter here
    name: path,
    path: pathNames.slice(0, i + 1).join("/"),
  }));
  const activeLastSlug = pathsplit[pathsplit.length - 1];

  return (
    <div>
      <div>
        <ul className={poppins.className + " " + "breadcrumsNext"}>
          <li>
            <Link href="#">home</Link>
          </li>
          {pathItems.map((item) => (
            <li key={item.path}>
              <Link href={`/${item.path}`}>
                {activeLastSlug.includes(item.name) ? (
                  <>
                    <RightIcons />
                    <span className="ActiveBreadcrums">{item.name}</span>
                  </>
                ) : (
                  <>
                    <RightIcons /> {item.name}
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
