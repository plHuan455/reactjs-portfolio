import VocabularyList, { VocabularyTypes } from "~templates/VocabularyList"
import { useMemo, useState } from 'react';
import { vocabularyListDummy } from "~assets/dataDummy/vocabularyDummy";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createWordService, deleteWordService, getWordService, updateWordService } from "~services/word";
import ModalBase from "~organisms/ModalBase";
import Box from "@mui/material/Box";
import VocabularyCreateEdit, { VocabularyCreateEditType } from "~templates/VocabularyCreateEdit";
import { useForm } from 'react-hook-form';
import { rem } from "../../styles/mixins";
import { toast } from "react-toastify";
import { UpdateWordParams, WordResponse } from "~services/word/type";

interface VocabularyContainerProps {}

const VocabularyContainer: React.FC<VocabularyContainerProps> = () => {
  const queryClient = useQueryClient();

  const method = useForm<VocabularyCreateEditType>({
    defaultValues: {
      description: '',
      image: '',
      mean: '',
      word: '',
    }
  })

  const updateMethod = useForm<VocabularyCreateEditType>({
    defaultValues: {
      description: '',
      image: '',
      mean: '',
      word: '',
    }
  })

  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);
  const [selectedUpdateWordModal, setSelectedUpdateWordModal] = useState<WordResponse>();

  const {data: wordsData, isLoading: isWordGetting} = useQuery({
    queryKey: ['vocabulary-get-words'],
    queryFn: getWordService,
  })

  const { mutate: createWordMutate, isLoading: isWordCreating } = useMutation({
    mutationKey: ['vocabulary-create'],
    mutationFn: createWordService,
    onSuccess: () => {
      toast.success('Tạo từ vựng thành công');
      queryClient.invalidateQueries({queryKey: ['vocabulary-get-words']});
      setIsOpenCreateModal(false);
    },
    onError: (err) => {
      toast.error('Tạo từ vựng thất bại');
    }
  })

  const { mutate: updateWordMutate, isLoading: isWordUpdating } = useMutation({
    mutationKey: ['vocabulary-word-update'],
    mutationFn: ({id, params}: {id: string; params: UpdateWordParams}) => updateWordService(id, params),
    onSuccess: () => {
      toast.success('Cập nhật từ thành công');
      queryClient.invalidateQueries({queryKey: ['vocabulary-get-words']});
      setSelectedUpdateWordModal(undefined);
    },
    onError: () => {
      toast.error('Cập nhật từ thất bại');
    }
  })

  const { mutate: deleteWordMutate, isLoading: isWordDeleting } = useMutation({
    mutationKey: ['vocabulary-word-delete'],
    mutationFn: deleteWordService,
    onSuccess: () => {
      toast.success('Xóa từ thành công');
      queryClient.invalidateQueries({queryKey: ['vocabulary-get-words']});
    },
    onError: () => {
      toast.error('Xóa từ thất bại');
    }
  })

  const vocabularyList = useMemo<VocabularyTypes[]>(() => {
    return wordsData?.map(value =>  ({
      id: value._id ?? '',
      description: value.description ?? '',
      image: value.imgSrc ?? '',
      mean: value.mean ?? '',
      word: value.word ?? '',
      SuggestionLabel: ''
    })) ?? []
  }, [wordsData])

  const handleCreateVocabulary = (values: VocabularyCreateEditType) => {
    createWordMutate({
      word: values.word ?? '',
      description: values.description ?? '',
      imgSrc: values.image ?? '',
      mean: values.mean ?? '', 
    })
  }

  const handleDeleteClick = (id: string) => {
    deleteWordMutate(id)
  }

  const handleUpdateClick = (id: string) => {
    const foundWord = wordsData?.find(value => value._id === id);
    if(foundWord) {
      setSelectedUpdateWordModal(foundWord);
      updateMethod.reset();
      updateMethod.setValue('word', foundWord.word);
      updateMethod.setValue('description', foundWord.description ?? '');
      updateMethod.setValue('mean', foundWord.mean ?? '');
      updateMethod.setValue('image', foundWord.imgSrc ?? '');
    }
  }

  const handleUpdate = (values: VocabularyCreateEditType) => {
    if(selectedUpdateWordModal) {
      updateWordMutate({id: selectedUpdateWordModal._id ?? '', params: {...values, imgSrc: values.image}});
    }
  }

  return (
    <>
      <VocabularyList vocabularyList={vocabularyList} onAddClick={()=> {setIsOpenCreateModal(true); method.reset()}} onDeleteClick={handleDeleteClick} onUpdateClick={handleUpdateClick}/>
      <ModalBase isOpen={isOpenCreateModal} onClose={() => {setIsOpenCreateModal(false); method.reset()}}>
        <Box sx={{backgroundColor: 'white', padding: rem(16), borderRadius: rem(8), width: '80vh'}}>
          <VocabularyCreateEdit method={method} title='Tạo từ vựng' onSubmit={handleCreateVocabulary} isLoading={isWordCreating}/>
        </Box>
      </ModalBase>
      <ModalBase isOpen={Boolean(selectedUpdateWordModal)} onClose={() => setSelectedUpdateWordModal(undefined)}>
        <Box sx={{backgroundColor: '#ffffff', width: '80vw', padding: rem(12), borderRadius: rem(8)}}>
          <VocabularyCreateEdit submitLabel="Cập nhật từ vựng" title={"Cập nhật từ"} method={updateMethod} onSubmit={handleUpdate} isLoading={isWordUpdating}/>
        </Box>
      </ModalBase>
    </>
  )
}

export default VocabularyContainer;