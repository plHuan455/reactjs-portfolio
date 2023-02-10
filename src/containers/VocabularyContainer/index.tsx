import VocabularyList, { VocabularyTypes } from "~templates/VocabularyList"
import { useMemo } from 'react';
import { vocabularyListDummy } from "~assets/dataDummy/vocabularyDummy";

interface VocabularyContainerProps {}

const VocabularyContainer: React.FC<VocabularyContainerProps> = () => {

  const vocabularyList = useMemo<VocabularyTypes[]>(() => {
    return vocabularyListDummy
  }, [])

  return (
    <>
      <VocabularyList vocabularyList={vocabularyList} />
    </>
  )
}

export default VocabularyContainer;