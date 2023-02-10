import CloseIcon from '@mui/icons-material/Close';
import { Box, Modal } from '@mui/material';
import React from 'react';

export interface ModalBaseProps {
  isOpen: boolean;
  children: JSX.Element;
  onClose?: () => void;
}

const ModalBase: React.FC<ModalBaseProps> = ({
  isOpen,
  children,
  onClose,
}) => {
  return (
    <Modal open={isOpen} className="o-modalBase" onClose={onClose} >
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Box sx={{position: 'relative'}}>
          <Box sx={{position: 'absolute', right: (theme) => theme.spacing(5), top: (theme) => theme.spacing(5), cursor: 'pointer' }}>
            <CloseIcon sx={{fontSize: (theme) => theme.spacing(20), color: '#141414' }} onClick={() => onClose && onClose()}/>
          </Box>
          <Box>
            {children}
          </Box>
        </Box>
      </Box>
    </Modal>
  )
};

ModalBase.defaultProps = {
  children: undefined,
};

export default ModalBase;

