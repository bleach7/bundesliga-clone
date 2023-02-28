import classNames from "classnames";
import { IContainer } from "./Container.interface";

export const Container = ({
  children,
  className,
  width = "primary",
}: IContainer) => {
  return (
    <div
      className={classNames(
        "container",
        {
          ["lg:max-w-screen-lg"]: width === "primary",
          ["lg:max-w-screen-xl"]: width === "secondary",
        },
        className
      )}
    >
      {children}
    </div>
  );
};
