import LottieLib from "lottie-react";
import { useEffect, useState } from "react";

interface LottieProps {
  src: string;
}

const Lottie: React.FC<LottieProps> = ({ src }) => {
  const [lottieAnimation, setLottieAnimation] = useState();
  useEffect(() => {
    (async function fetchJSON(){
      try{
        const response = await fetch(src).then(data => data.json());
        setLottieAnimation(response)
      }catch{
      }
    })()
  }, [src])
  return <div className="a-lottie">
    {lottieAnimation && <LottieLib animationData={lottieAnimation} />}
  </div>
}

export default Lottie;