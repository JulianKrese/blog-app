import React from "react";
import PropType from "prop-types";
import { useNavigate } from "react-router-dom";

import Categories from "../Categories";
import "./index.css";

export default function BlogItemText({ blogPost, headerFontSize }) {

  const navigate = useNavigate();
  const navigateToAuthor = () => {
      navigate(`/authors/${blogPost.author}`);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <p className="date-author-text" onClick={navigateToAuthor}>
          {blogPost.author.firstName} {blogPost.author.lastName}
        </p>
        <div className="dot-divider"></div>
        <p className="date-author-text">
          {blogPost.createdAt.substring(0, 10)}
        </p>
      </div>
      <p
        style={{
          fontSize: headerFontSize,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        {blogPost.title}
      </p>
      <p style={{ fontSize: "16px", color: "#667085", textAlign: "left" }}>
        {blogPost.description.substring(0, 100)}...
      </p>
      <Categories blogPost={blogPost} />
    </div>
  );
}

BlogItemText.PropType = {
  blogPost: PropType.array.isRequired,
  lastName: PropType.string.isRequired
}