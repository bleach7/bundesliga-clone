import { IPublicLayout } from "./PublicLayout.interface";

export const PublicLayout = ({ children }: IPublicLayout) => {
  return (
    <>
      <main className="flex-auto">{children}</main>
    </>
  );
};
