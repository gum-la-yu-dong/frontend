import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import classnames from "classnames/bind";
import styles from "./Link.module.scss";

export interface LinkProps extends RouterLinkProps {
  children: React.ReactNode;
}

const cx = classnames.bind(styles);

const Link = ({
  to,
  children,
  className,
  ...props
}: LinkProps): JSX.Element => (
  <RouterLink className={cx("link", className)} to={to} {...props}>
    {children}
  </RouterLink>
);

export default Link;
