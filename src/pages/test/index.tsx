import { useState } from "react";
import { Col, Row } from "../../components/organisms/Container";
import Modal from "../../components/organisms/Modal";

const Test: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Row colGap="32">
      <Col md="2" sm='6' colSpan="6">
      <div style={{backgroundColor: 'red'}}>
        test 1
      </div>
      </Col>
      <Col md="2" sm='6' colSpan="6">
        <div style={{backgroundColor: 'orange'}}>
        test 2
        </div>
      </Col>
    </Row>
  );
}

export default Test;