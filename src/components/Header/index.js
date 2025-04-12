import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="data:image/png;base64,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"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
                {renderCartItemsCount()}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-img"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
              {renderCartItemsCount()}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
