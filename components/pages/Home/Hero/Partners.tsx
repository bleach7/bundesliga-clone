import { BasketballIcon } from "@/assets/icons";
import { Container } from "@/components/ui";
import Link from "next/link";

export const Partners = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-[min-content_1fr] bg-white px-8 py-3 text-[#34383c] shadow-md">
          <p className="flex flex-col whitespace-nowrap text-xs">
            <span>OFFICIAL</span>
            <span className="font-bold">PARTNERS</span>
            <span>OF THE BUNDESLIGA</span>
          </p>
          <div className="flex items-center justify-around">
            <Link href="#">
              <BasketballIcon className="h-auto w-8" />
            </Link>
            <Link href="#">
              <BasketballIcon className="h-auto w-8" />
            </Link>
            <Link href="#">
              <BasketballIcon className="h-auto w-8" />
            </Link>
            <Link href="#">
              <BasketballIcon className="h-auto w-8" />
            </Link>
            <Link href="#">
              <BasketballIcon className="h-auto w-8" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
