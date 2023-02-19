import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div>
      <ul style={{display:"flex"}}>
      <li>
          <Link to="/admin">HomeAdmin</Link>
        </li>
        <li>
          <Link to="causeAdd">CauseAdd</Link>
        </li>
        <li>
          <Link to="eventAdd">EventAdd</Link>
        </li>
        <li>
          <Link to="galleryAdd">GalleryAdd</Link>
        </li>
        <li>
          <Link to="newsAdd">NewsAdd</Link>
        </li>
        <li>
          <Link to="readAdd">ReadAdd</Link>
        </li>
        <li>
          <Link to="recentAdd">RecentAdd</Link>
        </li>
        <li>
          <Link to="teamAdd">TeamAdd</Link>
        </li>
        <li>
          <Link to="volunteerAdd">VolunteerAdd</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar2;
