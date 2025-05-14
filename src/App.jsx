import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [times, setTimes] = useState(0);
  const handleBookMark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };

  const handleMarkRed = (time, id) => {
    const newTime = times + time;
    setTimes(newTime);
    handleRemoveFromBookMark(id);
  };

  const handleRemoveFromBookMark = (id) => {
    const remeningBookmark = bookmark.filter((mark) => mark.id !== id);
    setBookmark(remeningBookmark);
  };
  return (
    <>
      <Navbar></Navbar>

      <div className="main-containar flex text-center">
        <div className="left-containar w-[70%]">
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkRed={handleMarkRed}
          ></Blogs>
        </div>
        <div className="right-container w-[30%] border-2 mt-10 rounded-2xl">
          <h1>Reading time : {times}</h1>
          <h1>Bookmarked count : {bookmark.length}</h1>
          {bookmark.map((booked) => (
            <p className="bg-red-600 m-2 text-white p-2 shadow" key={booked.id}>
              {booked.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
