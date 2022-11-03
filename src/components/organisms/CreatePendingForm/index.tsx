import React from 'react';
import { number } from 'yup';
import { UseFormReturn, FormProvider, Controller } from 'react-hook-form'
import { Input, TimeInput } from '~atoms/Input';
import { Col, Row } from '~organisms/Container';
import Button from '~atoms/Button';
import { numberToMoney } from '../../../utils/funcs';
import Text from '~atoms/Text';

export interface PendingFields {
  content: string;
  money: number;
  bank: string;
  time: number[];
}

export interface CreatePendingFormProps {
  title: string;
  method: UseFormReturn<PendingFields>;
  onCancelClick?: () => void;
  onSubmit: (value: PendingFields) => void;
}

const CreatePendingForm: React.FC<CreatePendingFormProps> = ({ title, method, onCancelClick, onSubmit }) => {
  return <div className="o-createPendingForm">
    <div className="o-createPendingForm_title">
      <Text type="h1" modifiers={['20x24', 'darkLiver', '600', 'center']}>{title}</Text>
    </div>
    
    <FormProvider {...method}>
      <form className="o-createPendingForm_form" onSubmit={method.handleSubmit(onSubmit)}>
        <Row colGap='24'>
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
                <Input
                  error={fieldState?.error?.message}
                  label="Số tiền"
                  value={numberToMoney(value)}
                  onChange={(value) => onChange(Number(value.replace(/\./g, '')))}
                  onBlur={onBlur}
                  placeholder="Nhập nội dung"
                  id="create-pending-content"
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
                <Input
                  label='Ngân hàng'
                  error={fieldState?.error?.message}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Ngân hàng"
                  id="create-pending-bank"
                />
              }
            />
          </Col>
          <Col colSpan='12'>
            <div className="o-createPendingForm_button">
              <div className="o-createPendingForm_button_cancel">
                <Button modifiers={['noBg']} onClick={() => {if(onCancelClick) onCancelClick()}}>Hủy</Button>
              </div>
              <div className="o-createPendingForm_button_add">
                <Button type='submit' variant='pendingManager'>Tạo</Button>
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

