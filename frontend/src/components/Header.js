import "./Header.css";

function Header() {
  return (
    <div>
        <div className="header-nav">
          <div className="title">
            <div>Feeds</div>
          </div>
          <div className="sub-title">
            <div>Recents</div>
            <div>Friends</div>
            <div>Popular</div>
          </div>
        </div>
    </div>
  );
}

export default Header;
