import { useState } from "react";
import Modal from "../../components/organisms/Modal";

const Test: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Modal
      isOpen={isOpen}
      isShowCloseButton
      handleClose={() => setIsOpen(false)}
    >
      test
    </Modal>
  );
}

export default Test;