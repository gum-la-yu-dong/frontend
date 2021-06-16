import { ImgHTMLAttributes } from "react";
import classnames from "classnames/bind";
import styles from "./Icon.module.scss";

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  shadow?: boolean;
}

const cx = classnames.bind(styles);

const Icon = ({
  src,
  alt,
  shadow,
  className,
  ...props
}: IconProps): JSX.Element => (
  <img
    className={cx("icon", { shadow }, className)}
    src={src}
    alt={alt}
    {...props}
  />
);

export default Icon;
