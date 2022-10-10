import { BiLoaderAlt } from "react-icons/bi";
import Icon, { IconSize } from "../Icon";

interface LoadingProps {
  isFull?: boolean;
  size?: IconSize;
}

const Loading: React.FC<LoadingProps> = ({ size, isFull }) => {
  return <div className="a-loading">
    <Icon modifiers={size ? [size]: []}>{BiLoaderAlt}</Icon>
  </div>
}

export default Loading;