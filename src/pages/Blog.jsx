import React, { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - CoPA Musique";
  }, []);

  return (
    <main>
      <h1>Blog</h1>
    </main>
  );
};

export default Blog;
