import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import classnames from "classnames/bind";
import styles from "./Input.module.scss";

type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  value: string | ReadonlyArray<string> | number;
  onChange: ChangeEventHandler;
}

const cx = classnames.bind(styles);

const Input = ({
  type,
  className,
  value,
  onChange,
  ...props
}: InputProps): JSX.Element => (
  <input
    type={type}
    className={cx("input", className)}
    value={value}
    onChange={onChange}
    {...props}
  />
);

export default Input;
