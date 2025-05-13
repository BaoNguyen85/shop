import "./Loading.css";


function Loading({ show }) {
    if (!show) return null;
  
    return (
        <div className="loading">
            <span class="loader"></span>
        </div>
    );
  }
  

export default Loading;