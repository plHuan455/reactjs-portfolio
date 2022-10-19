import { useState } from "react";
import { Col, Row } from "../../components/organisms/Container";
import Modal from "../../components/organisms/Modal";
import GroupCreateForm from "../../components/templates/GroupCreateForm";
import GroupCreate from "../GroupCreate";

const Test: React.FC = () => {
  console.log(process.env.NODE_ENV);
  return <GroupCreate />
}

export default Test;