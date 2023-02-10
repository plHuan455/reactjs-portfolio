import { Box } from "@mui/material";
import VocabularyContainer from "~containers/VocabularyContainer";

interface VocabularyProps {
}

const Vocabulary: React.FC<VocabularyProps> = () => {
  return (
    <Box className="p-vocabulary">
      <VocabularyContainer />
    </Box>
  )
}

export default Vocabulary;