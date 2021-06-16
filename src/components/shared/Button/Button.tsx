import { ReactNode, ButtonHTMLAttributes } from "react";
import classnames from "classnames/bind";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: "submit" | "button" | "reset";
  variant?: "chip";
}

const cx = classnames.bind(styles);

const Button = ({
  type,
  children,
  className,
  variant,
  ...props
}: ButtonProps): JSX.Element => (
  <button className={cx("button", variant, className)} type={type} {...props}>
    {children}
  </button>
);

export default Button;
