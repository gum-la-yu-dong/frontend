import React, { useState, ChangeEvent } from "react";
import Input from "@@/components/shared/Input/Input";
import Button from "@@/components/shared/Button/Button";
import Link from "@@/components/shared/Link/Link";
import Header from "@@/components/unit/Header/Header";
import classnames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classnames.bind(styles);

const Login = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Header />
      {/* TODO: onSubmit */}
      <form className={cx("form")}>
        <label htmlFor="email">이메일</label>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="email"
          name="email"
        />
        <label htmlFor="password">비밀번호</label>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
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
