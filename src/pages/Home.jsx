import React from "react";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Button, Form } from "react-bootstrap";
import SinglePost from "../components/SinglePost";

const Home = () => {
	const {
		name,
		number,
		studentPath,
		setName,
		setNumber,
		setStudentPath,
		writeToDatabase,
		posts,
        edit,
        updatePost,
	} = useContext(PostContext);

	const handleSubmit = (e) => {
		e.preventDefault();
        if (!edit){
            writeToDatabase();
        } else{
            updatePost()
        }
	};
	return (
		<div>
			<Form className=" col-4 m-auto mt-5 " onSubmit={handleSubmit}>
				<Form.Control
					className="my-2"
					type="text"
					placeholder="Student Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Form.Control
					type="text"
					placeholder="Student Number"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
				/>
				<Form.Control
					className="my-2"
					type="text"
					placeholder="Student Path"
					value={studentPath}
					onChange={(e) => setStudentPath(e.target.value)}
				/>
				<Button className="my-2" type="submit">
					{edit ? 'Update' : 'Submit'}
				</Button>
			</Form>
			{posts.map((post, i) => {
				return <SinglePost key={i} post={post} />;
			})}
		</div>
	);
};

export default Home;
