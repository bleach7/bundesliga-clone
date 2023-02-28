import { ArrowDownIcon } from "@/assets/icons";
import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import { ISelect } from "./Select.interface";

export const Select = ({ items, value, onChange }: ISelect) => {
  return (
    <Listbox as="div" value={value} onChange={onChange} className="relative">
      {({ open }) => (
        <>
          <Listbox.Button
            as="button"
            type="button"
            className="relative grid w-[150px] grid-cols-[1fr_18px] items-center gap-x-[20px] border-b border-gray-100 py-3 px-3 text-start text-gray-100 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:opacity-25"
          >
            <span>{value.name}</span>
            <ArrowDownIcon
              className={classNames(
                "h-auto w-full text-gray-400 transition-transform duration-300 ease-in-out",
                {
                  ["rotate-180"]: open === true,
                }
              )}
            />
          </Listbox.Button>
          <Listbox.Options as="ul" className="hidden">
            {items.map((item) => (
              <Listbox.Option key={item.id} value={item} as="li">
                {item.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
};
