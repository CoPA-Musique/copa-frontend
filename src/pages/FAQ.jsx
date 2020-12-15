import React, {useEffect} from "react";

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ - CoPA Musique"
 }, []);

  return (
    <div className="container">
      <h1>FAQ</h1>
    </div>
  );
};

export default FAQ;
