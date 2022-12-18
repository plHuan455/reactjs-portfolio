import Lottie from "~atoms/Lottie";
import catLoadAnimation from '~assets/lotties/catLoading.json';
import mainLoadingAnimation from '~assets/lotties/mainLoading.json';
import spinCatAnimation from '~assets/lotties/spinCat.json';
import { mapModifiers } from "../../../utils/funcs";


export interface LoadingProps {
  size?: BoxSize | 'page' | 'full';
  modifiers?: 'main' | 'page' | 'spin';
}

const Loading: React.FC<LoadingProps> = ({ size, modifiers = 'page' }) => {
  let animation: any = mainLoadingAnimation;
  if(modifiers === 'page') animation = catLoadAnimation;
  else if(modifiers === 'spin') animation = spinCatAnimation;

  if(size === 'full') 
    return <div className="a-loading a-loading-full">
    <div className="a-loading_wrapper">
      <Lottie animationData={animation} />
    </div>
  </div>

  if(size === 'page') {
    return <div className="a-loading a-loading-page">
      <div className="a-loading_wrapper">
        <Lottie animationData={animation} />
      </div>
    </div>
  }
  return <div className={mapModifiers("a-loading", size)}>
    <Lottie animationData={animation} />
  </div>
}

export default Loading;