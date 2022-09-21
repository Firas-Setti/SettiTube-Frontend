import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Comment from "./Comment";
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({videoId}) => {

  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => { 
    currentUser ? setUserId(currentUser._id) : setUserId("");
    }, [currentUser])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);


  const handleAddComment = async (e) => {
    e.preventDefault()
    try {
        await axios.post(`/comments`, {desc, videoId, userId});
       
    }catch(err){}
};


  return (
    <Container>
       {currentUser &&
      <NewComment>
        <Avatar src={currentUser.img} />
        <Input placeholder="Add a comment..." onChange={(e) => setDesc(e.target.value)} />
        <AddIcon onClick={handleAddComment} style={{cursor: "pointer", color: "red"}}/> 
      </NewComment>
}
      {comments.map(comment=>(
        <Comment key={comment._id} comment={comment} videoId={videoId} />
        
      ))}
    </Container>
  );
};

export default Comments;