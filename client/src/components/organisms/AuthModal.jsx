import React, { useState } from "react";
import { Modal } from "antd";

const LoginModal = ({ AuthForm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="text-sm" onClick={showModal}>
        Log In
      </button>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <AuthForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
};

export default LoginModal;
