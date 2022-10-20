import Lottie from "~atoms/Lottie";
import catLoadAnimation from '~assets/lotties/catLoading.json';
import { mapModifiers } from "../../../utils/funcs";


interface LoadingProps {
  size?: BoxSize | 'full';
}

const Loading: React.FC<LoadingProps> = ({ size }) => {
  if(size === 'full') {
    return <div className="a-loading a-loading-full">
      <div className="a-loading_wrapper">
        <Lottie animationData={catLoadAnimation} />
      </div>
    </div>
  }
  return <div className={mapModifiers("a-loading", size)}>
    <Lottie animationData={catLoadAnimation} />
  </div>
}

export default Loading;