import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  flex: 2;
`;

const Recommendation = ({ random }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/random?random=${random}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [random]);

  return (
    <Container>
      {videos.map((video) => (
        <Card type="sm" key={video?._id} video={video} />
      ))}
    </Container>
  );
};

export default Recommendation;