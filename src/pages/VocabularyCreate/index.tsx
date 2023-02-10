import Section from '~templates/Section';
import VocabularyCreateContainer from '../../containers/VocabularyCreateContainer';

interface VocabularyCreateProps {}

const VocabularyCreatePage: React.FC<VocabularyCreateProps> = (props) => (
  <div className="p-vocabularyCreate">
    <Section>
      <VocabularyCreateContainer />
    </Section>
  </div>
);

export default VocabularyCreatePage;
