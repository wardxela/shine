"use client";

import { Merge } from "@/shared/type-utils";
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  createContext,
  useContext,
  useId,
} from "react";

export type RadioButtonGroupContext = {
  name: string;
  selected: string;
  onChange: (value: string) => void;
};

const Context = createContext<RadioButtonGroupContext>({
  name: "",
  selected: "",
  onChange: () => {},
});

export type RadioButtonGroupProps = PropsWithChildren<{
  onChange: (value: string) => void;
  selected: string;
}>;

export function RadioButtonGroup({
  children,
  selected,
  onChange,
}: RadioButtonGroupProps) {
  const id = useId();

  return (
    <Context.Provider value={{ name: id, selected, onChange }}>
      {children}
    </Context.Provider>
  );
}

export type RadioButtonProps = Merge<
  Omit<ComponentPropsWithoutRef<"input">, "type">,
  PropsWithChildren<{
    value: string;
  }>
>;

export function RadioButton({ children, value, ...props }: RadioButtonProps) {
  const { name, selected, onChange } = useContext(Context);

  return (
    <label className="block">
      <input
        {...props}
        onChange={() => onChange(value)}
        name={name}
        type="radio"
        className="sr-only"
        checked={value === selected}
        value={value}
      />
      {children}
    </label>
  );
}
