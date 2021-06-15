import Link, { LinkProps } from "@@/components/shared/Link/Link";
import useMetaData from "@@/hooks/useMetaData";

export type ArticleCardProps = LinkProps;

const ArticleCard = ({ to, ...props }: ArticleCardProps): JSX.Element => {
  const metadata = useMetaData(to as string);

  return (
    <Link to={to} {...props}>
      {/* TODO: metadata 가공해서 보여주기 */}
      {JSON.stringify(metadata)}
    </Link>
  );
};
export default ArticleCard;
