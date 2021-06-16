import { AnchorHTMLAttributes } from "react";
import classnames from "classnames/bind";
import useMetaData from "@@/hooks/useMetaData";
import styles from "./ArticleCard.module.scss";

export interface ArticleCardProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const cx = classnames.bind(styles);

const ArticleCard = ({
  href,
  className,
  ...props
}: ArticleCardProps): JSX.Element => {
  const { title, image, url } = useMetaData(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={cx("article-card", className)}
      {...props}
    >
      <img className={cx("thumbnail")} src={image} alt="아티클 썸네일" />
      <section className={cx("section")}>
        <h3 className={cx("title")}>{title}</h3>
        <p className={cx("url")}>{url}</p>
      </section>
    </a>
  );
};

export default ArticleCard;
