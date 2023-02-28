import { FOOTER_NAV_LINKS } from "@/constants";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Container } from "../Container";
import { Select } from "../Select";

const THEMES = [
  { id: "dark", name: "Dark" },
  { id: "light", name: "Light" },
];

const LANGS = [
  { id: "en", name: "English" },
  { id: "ru", name: "Russian" },
];

export const PublicFooter = () => {
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);
  const [selectedLang, setSelectedLang] = useState(LANGS[0]);

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
              <Select
                items={LANGS}
                value={selectedLang}
                onChange={setSelectedLang}
              />
            </div>
            <div className="flex items-center gap-x-5">
              <p>Display Mode</p>
              <Select
                items={THEMES}
                value={selectedTheme}
                onChange={setSelectedTheme}
              />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
