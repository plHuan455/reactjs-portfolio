import Text from "~atoms/Text";
import GroupCreate from "../GroupCreate";

const Test: React.FC = () => {
  console.log(process.env.NODE_ENV);
  return <>
    <GroupCreate />
    <Text modifiers={['deepGreenCyanTurquoise']}>test text</Text>
  </>
}

export default Test;