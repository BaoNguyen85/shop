import "./SidebarLeft.css";
import { useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate, NavLink } from "react-router-dom";
import { AiOutlineUser, AiFillPicture   } from "react-icons/ai";
import { FaFacebookMessenger, FaUserFriends, FaSafari } from "react-icons/fa";
import { IoSettingsSharp, IoLogOut  } from "react-icons/io5";
import Loading from '../components/Loading';

function SidebarLeft() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isActive, setIsActive] = useState(false); //active logout

    const userName = localStorage.getItem("name");
    const userEmail = localStorage.getItem("email");

    const handleLogout = async (e) => {
        e.preventDefault();
        setIsActive(true);
        setIsLoading(true);
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://127.0.0.1:8080/api/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            });

            localStorage.removeItem('token');
            localStorage.clear();
            navigate('/login');
        } catch (error) {
            if (error.response) {
            console.error(error.response.data);
            alert(error.response.data.message || "Đăng xuất thất bại!");
            } else if (error.request) {
            console.error("No response received:", error.request);
            alert("Không thể kết nối đến máy chủ.");
            } else {
            console.error("Error", error.message);
            alert("Đã xảy ra lỗi không xác định.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className="list">
                <div className="user">
                    <div className="avt">
                        <img src="data:image/jpeg;base64,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" />
                    </div>
                    <a href="">{ userName }</a>
                    <label>{ userEmail }</label>
                </div>
                <NavLink to="/home" className={({ isActive }) => isActive ? "list-option active" : "list-option"} >
                    <FaSafari />&nbsp; <span>News</span>
                </NavLink>
                <NavLink to="/messages" className={({ isActive }) => isActive ? "list-option active" : "list-option"} >
                    <FaFacebookMessenger />&nbsp; <span>Messages</span>
                </NavLink>
                <NavLink to="/friends" className={({ isActive }) => isActive ? "list-option active" : "list-option"} >
                    <FaUserFriends />&nbsp; <span>Friends</span>
                </NavLink>
                <NavLink to="/media" className={({ isActive }) => isActive ? "list-option active" : "list-option"} >
                    <AiFillPicture />&nbsp; <span>Media</span>
                </NavLink>
                <NavLink to="/setting" className={({ isActive }) => isActive ? "list-option active" : "list-option"} >
                    <IoSettingsSharp />&nbsp;<span>Setting</span>
                </NavLink>
                <NavLink to="/logout" className={({ isActive }) => `list-option ${isActive || isLoading ? "active" : "list-option"}`} onClick={(event) => {handleLogout(event);}}>
                    <IoLogOut /><span>{isLoading ? "Logging out..." : "Logout"}</span>
                </NavLink>
            </div>
            <Loading show={isLoading} />
      </div>
    );
  }
  
  export default SidebarLeft;