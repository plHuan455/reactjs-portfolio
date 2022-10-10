import React from 'react';
import Modal from 'react-modal';

import { mapModifiers } from '../../../utils/funcs';
import Icon, { IconNames, IconSize } from '../../atoms/Icon';

interface CustomModalProps {
  isOpen: boolean;
  handleClose?: () => void;
  afterClose?: () => void;
  isShowCloseButton?: boolean;
  modifiers?: 'calendar' // add more modifiers
  iconName?: IconNames;
  sizeIconClose?: IconSize;
  children?: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  children,
  modifiers,
  iconName = 'closeEerieBlack',
  isShowCloseButton,
  handleClose,
  afterClose,
  sizeIconClose = '20x20',
}) => {
  Modal.setAppElement('#root');
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      closeTimeoutMS={250}
      htmlOpenClassName="reactmodal-html-open"
      className={`${mapModifiers('o-modal', modifiers)}`}
      appElement={document.getElementById('root') as HTMLElement}
      ariaHideApp={false}
      portalClassName={mapModifiers('o-modal_portal', isOpen && 'open')}
      onAfterClose={afterClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <div className="o-modal_main">
        <div className="o-modal_wrapper">
          {isShowCloseButton && (
          <button type="button" className="o-modal_close" onClick={handleClose}>
            <Icon iconName={iconName} modifiers={[sizeIconClose]}/>
          </button>
          )}
          <div className="o-modal_body">{children}</div>
        </div>
      </div>
    </Modal>
  );
};

CustomModal.defaultProps = {
  handleClose: undefined,
  isShowCloseButton: true,
  modifiers: undefined,
};

export default CustomModal;
