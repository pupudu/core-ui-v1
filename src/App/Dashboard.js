import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalButton = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <>
      <Button color="danger" onClick={toggle}>
        Open
      </Button>
      <Modal isOpen={isOpen} toggle={toggle} className="modal-teal">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>Lorem ipsum</ModalBody>
        <ModalFooter>
          <Button color="info" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

function Dashboard() {
  return (
    <div className="animated fadeIn">
      <div className="card">
        <div className="card-header">Heading</div>
        <div className="card-body">
          <button className="btn btn-secondary">Primary</button>{' '}
          <button className="btn btn-teal">Primary</button> <ModalButton />{' '}
          <label className="switch switch-default switch-success">
            <input type="checkbox" className="switch-input" defaultChecked />
            <span className="switch-label" />
            <span className="switch-handle" />
          </label>
        </div>
        <div className="card-footer">Footer</div>
      </div>
    </div>
  );
}

export default Dashboard;
