import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkRed }) => {
  //   console.log(blog);
  return (
    <div className="m-2">
      <div className=" bg-base-100 image-full w-96 ">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="auther flex justify-around items-center">
            <h2>{blog.author}</h2>
            <img className="w-16" src={blog.author_img} alt="" />
            <button onClick={() => handleBookMark(blog)}>
              <FaBookmark size={25} />
            </button>
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex">
            {blog.hashtags.map((has) => (
              <p key={has.id}>{has}</p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleMarkRed(blog.reading_time, blog.id)}
              className="btn btn-primary"
            >
              mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
