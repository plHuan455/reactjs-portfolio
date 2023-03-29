import { Box } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import WordTrainCard from "~molecules/WordTrainCard";
import ModalBase from "~organisms/ModalBase";
import VocabularyCard from "~organisms/VocabularyCard";
import { getWordService, updateWordService } from "~services/word";
import { UpdateWordParams, WordResponse } from "~services/word/type";
import VocabularyTrain, { VocabularyTrainTypes } from "~templates/VocabularyTrain";

interface VocabularyTrainContainerProps {}

const VocabularyTrainContainer: React.FC<VocabularyTrainContainerProps> = () => {

  const [selectedWordCardModal, setSelectedWordCardModal] = useState<WordResponse>();
  
  const {data: wordsData, isLoading: isWordGetting} = useQuery({
    queryKey: ['vocabulary-get-words'],
    queryFn: getWordService,
  })

  const { mutate: updateWordMutate, isLoading: isWordUpdating} = useMutation({
    mutationKey: ['vocabulary-train-update'],
    mutationFn: ({id, params}: {id: string, params: UpdateWordParams}) => updateWordService(id, params),
  })  

  const convertedWords = useMemo<VocabularyTrainTypes[]>(() => {
    return wordsData?.map(value => ({
      id: value._id ?? '',
      imgSrc: value.imgSrc ?? '',
      mean: value.mean ?? '',
      word: value.word ?? '',
    })) ?? []
  }, [wordsData])

  const handleCorrect = (id: string) => {
    const foundWord = wordsData?.find(value => value._id === id);
    if(foundWord) {
      updateWordMutate({
        id: foundWord._id ?? '',
        params: {priority: typeof foundWord.priority === 'number' ? foundWord.priority + 1 : undefined}
      })
    }
  }
  
  const handleUnCorrect = (id: string) => {
    const foundWord = wordsData?.find(value => value._id === id);
    if(foundWord) {
      updateWordMutate({
        id: foundWord._id ?? '',
        params: {priority: typeof foundWord.priority === 'number' && foundWord.priority !== 0 ? foundWord.priority - 1 : 0 }
      })
    }
  }

  const handleOnFailIconClick = (id: string) => {

    console.log(id)
    const foundWord = wordsData?.find(value => value._id === id);
    if(foundWord) {
      setSelectedWordCardModal(foundWord);
    }
  }

  return (
    <>
      <VocabularyTrain 
        wordList={convertedWords}
        onCorrect={handleCorrect}
        onUnCorrect={handleUnCorrect}
        onFailIconClick={handleOnFailIconClick}
      />
      <ModalBase 
        isOpen={Boolean(selectedWordCardModal)}
        onClose={() => setSelectedWordCardModal(undefined)}>
        <Box>
          <VocabularyCard 
            word={selectedWordCardModal?.word ?? ''}
            description={selectedWordCardModal?.description ?? ''}
            image={selectedWordCardModal?.imgSrc ?? ''}
            mean={selectedWordCardModal?.mean ?? ''}
            SuggestionLabel={''}
          />
        </Box>
      </ModalBase>
    </>
  );
};

export default VocabularyTrainContainer;