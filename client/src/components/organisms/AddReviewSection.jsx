import React, { useState } from "react";
import { Modal } from "antd";
import ButtonRounded from "../atoms/ButtonRounded";
import ReviewForm from "./ReviewForm";

const AddReviewSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button onClick={showModal}>
        <ButtonRounded name="Write a customer review" />
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <ReviewForm />
      </Modal>
    </div>
  );
};

export default AddReviewSection;
