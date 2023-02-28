import { ArrowDownIcon } from "@/assets/icons";
import { FOOTER_NAV_LINKS } from "@/constants";
import Link from "next/link";
import { useMemo } from "react";
import { Container } from "../Container";

export const PublicFooter = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="text-xs">
      <div className="border-t border-gray-300 bg-white">
        <Container>
          <ul className="flex items-center justify-between py-7 text-gray-700">
            {FOOTER_NAV_LINKS.map((link, i) => (
              <li
                key={i}
                className="relative transition-colors duration-300 ease-in-out before:absolute before:top-2/4 before:-right-[15px] before:h-[4px] before:w-[4px] before:-translate-y-2/4 before:rounded-full before:bg-gray-700 before:content-[''] last:before:hidden hover:text-[#000e14]"
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <div className="bg-[#000e14]">
        <Container>
          <div className="flex items-center justify-between px-12 py-9 text-gray-400">
            <p>© {year} DFL Deutsche Fußball Liga GmbH</p>
            <div className="flex items-center gap-x-5">
              <p>Choose language</p>
              <button
                type="button"
                className="relative grid w-[150px] grid-cols-[1fr_18px] items-center gap-x-[20px] border-b border-gray-100 py-3 px-3 text-start text-gray-100 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:opacity-25"
              >
                <span>English</span>
                <ArrowDownIcon className="h-auto w-full text-gray-400" />
              </button>
            </div>
            <div className="flex items-center gap-x-5">
              <p>Display Mode</p>
              <button
                type="button"
                className="relative grid w-[150px] grid-cols-[1fr_18px] items-center gap-x-[20px] border-b border-gray-100 py-3 px-3 text-start text-gray-100 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:opacity-25"
              >
                <span>Light</span>
                <ArrowDownIcon className="h-auto w-full text-gray-400" />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
