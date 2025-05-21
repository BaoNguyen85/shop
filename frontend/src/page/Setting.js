import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Setting.css";
import { FaRegCommentDots, FaShare  } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { FaRegFile, FaRegImage, FaRegFaceSmile   } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import Header from '../components/Header';
import SidebarRight from '../components/SidebarRight';
import SidebarLeft from '../components/SidebarLeft';

function Setting() {
  const userName = localStorage.getItem("name");
  const userEmail = localStorage.getItem("email");
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);
  return (
    <div>
        <div className="home-body">
            <div className="left">
              <SidebarLeft />
            </div>
            <div className="center">
              <Header />
              <div className="scroll-area">
                
                
              </div>
            </div>
            <div className="right">
              <SidebarRight />
            </div>
        </div>
        {/* <Footer /> */}
    </div>
  );
}

export default Setting;
