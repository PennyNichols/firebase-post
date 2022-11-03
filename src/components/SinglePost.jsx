import React from "react";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { PostContext } from "../context/PostContext";

const SinglePost = (props) => {
	const {
		deletePost,
		setEdit,
		setName,
		setNumber,
		setStudentPath,
		setUpdateId,
	} = useContext(PostContext);
	const { id, name, number, path } = props.post;
	const handleUpdate = () => {
		setName(name);
		setNumber(number);
		setStudentPath(path);
		setUpdateId(id);
		setEdit(true);
	};
	return (
		<Card style={{ width: "20rem" }} className="my-4 mx-auto p-3 shadow">
			<Card.Title>{name}</Card.Title>
			<Card.Text>{number}</Card.Text>
			<Card.Text>{path}</Card.Text>
			<div className="d-flex justify-content-around m-2">
				<Button onClick={() => deletePost(id)}>Delete</Button>
				<Button onClick={handleUpdate}>Edit</Button>
			</div>
		</Card>
	);
};

export default SinglePost;
