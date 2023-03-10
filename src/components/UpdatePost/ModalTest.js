import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdatePost from "./UpdatePost";

function UpdatePostModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="btn-sm" variant="primary" onClick={handleShow}>
				Update
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header>
					<Modal.Title>Update</Modal.Title>
					<h5>Update Post</h5>
				</Modal.Header>
				<Modal.Body>
					<UpdatePost />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary">Understood</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default UpdatePostModal;
