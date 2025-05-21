import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Loading from '../components/Loading';

// Đảm bảo axios tự động gửi XSRF-TOKEN trong header
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "XSRF-TOKEN"; // Tên cookie Laravel tạo
axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN"; // Header mà Laravel mong đợi

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Gọi để lấy CSRF cookie
      await axios.get("http://127.0.0.1:8080/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      const response = await axios.post(
        "http://127.0.0.1:8080/api/login", 
        { email, password },
        { withCredentials: true }
      );
      localStorage.setItem("token", response.data.token); //Lưu token nhận được từ API vào localStorage (bộ nhớ trình duyệt). Token này sẽ dùng để xác thực các request sau này.
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("email", response.data.user.email);
      navigate("/home");
    } catch (error) {
      if (error.response) {
        // Lỗi từ server (ví dụ 400, 401, 500, v.v.)
        console.error(error.response.data);
        alert(error.response.data.message || "Đăng nhập thất bại!");
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
                <h1>Đăng nhập</h1>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
      </div>
      <Loading show={isLoading} />
    </div>
    
  );
}

export default Login;
