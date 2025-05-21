import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Loading from '../components/Loading';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/register", 
        { name, email, password }
      );
      navigate("/login");
    } catch (error) {
      if (error.response) {
        // Lỗi từ server (ví dụ 400, 401, 500, v.v.)
        console.error(error.response.data);
        alert(error.response.data.message || "Đăng ký thất bại!");
      } else if (error.request) {
        // Đã gửi request nhưng không nhận được phản hồi
        console.error("No response received:", error.request);
        alert("Không thể kết nối đến máy chủ.");
      } else {
        // Lỗi xảy ra khi setup request
        console.error("Error", error.message);
        alert("Đã xảy ra lỗi không xác định.");
      }
    } finally {
      setIsLoading(false); // Kết thúc loading
    }
    
  };

  return (
    <div>
      <div className="container1">
        <div className="content">
            <div className="box">
                <h1>Đăng ký</h1>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        </div>
      </div>
      <Loading show={isLoading} />
    </div>
    
  );
}

export default Register;
