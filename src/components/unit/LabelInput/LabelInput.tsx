import { ReactNode } from "react";
import classnames from "classnames/bind";
import Input, { InputProps } from "@@/components/shared/Input/Input";
import styles from "./LabelInput.module.scss";

export interface LabelInputProps extends InputProps {
  id: string;
  label: ReactNode;
}

const cx = classnames.bind(styles);

const LabelInput = ({
  label,
  className,
  id,
  ...props
}: LabelInputProps): JSX.Element => (
  <section className={cx("label-input", className)}>
    <label htmlFor={id}>{label}</label>
    <Input id={id} {...props} />
  </section>
);

export default LabelInput;
