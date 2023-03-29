import Section from '~templates/Section';
import VocabularyTrainContainer from '../../containers/VocabularyTrainContainer';

interface VocabularyTrainProps {}

const VocabularyTrainPage: React.FC<VocabularyTrainProps> = (props) => (
  <div className="p-vocabularyTrain">
    <Section>
      <VocabularyTrainContainer />
    </Section>
  </div>
);

export default VocabularyTrainPage;
