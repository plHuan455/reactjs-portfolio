import React, { useState } from 'react';
import { number } from 'yup';
import { UseFormReturn, FormProvider, Controller } from 'react-hook-form'
import { Input, TimeInput } from '~atoms/Input';
import { Col, Row } from '~organisms/Container';
import Button from '~atoms/Button';
import { numberToMoney, numberToRand } from '../../../utils/funcs';
import Text from '~atoms/Text';
import { LoadingButton } from '@mui/lab';
import { Autocomplete, Box, TextField } from '@mui/material';
import InputMoney from '~molecules/InputMoney';
import { rem } from '../../../styles/mixins';

export interface PendingFields {
  content: string;
  money: number;
  bank: string;
  time: number[];
}

export interface CreatePendingFormProps {
  submitButtonLabel?: string;
  isFormLoading?: boolean;
  title: string;
  method: UseFormReturn<PendingFields>;
  onCancelClick?: () => void;
  onSubmit: (value: PendingFields) => void;
}

const CreatePendingForm: React.FC<CreatePendingFormProps> = ({ isFormLoading, submitButtonLabel, title, method, onCancelClick, onSubmit }) => {
  const sourceMoneyOptions = ['Vietcomebank', 'Zalo', 'Momo', 'Vietinbank', 'BIDV'];
  const [moneySourceOption, setMoneySourceOption] = useState<string>();
  const handleMoneySourceInput = (e: React.FormEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if(value && !sourceMoneyOptions.some(option => option.toLowerCase() === value.toLowerCase())) {
      setMoneySourceOption(value)
    }else {
      setMoneySourceOption(undefined)
    }
  }

  return <div className="o-createPendingForm">
    <div className="o-createPendingForm_title">
      <Text type="h1" modifiers={['20x24', 'darkLiver', '600', 'center']}>{title}</Text>
    </div>

    <FormProvider {...method}>
      <form className="o-createPendingForm_form" onSubmit={method.handleSubmit(onSubmit)}>
        <Row colGap='24' rowGap='12'>
          <Col colSpan='12'>
            <Controller
              name="content"
              render={({ field: { onChange, onBlur, value }, fieldState }) =>
                <Input
                  error={fieldState?.error?.message}
                  label="Nội dung"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Nhập nội dung"
                  id="create-pending-content"
                />
              }
            />
          </Col>
          <Col colSpan='8' sm='10'>
            <Controller
              name="money"
              render={({ field: { onChange, onBlur, value }, fieldState }) =>
                <InputMoney
                  id="create-pending-money"
                  options={[]}
                  label={"Số tiền"}
                  value={value}
                  onChange={onChange}
                />
              }
            />
          </Col>
          <Col colSpan='4' sm='2'>
            <Controller
              name="time"
              render={({ field: { onChange, onBlur, value }, fieldState }) =>
                <TimeInput
                  label="Giờ / Phút"
                  error={fieldState?.error?.message}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholderHours="00"
                  placeholderMinutes="00"
                  id="create-pending-time"
                />
              }
            />
          </Col>
          <Col colSpan='12'>
            <Controller
              name="bank"
              render={({ field: { onChange, onBlur, value }, fieldState }) =>
                <Box>
                  <Box>
                    <label htmlFor="">Nguồn tiền</label>
                  </Box>
                  <Box>
                    <Autocomplete
                      value={value}
                      options={ moneySourceOption ? [moneySourceOption, ...sourceMoneyOptions] : sourceMoneyOptions}
                      placeholder="Nhập nguồn tiền"
                      onInput={handleMoneySourceInput}
                      autoHighlight
                      filterSelectedOptions
                      onChange={(_, value) => onChange(value)}
                      renderInput={(params) => (<TextField {...params} size="small" />)}
                      sx={{
                        '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input': {
                          py: rem(4),
                          pl: 0,
                        },
                        '& .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
                          py: 0,
                          pl: rem(4),
                        },
                        '& .MuiInputBase-input': {
                          fontSize: rem(14),
                          lineHeight: rem(20),
                          color: '#00000'
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          px: 0,
                          borderColor: 'rgb(227, 227, 229) !important',
                          borderWidth: `${rem(1)} !important`
                        },
                      }}
                      size='small' 
                    />
                  </Box>
                </Box>
              }
            />
          </Col>
          <Col colSpan='12'>
            <div className="o-createPendingForm_button">
              <div className="o-createPendingForm_button_cancel">
                <Button modifiers={['noBg']} onClick={() => { if (onCancelClick) onCancelClick() }}>Hủy</Button>
              </div>
              <div className="o-createPendingForm_button_add">
                <LoadingButton loading={isFormLoading} variant='contained' type='submit'>
                  {submitButtonLabel ?? 'Tạo'}
                </LoadingButton>
              </div>
            </div>
          </Col>
        </Row>
      </form>
    </FormProvider>
  </div>
};

CreatePendingForm.defaultProps = {
};

export default CreatePendingForm;

