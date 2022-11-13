import LottieLib from "lottie-react";

interface LottieProps {
  animationData?: any;
}

const Lottie: React.FC<LottieProps> = ({ animationData }) => {
  return <div className="a-lottie">
    <LottieLib animationData={animationData} />
  </div>
}

export default Lottie;