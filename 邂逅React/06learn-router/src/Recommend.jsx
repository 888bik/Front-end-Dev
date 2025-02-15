import React, { memo } from "react";
import { useParams } from "react-router-dom";

const Recommend = memo(() => {
  const params = useParams();
  return <div>Recommend:{params.songId}</div>;
});

export default Recommend;
