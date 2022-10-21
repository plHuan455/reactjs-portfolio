import LottieLib from "lottie-react";
import { useEffect, useState } from "react";

interface LottieProps {
  src?: string;
  animationData?: any;
}

const Lottie: React.FC<LottieProps> = ({ src, animationData }) => {
  const [lottieAnimation, setLottieAnimation] = useState();
  useEffect(() => {
    if(animationData) {
      setLottieAnimation(undefined);
    }
    if(src){
      (async function fetchJSON(){
        try{
          const response = await fetch(src).then(data => data.json());
          setLottieAnimation(response)
        }catch{
        }
      })()
    }
  }, [src, animationData])
  return <div className="a-lottie">
    {lottieAnimation || animationData && <LottieLib animationData={lottieAnimation || animationData} />}
  </div>
}

export default Lottie;