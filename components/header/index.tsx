import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="shoope-top">
      <div className="navbar-wrapper">
        <div className="container">
          <div className="scocial-nav">
            <a>Kênh người bán</a>
            <div className="scocial-content">Tải ứng dụng</div>
            <div className="scocial-content">Kết nối</div>
          </div>
          <div className="account-nav">
            <div className="account-tab">
              <FontAwesomeIcon className="account-icon" icon={faBell} />
              <div>Thông báo</div>
            </div>
            <div className="account-tab">
              <FontAwesomeIcon className="account-icon" icon={faBell} />
              <div>Hỗ trợ</div>
            </div>
            <div className="account-tab">
              <FontAwesomeIcon className="account-icon" icon={faBell} />
              <div>Tiếng Việt</div>
            </div>
            <div className="account-tab">
              {/* <FontAwesomeIcon icon={faBell} /> */}
              <div>tinabc</div>
            </div>
          </div>
        </div>
      </div>

      <div className="search-container">
        <div className="abc">
          <div className="logo">
            <img
              className="img-logo"
              src="./images/shoppe-logo-header.png"
              alt=""
            />
          </div>
          <div className="search">
            <div className="input-container">
              <div className="input-abc">
                <input
                  className="input-search"
                  type="text"
                  placeholder="HUGGIES TUNG VOUCHER 500Đ"
                />
                <div className="search-icon">
                  <FontAwesomeIcon
                    className="icon-xyz"
                    icon={faMagnifyingGlass}
                  />
                </div>
              </div>
              <div className="suggested-container">
                <div className="suggeste-product">Kính Cường Lực</div>
                <div className="suggeste-product">Tai nghe</div>
                <div className="suggeste-product">Nước hoa</div>
                <div className="suggeste-product">Sáp</div>
              </div>
            </div>
          </div>
          <div className="cart-container">
            <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
