import React, {useEffect} from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - CoPA Musique"
 }, []);

  return (
    <div className="container">
      <h1>Blog</h1>
    </div>
  );
};

export default Blog;
