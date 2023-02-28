import { ArrowDownIcon } from "@/assets/icons";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";
import { ISelect } from "./Select.interface";

export const Select = ({ items, value, onChange }: ISelect) => {
  return (
    <Listbox as="div" value={value} onChange={onChange} className="relative">
      {({ open }) => (
        <>
          <Listbox.Button
            as="button"
            type="button"
            className="relative grid w-[150px] grid-cols-[1fr_18px] items-center gap-x-[20px] border-b border-gray-100 p-3 text-start capitalize text-gray-100 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:opacity-25"
          >
            <span>{value?.name ? value.name : value}</span>
            <ArrowDownIcon
              className={classNames(
                "h-auto w-full text-gray-400 transition-transform duration-300 ease-in-out",
                {
                  ["rotate-180"]: open === true,
                }
              )}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options
              as="ul"
              className="absolute bottom-full left-0 z-10 w-full bg-[#34383c] text-gray-100 shadow"
            >
              {items.map((item) => (
                <Listbox.Option
                  key={item?.id ? item.id : item}
                  value={item}
                  as="li"
                >
                  {({ selected }) => (
                    <button
                      type="button"
                      className={classNames(
                        "relative inline-block w-full p-3 text-start capitalize transition-colors duration-300 ease-in-out before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-full before:bg-gray-200 before:opacity-0 before:content-['']",
                        {
                          ["text-[#34383c] before:opacity-100"]: selected,
                          ["hover:before:opacity-10"]: !selected,
                        }
                      )}
                    >
                      {item?.name ? item.name : item}
                    </button>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};
