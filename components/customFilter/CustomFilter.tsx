'use client';

import {CustomFilterProps} from "@/models/CustomFilterProps";
import {Listbox, Transition} from "@headlessui/react";
import styles from './customFilter.module.css';
import {Fragment, useState} from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {updateSearchParams} from "@/utils";

const CustomFilter = ({title, options, setFilter}: CustomFilterProps) => {
    const [selected, setSelected] = useState(options[0]);
    const router = useRouter();
  return (
    <div className="w-fit">
        <Listbox
            value={selected}
            onChange={(e) => {
                setSelected(e);
                setFilter(e.value);
            }}
        >
            <div className="relative w-fit z-10">
                <Listbox.Button className={styles.btn}>
                    <span className="block truncate">{selected.title}</span>
                    <Image src="/chevron-up-down.svg" alt="chevron" width={20} height={20} className="ml-4 object-contain"/>
                </Listbox.Button>
                <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                    <Listbox.Options className={styles.options}>
                        {options.map((option) => (
                            <Listbox.Option
                                value={option}
                                key={option.title}
                                className={({active}) => `relative cursor-default select-none px-4 py-2 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                            >
                                {({selected}) => (
                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                            {option.title}
                                        </span>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    </div>
  )
}

export default CustomFilter;
