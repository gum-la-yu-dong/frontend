import { useState, ChangeEvent } from "react";
import classnames from "classnames/bind";
import Button from "@@/components/shared/Button/Button";
import Link from "@@/components/shared/Link/Link";
import LabelInput from "@@/components/unit/LabelInput/LabelInput";
import styles from "./Login.module.scss";

const cx = classnames.bind(styles);

const Login = (): JSX.Element => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {/* TODO: onSubmit */}
      <form className={cx("form")}>
        <LabelInput
          label="이메일"
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="email"
          name="email"
        />

        <LabelInput
          label="비밀번호"
          id="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          autoComplete="current-password"
          name="password"
        />
        <Button type="submit">로그인</Button>
      </form>

      <section className={cx("link-section")}>
        <Link to="/" className={cx("link")}>
          아직 회원이 아니신가요?
        </Link>

        {/* TODO: 비밀번호 찾기 기능 구현
        <Link to="/" className={cx("link")}>
          비밀번호를 잊으셨나요?
        </Link> */}
      </section>
    </>
  );
};

export default Login;
