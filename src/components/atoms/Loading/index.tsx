import Lottie from "~atoms/Lottie";
import catLoadAnimation from '~assets/lotties/catLoading.json';
import mainLoadingAnimation from '~assets/lotties/mainLoading.json';
import { mapModifiers } from "../../../utils/funcs";


export interface LoadingProps {
  size?: BoxSize | 'page' | 'full';
  modifiers?: 'main' | 'page';
}

const Loading: React.FC<LoadingProps> = ({ size, modifiers = 'page' }) => {
  if(size === 'full') 
    return <div className="a-loading a-loading-full">
    <div className="a-loading_wrapper">
      <Lottie animationData={modifiers === 'page' ? catLoadAnimation : mainLoadingAnimation} />
    </div>
  </div>

  if(size === 'page') {
    return <div className="a-loading a-loading-page">
      <div className="a-loading_wrapper">
        <Lottie animationData={modifiers === 'page' ? catLoadAnimation : mainLoadingAnimation} />
      </div>
    </div>
  }
  return <div className={mapModifiers("a-loading", size)}>
    <Lottie animationData={catLoadAnimation} />
  </div>
}

export default Loading;