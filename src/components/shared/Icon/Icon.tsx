import { ImgHTMLAttributes } from "react";
import classnames from "classnames/bind";
import styles from "./Icon.module.scss";

export type IconProps = ImgHTMLAttributes<HTMLImageElement>;

const cx = classnames.bind(styles);

const Icon = ({ src, alt, className, ...props }: IconProps): JSX.Element => (
  <img className={cx("icon", className)} src={src} alt={alt} {...props} />
);

export default Icon;
