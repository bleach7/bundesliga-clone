import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IContainer
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  width?: "primary" | "secondary";
}
