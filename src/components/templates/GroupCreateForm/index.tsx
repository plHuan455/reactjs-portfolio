import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import { IoMdClose } from 'react-icons/io';
import Input from "../../atoms/Input";
import { Controller, FormProvider, useForm, UseFormReturn } from "react-hook-form";
import Button from "../../atoms/Button";
import Container, { Col, Row } from "../../organisms/Container";
import placeholderImg from "../../../assets/images/placeholderImage.jpeg";

export interface GroupCreateFields {
  name: string;
  description: string;
  avatarImg: string;
}

export interface GroupCreateFormProps {
  method: UseFormReturn<GroupCreateFields>;
  onSubmit: (value: GroupCreateFields) => void;
}

const GroupCreateForm: React.FC<GroupCreateFormProps> = ({
  method,
  onSubmit,
}) => {
  const {formState: { isValid }} = method;
  return <Container>
    <div className="t-groupCreateForm">
      <div className="t-groupCreateForm_header">
        <div className="t-groupCreateForm_text">
          <Text type="h1" modifiers={['16x24', 'darkLiver', '600']}>Tạo nhóm</Text>
        </div>
        <div className="t-groupCreateForm_header_iconClose">
          <Icon modifiers={['16x16', 'darkLiver']}>{IoMdClose}</Icon>
        </div>
      </div>
      <FormProvider {...method}>
        <form className="t-groupCreateForm_form" onSubmit={method.handleSubmit(onSubmit)}>
          <Row colGap="24" rowGap="12">
            <Col colSpan="8" sm="9">
              <Row rowGap="12">
                <Col colSpan="12">
                  <Controller
                    name="name"
                    render={({ field: { onChange, onBlur, value }, fieldState }) =>
                      <Input
                        error={fieldState?.error?.message}
                        label="Tên nhóm"
                        value={value}
                        onInputChange={onChange}
                        onBlur={onBlur}
                        placeholder="Nhập tên nhóm ..."
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
                        onInputChange={onChange}
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
                    onInputChange={onChange}
                    onBlur={onBlur}
                    placeholder="Nhập mô tả về nhóm ..."
                    id="group-create-description"
                  />
                }
              />
            </Col>
            <Col colSpan="12">
              <div className="t-groupCreateForm_form_buttons">
                <Button type="button" className="t-groupCreateForm_form_btnCancel" modifiers={['noBg', 'davysGrey', '14x16']}>Huỷ</Button>
                <Button 
                  type="submit" 
                  className="t-groupCreateForm_form_btnCreate"
                  modifiers={['white', '14x16']} 
                  disabled={!isValid}>
                    Tạo Nhóm
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