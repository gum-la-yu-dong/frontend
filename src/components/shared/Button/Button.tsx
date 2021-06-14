import React, { ButtonHTMLAttributes } from "react";
import classnames from "classnames/bind";
import styles from "./Button.module.scss";

// TODO: Style을 동적으로 적용하기 위한 Props를 받을 떄 타입 정의를 어떻게 할지
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element;
  type: "submit" | "button" | "reset";
}

const cx = classnames.bind(styles);

const Button = ({
  type,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => (
  <button className={cx("button", className)} type={type} {...props}>
    {children}
  </button>
);

export default Button;
