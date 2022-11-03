import { onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase/firebase";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [studentPath, setStudentPath] = useState("");
	const [posts, setPosts] = useState([]);
    const [edit, setEdit] = useState(false);
    const [updateId, setUpdateId] = useState('');

	const writeToDatabase = () => {
		const postRef = ref(db, "Post");
		const newPostRef = push(postRef);
		set(newPostRef, {
			name: name,
			number: number,
			path: studentPath,
		});
		setName("");
		setNumber("");
		setStudentPath("");
	};

	useEffect(() => {
		const postRef = ref(db, "Post");
		onValue(postRef, (snapshot) => {
			const data = snapshot.val();
			const postArr = [];
			for (let id in data) {
				postArr.push({ id, ...data[id] });
			}
			setPosts(postArr);
		});
	}, []);

    const deletePost = (id) => {
        remove(ref(db, 'Post/' + id))
    }

    const updatePost = () =>{
        update(ref(db, 'Post/' + updateId), {
            name: name,
			number: number,
			path: studentPath,
        })
        setName("");
		setNumber("");
		setStudentPath("");
        setEdit(false);
        setUpdateId('')
    }

	return (
		<PostContext.Provider
			value={{
				name,
				number,
				studentPath,
				setName,
				setNumber,
				setStudentPath,
				writeToDatabase,
				posts,
                deletePost,
                updatePost,
                edit,
                setEdit,
                setUpdateId,
			}}
		>
			{children}
		</PostContext.Provider>
	);
};

export default PostContextProvider;
