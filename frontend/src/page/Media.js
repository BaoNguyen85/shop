import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Media.css";
import { FaRegCommentDots, FaShare  } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { FaRegFile, FaRegImage, FaRegFaceSmile   } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import Header from '../components/Header';
import SidebarRight from '../components/SidebarRight';
import SidebarLeft from '../components/SidebarLeft';

function Media() {
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
                <div className="media">
                  Media
                </div>
                <div className="media-content">
                  <div className="media-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2021/12/15/20/21/sea-6873335_640.jpg" alt="Media Image"/>
                  </div>
                  <div className="media-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2021/08/02/20/54/nature-6517866_640.jpg" alt="Media Image"/>
                  </div>
                  <div className="media-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2022/06/22/04/44/tindari-7276929_640.jpg" alt="Media Image"/>
                  </div>
                  <div className="media-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2019/09/05/07/23/village-4453338_640.jpg" alt="Media Image"/>
                  </div>
                  <div className="media-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2021/09/18/12/40/pier-6635035_640.jpg" alt="Media Image"/>
                  </div>
                  <div className="media-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_640.jpg" alt="Media Image"/>
                  </div>
                  <div className="media-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2022/10/07/08/59/sky-7504583_640.jpg" alt="Media Image"/>
                  </div>
                  <div className="media-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2018/02/21/10/16/train-station-3169964_640.jpg" alt="Media Image"/>
                  </div>
                  <div className="media-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2025/02/09/17/58/cycling-9394894_640.jpg" alt="Media Image"/>
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

export default Media;
