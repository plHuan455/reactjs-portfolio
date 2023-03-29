import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import { IoMdClose } from 'react-icons/io';
import {Input} from "../../atoms/Input";
import { Controller, FormProvider, UseFormReturn } from "react-hook-form";
import Button from "../../atoms/Button";
import Container, { Col, Row } from "../../organisms/Container";
import placeholderImg from "../../../assets/images/placeholderImage.jpeg";

export interface GroupCreateFields {
  name: string;
  description: string;
  avatarImg: string;
  baseMoney: number;
}

export interface GroupCreateFormProps {
  title?: string;
  buttonText?: string;
  method: UseFormReturn<GroupCreateFields>;
  isFormLoading?: boolean;
  onCancel?: () => void;
  onSubmit: (value: GroupCreateFields) => void;
}

const GroupCreateForm: React.FC<GroupCreateFormProps> = ({
  title = "Tạo nhóm",
  buttonText = "Tạo nhóm",
  isFormLoading,
  method,
  onCancel,
  onSubmit,
}) => {
  const {formState: { isValid }} = method;
  return <Container>
    <div className="t-groupCreateForm">
      <div className="t-groupCreateForm_header">
        <div className="t-groupCreateForm_text">
          <Text type="h1" modifiers={['16x24', 'darkLiver', '600']}>{title}</Text>
        </div>
      </div>
      <FormProvider {...method}>
        <form className="t-groupCreateForm_form" onSubmit={method.handleSubmit(onSubmit)}>
          <Row colGap="24" rowGap="12">
            <Col colSpan="8" sm="9">
              <Row rowGap="12" colGap="24">
                <Col colSpan="12" sm="8">
                  <Controller
                    name="name"
                    render={({ field: { onChange, onBlur, value }, fieldState }) =>
                      <Input
                        error={fieldState?.error?.message}
                        label="Tên nhóm"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Nhập tên nhóm ..."
                        id="group-create-name"
                      />
                    }
                  />
                </Col>
                <Col colSpan="12" sm="4">
                  <Controller
                    name="baseMoney"
                    render={({ field: { onChange, onBlur, value }, fieldState }) =>
                      <Input
                        error={fieldState?.error?.message}
                        label="Số tiền cơ bản"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Số tiền khởi đầu của nhóm"
                        id="group-create-name"
                      />
                    }
                  />
                </Col>
                <Col colSpan="12">
                  <Controller
                    name="avatarImg"
                    render={({ field: { onChange, onBlur, value } }) =>
                      <Input
                        label="Hình Nhóm"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Địa chỉ hình ảnh ..."
                        id="group-create-avatar"
                      />
                    }
                  />
                </Col>
              </Row>
            </Col>
            <Col colSpan="4" sm="3" >
              <Controller
                name="avatarImg"
                render={({ field: { value } }) =>
                  <div className="t-groupCreateForm_form_avatarView">
                    <img src={value || placeholderImg} alt='' />
                  </div>
                }
              />
            </Col>
            <Col colSpan="12">
              <Controller
                name="description"
                render={({ field: { onChange, onBlur, value } }) =>
                  <Input
                    label="Mô Tả"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Nhập mô tả về nhóm ..."
                    id="group-create-description"
                  />
                }
              />
            </Col>
            <Col colSpan="12">
              <div className="t-groupCreateForm_form_buttons">
                <Button 
                type="button" 
                className="t-groupCreateForm_form_btnCancel" 
                modifiers={['noBg', 'davysGrey', '16x28']}
                onClick={onCancel}
                >
                  Huỷ
                  </Button>
                <Button 
                  type="submit" 
                  className="t-groupCreateForm_form_btnCreate"
                  modifiers={['white', '16x28']} 
                  disabled={!isValid}
                  isLoading={isFormLoading}
                  >
                    {buttonText}
                </Button>
              </div>
            </Col>
          </Row>
        </form>
      </FormProvider>
    </div>
  </Container>
}

export default GroupCreateForm;