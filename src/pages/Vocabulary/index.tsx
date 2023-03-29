import { Box } from "@mui/material";
import VocabularyContainer from "~containers/VocabularyContainer";
import Section from "~templates/Section";

interface VocabularyProps {
}

const Vocabulary: React.FC<VocabularyProps> = () => {
  return (
    <Box className="p-vocabulary">
      <Section>
        <VocabularyContainer />
      </Section>
    </Box>
  )
}

export default Vocabulary;