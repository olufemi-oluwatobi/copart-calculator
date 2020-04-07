import React, { Component } from "react";
import { Modal, Button } from "antd";

class ModalComponent extends Component {
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  componentDidMount() {}
  render() {
    const { visible, width } = this.props;
    return (
      <div>
        <Modal
          visible={visible}
          title={null}
          closable={false}
          style={{ top: 100, width: 20 }}
          width={width || 600}
          footer={null}
          bodyStyle={{padding: "0px"}}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
