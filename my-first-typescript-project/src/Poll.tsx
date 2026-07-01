import React, { useState } from "react";

const Poll: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const handleLike = (): void => {
    setLikes((prev) => prev + 1);
  };

  const handleDislike = (): void => {
    setDislikes((prev) => prev + 1);
  };

  const handleReset = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <>
      <h1>Likes & Dislikes Counter</h1>
      <h2>Likes: {likes}</h2>
      <h2>Dislikes: {dislikes}</h2>

      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Poll;