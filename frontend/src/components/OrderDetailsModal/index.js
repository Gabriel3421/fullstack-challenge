import React from 'react';
import { Modal } from 'antd';
import "./styles.css"

function OrderDetailsModal({ isModalVisible, changeModalVisibility, modalInfo }) {
  const handleCancel = () => {
    changeModalVisibility(false);
  };

  return (
    <Modal
      title="Order details"
      visible={isModalVisible}
      onCancel={handleCancel}
      width={"80%"}
      footer={null}
    >
      <div className="modalContainer">
        <div>
          <div className="infoContainerGroup">
            <div className="infoContainer">
              <span className="title">Contact Name</span>
              <span className="content">{modalInfo.contactName}</span>
            </div>
            <div className="infoContainer">
              <span className="title">Contact Phone</span>
              <span className="content">{modalInfo.contactPhone}</span>
            </div>
          </div>
          <div className="infoContainer">
            <span className="title">Order description</span>
            <span className="description">{modalInfo.description}</span>
          </div>
          <div className="infoContainer">
            <span className="title">Category</span>
            <span className="content">{modalInfo.category?.name}</span>
          </div>
        </div>
        <div>
          <div className="infoContainer">
            <span className="title">Real Estate Agency</span>
            <span className="content">{modalInfo.agency}</span>
          </div>
          <div className="infoContainer">
            <span className="title">Real Estate Agency</span>
            <span className="content">{modalInfo.company}</span>
          </div>
          <div className="infoContainer">
            <span className="title">Real Estate Agency</span>
            <span className="content">{modalInfo.deadline}</span>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default OrderDetailsModal;