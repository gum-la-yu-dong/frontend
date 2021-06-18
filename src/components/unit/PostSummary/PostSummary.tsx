import classnames from "classnames/bind";
import { Post } from "@@/types";
import Icon from "@@/components/shared/Icon/Icon";
import Button from "@@/components/shared/Button/Button";
import styles from "./PostSummary.module.scss";
import ArticleCard from "../ArticleCard/ArticleCard";

export interface PostSummaryProps {
  post: Post;
}

const cx = classnames.bind(styles);

const PostSummary = ({
  post: { user, title, url, createdAt, summary, tags },
}: PostSummaryProps): JSX.Element => (
  <section className={cx("post-summary")}>
    <header className={cx("header")}>
      <Icon
        src={user.profileUrl}
        alt="유저 프로필"
        shadow
        className={cx("Icon")}
      />
      <span>{user.name}</span>
      <span className={cx("date")}>{createdAt}</span>
    </header>

    <article className={cx("article")}>
      <h2 className={cx("title")}>{title}</h2>
      <p className={cx("summary")}>{summary}</p>
      <ArticleCard href={url} />
      <div>
        {tags?.map((tag) => (
          <Button key={tag} type="button" variant="chip">
            <span>{tag}</span>
          </Button>
        ))}
        {/* TODO comment, like 추가 */}
      </div>
    </article>
  </section>
);

export default PostSummary;
