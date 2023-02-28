import { PublicFooter, PublicHeader } from "@/components";
import { IPublicLayout } from "./PublicLayout.interface";

export const PublicLayout = ({ children }: IPublicLayout) => {
  return (
    <>
      <PublicHeader />
      <main className="flex-auto pt-32 pb-40">{children}</main>
      <PublicFooter />
    </>
  );
};
