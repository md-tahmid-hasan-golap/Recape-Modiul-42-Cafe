import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ handleBookMark, handleMarkRed }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //   console.log(blogs);
  return (
    <div>
      <h2 className="text-2xl">Total : {blogs.length}</h2>
      <div className="all-blogs grid grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            handleBookMark={handleBookMark}
            handleMarkRed={handleMarkRed}
            blog={blog}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
