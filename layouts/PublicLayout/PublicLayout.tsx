import { PublicFooter, PublicHeader } from "@/components";
import { IPublicLayout } from "./PublicLayout.interface";

export const PublicLayout = ({ children }: IPublicLayout) => {
  return (
    <>
      <PublicHeader />
      <main className="flex-auto">{children}</main>
      <PublicFooter />
    </>
  );
};
