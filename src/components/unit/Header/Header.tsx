import classnames from "classnames/bind";
import Icon from "@@/components/shared/Icon/Icon";
import Link from "@@/components/shared/Link/Link";
import noAccountsImg from "@@/assets/image/noAccounts.png";
import searchImg from "@@/assets/image/search.png";
import styles from "./Header.module.scss";

export interface HeaderProps {
  userImg?: string;
}

const cx = classnames.bind(styles);

const Header = ({ userImg = noAccountsImg }: HeaderProps): JSX.Element => (
  <header className={cx("header")}>
    <Link to="/">
      <Icon src={userImg} alt="유저 프로필" shadow />
    </Link>
    <Link to="/">
      <h1 className={cx("title")}>IT-Article-Archive</h1>
    </Link>
    <Link to="/">
      <Icon src={searchImg} alt="유저 프로필" />
    </Link>
  </header>
);

export default Header;
