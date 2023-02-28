import {
  ArrowSolidTopRightIcon,
  BasketballIcon,
  UserIcon,
} from "@/assets/icons";
import { HEADER_NAV_LINKS } from "@/constants";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container } from "../Container";

export const PublicHeader = () => {
  const router = useRouter();

  useEffect(() => {
    const header = document.getElementById("header");
    const headerTop = document.getElementById("header-top");

    const headerTopHeight = headerTop?.offsetHeight;

    document.documentElement.style.setProperty(
      "--header-top-height",
      `${headerTopHeight}px`
    );

    const headerSticky = () => {
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add("-translate-y-[var(--header-top-height)]");
        }

        if (window.scrollY === 0) {
          header.classList.remove("-translate-y-[var(--header-top-height)]");
        }
      }
    };

    window.addEventListener("scroll", headerSticky);

    return () => window.removeEventListener("scroll", headerSticky);
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 z-10 w-full bg-white text-sm text-gray-500 shadow transition-transform duration-300 ease-in-out"
    >
      <div
        id="header-top"
        className="relative text-xs before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-gray-100 before:content-[''] "
      >
        <Container width="secondary">
          <div className="flex items-center justify-between py-3">
            <ul className="flex items-center gap-x-4 font-bold">
              <li>
                <Link
                  href="#"
                  className="relative grid grid-cols-[18px_1fr] items-end gap-x-1 text-gray-800 before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:w-full before:bg-gray-800 before:content-['']"
                >
                  <BasketballIcon className="h-auto w-full" />
                  <p>BL</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="grid grid-cols-[18px_1fr] items-end gap-x-1"
                >
                  <BasketballIcon className="h-auto w-full" />
                  <p>BL2</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="grid grid-cols-[18px_1fr] items-end gap-x-1"
                >
                  <BasketballIcon className="h-auto w-full" />
                  <p>VBL</p>
                </Link>
              </li>
            </ul>
            <ul className="flex items-center gap-x-4">
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 ease-in-out hover:text-gray-800"
                >
                  <p>Broadcasters</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="grid grid-cols-[1fr_16px] items-center gap-x-1 transition-colors duration-300 ease-in-out hover:text-gray-800"
                >
                  <p>Fantasy Manager</p>
                  <ArrowSolidTopRightIcon className="h-auto w-full self-end" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="grid grid-cols-[1fr_16px] items-center gap-x-1 transition-colors duration-300 ease-in-out hover:text-gray-800"
                >
                  <p>DFL</p>
                  <ArrowSolidTopRightIcon className="h-auto w-full self-end" />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div>
        <Container width="secondary">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="grid grid-cols-[24px_1fr] items-center gap-x-1"
            >
              <BasketballIcon className="h-auto w-full text-red-500" />
              <p className="text-xl font-bold uppercase text-black">
                Bundesliga
              </p>
            </Link>
            <nav>
              <ul className="flex items-center gap-x-3">
                {HEADER_NAV_LINKS.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.path}
                      className={classNames(
                        "inline-block transition-colors duration-300 ease-in-out hover:text-gray-800",
                        {
                          ["relative text-gray-800 before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:w-full before:bg-gray-800 before:content-['']"]:
                            router.pathname === link.path ||
                            router.asPath == link.path,
                        }
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link href="#">
              <UserIcon className="h-auto w-6 transition-colors duration-300 ease-in-out hover:text-gray-800" />
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
};
