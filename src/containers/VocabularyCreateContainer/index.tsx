import VocabularyCreateEdit, { VocabularyCreateEditType } from "~templates/VocabularyCreateEdit";
import {useForm} from 'react-hook-form';

interface VocabularyCreateContainerProps { }

const VocabularyCreateContainer: React.FC<VocabularyCreateContainerProps> = () => {
  const method = useForm<VocabularyCreateEditType>({
    defaultValues: {
      description: '',
      image: '',
      mean: '',
      suggestion: '',
      word: '',
    }
  })

  return (
    <>
      <VocabularyCreateEdit 
        method={method} 
        title="Tạo từ vựng"
      />
    </>
  );
};

export default VocabularyCreateContainer;