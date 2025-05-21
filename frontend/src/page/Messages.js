import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Messages.css";
import { FaRegCommentDots, FaShare  } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { FaRegFile, FaRegImage, FaRegFaceSmile   } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdNotificationsOff } from "react-icons/md";
import Header from '../components/Header';
import SidebarRight from '../components/SidebarRight';
import SidebarLeft from '../components/SidebarLeft';

function Messages() {
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
                <div className="box-mess">
                  <div className="box-header">
                    <div className="left">
                      <div className="avt"><img src="./avt.jpg" /></div>
                      <div className="title">
                        <div className="name">Liovan <label>3 minutes ago</label></div>
                        <div className="sub-title">Hello, How do you do?</div>
                      </div>
                    </div>
                    <div className="right"><MdNotificationsOff /></div>
                  </div>
                  <div className="box-header">
                    <div className="left">
                      <div className="avt"><img src="./avt.jpg" /></div>
                      <div className="title">
                        <div className="name">Singto <label>4 month ago</label></div>
                        <div className="sub-title">Are you ok?</div>
                      </div>
                    </div>
                    <div className="right"><MdNotificationsOff /></div>
                  </div>
                  <div className="box-header">
                    <div className="left">
                      <div className="avt"><img src="./avt.jpg" /></div>
                      <div className="title">
                        <div className="name">David Ostios <label>1 hours ago</label></div>
                        <div className="sub-title">Have a nice day!</div>
                      </div>
                    </div>
                    <div className="right"><MdNotificationsOff /></div>
                  </div>
                </div>
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

export default Messages;
