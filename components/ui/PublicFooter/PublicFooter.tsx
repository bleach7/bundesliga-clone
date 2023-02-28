import { FOOTER_NAV_LINKS } from "@/constants";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Container } from "../Container";
import { Select } from "../Select";

const LANGS = [
  { id: "en", name: "English" },
  { id: "ru", name: "Russian" },
];

export const PublicFooter = () => {
  const [selectedLang, setSelectedLang] = useState(LANGS[0]);
  const {
    theme: nextTheme,
    setTheme: setNextThemes,
    themes: nextThemes,
  } = useTheme();
  const year = useMemo(() => new Date().getFullYear(), []);
  const [theme, setTheme] = useState<any>();
  const [themes, setThemes] = useState<any>();

  useEffect(() => {
    setTheme(nextTheme);
    setThemes(nextThemes);
  }, [nextTheme, nextThemes]);

  return (
    <footer className="text-xs">
      <div className="border-t border-gray-300 bg-white dark:border-[#64686c] dark:bg-[#191e24]">
        <Container>
          <ul className="flex items-center justify-between py-7 text-gray-700 dark:text-[#c9cccf]">
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
              {theme && (
                <Select items={themes} value={theme} onChange={setNextThemes} />
              )}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
