import { Container } from "@/components/ui";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="mb-4">
      <Container>
        <div className="relative min-h-[640px]">
          <div className="absolute top-0 left-0 h-full w-full bg-slate-500"></div>
          <div className="absolute bottom-0 left-0 z-10 w-full p-5 text-white before:absolute before:top-0 before:left-0 before:-z-[1] before:h-full before:w-full before:bg-black before:opacity-50 before:content-['']">
            <p className="mb-3 text-3xl font-bold">
              {"The stats behind Dortmund's improvement"}
            </p>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
              assumenda iure sequi in, hic accusamus quidem qui similique quod
              quasi, pariatur animi. Minima sunt, eaque aperiam similique
              perferendis quae aut!
            </p>
            <time className="text-xs text-gray-200">16 HOURS AGO</time>
          </div>
          <Link
            href="#"
            className="absolute top-0 left-0 z-[11] h-full w-full text-[0]"
          >
            {"The stats behind Dortmund's improvement"}
          </Link>
        </div>
      </Container>
    </section>
  );
};
