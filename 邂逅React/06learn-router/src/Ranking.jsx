import React, { memo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Ranking = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("userId");
  return <div>Ranking:{query}</div>;
});

export default Ranking;
