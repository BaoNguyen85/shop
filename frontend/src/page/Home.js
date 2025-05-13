import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { FaRegCommentDots, FaShare  } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { FaRegFile, FaRegImage, FaRegFaceSmile   } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import Header from '../components/Header';
import SidebarRight from '../components/SidebarRight';
import SidebarLeft from '../components/SidebarLeft';

function Home() {
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
                <div className="box-post"> 
                  <div className="box-post-header">
                    <div className="post-left">
                      <div className="post-avt"><img src="./avt.jpg" /></div>
                      <div className="post-input">
                        <textarea></textarea>
                      </div>
                    </div>
                    <div className="post-right"><FaRegFaceSmile   /></div>
                  </div>
                  <div className="post-react">
                    <div className="panel">
                      <div className="react-button"><FaRegFile /> <label>File</label></div>
                      <div className="react-button"><FaRegImage  /><label>Image</label></div>
                      <div className="react-button"><IoLocationOutline /><label>Location</label></div>
                    </div>
                    <div className="post-button">
                      <button>Send</button>
                    </div>
                  </div>
                </div>
                <div className="box-content"> 
                  <div className="box-header">
                    <div className="left">
                      <div className="avt"><img src="./avt.jpg" /></div>
                      <div className="title">
                        <div className="name">Join</div>
                        <div className="time">2 hours ago</div>
                      </div>
                    </div>
                    <div className="right"><HiOutlineDotsVertical /></div>
                  </div>
                  <div className="content">
                  Canadian police are investigating the death of 21-year-old Indian student Vanshika Saini, whose body was found on the shore of the Ottawa River on Sunday. Saini, who had been missing for several days, 
                  had moved to Ottawa two and a half years ago to pursue higher education. She was last seen on April 25, when she left her residence to inspect a rental room. When she did not show up for an exam the 
                  following morning, her friend grew concerned and tried to contact her, but her phone was switched off.
                  </div>
                  <div className="react">
                    <div className="like-button"><BsHeart /></div>
                    <div className="cmt-button"><FaRegCommentDots /></div>
                    <div className="share-button"><FaShare /></div>
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

export default Home;
