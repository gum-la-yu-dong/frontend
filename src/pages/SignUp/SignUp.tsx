import { useState, ChangeEvent } from "react";
import classnames from "classnames/bind";
import Button from "@@/components/shared/Button/Button";
import LabelInput from "@@/components/unit/LabelInput/LabelInput";
import styles from "./SignUp.module.scss";

const cx = classnames.bind(styles);

const SignUp = (): JSX.Element => {
  const [values, setValues] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfirm: "",
    githubId: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    /* TODO: onSubmit */
    /* TODO: Profile Input */
    <form className={cx("form")}>
      <LabelInput
        label="닉네임"
        id="nickname"
        type="text"
        value={values.nickname}
        onChange={handleChange}
        autoComplete="nickname"
        name="nickname"
      />

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
        autoComplete="new-password"
        name="password"
      />

      <LabelInput
        label="비밀번호 확인"
        id="password-confirm"
        type="password"
        value={values.passwordConfirm}
        onChange={handleChange}
        autoComplete="new-password"
        name="passwordConfirm"
      />

      <LabelInput
        label="Github ID"
        id="github-id"
        type="text"
        value={values.githubId}
        onChange={handleChange}
        autoComplete="off"
        name="github-id"
      />

      <Button type="submit">회원가입</Button>
    </form>
  );
};

export default SignUp;
