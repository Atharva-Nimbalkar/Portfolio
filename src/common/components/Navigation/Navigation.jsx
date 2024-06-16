import {NavLink} from 'react-router-dom';
import './Navigation.scss';
import Logo from '../../../assets/images/logo.png';
const Navigation=()=>{
    const closeNav=()=>{
        const checkbox=document.getElementById('nav-toggle');
        checkbox.checked=!checkbox.checked;
    };

    return(
        <nav id='navbar'>
      <div className="nav__brand">
        <NavLink to="/">
          <img src={Logo} alt="atharva logo" />
        </NavLink>
      </div>
      <div className="nav__btn">
        <input
          type="checkbox"
          className="nav__btn__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="nav__btn__button">
          <span className="nav__btn__icon">&nbsp;</span>
        </label>
        <div className="nav__btn__background">&nbsp;</div>
        <div className="nav__btn__nav">
          <ul className="nav__btn__list">
            <li className="nav__btn__item" onClick={closeNav}>
              <NavLink
                to="/"
                style={({ isActive }) => ({ color: isActive && '#ff5403' })}
                className="nav__btn__link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <NavLink
                to="/work"
                style={({ isActive }) => ({ color: isActive && '#ff5403' })}
                className="nav__btn__link"
              >
                Work
              </NavLink>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <NavLink
                to="/blogs"
                style={({ isActive }) => ({ color: isActive && '#ff5403' })}
                className="nav__btn__link"
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <NavLink
                to="/about"
                style={({ isActive }) => ({ color: isActive && '#ff5403' })}
                className="nav__btn__link"
              >
                About&nbsp;Me
              </NavLink>
            </li>
            <li className="nav__btn__item" onClick={closeNav}>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({ color: isActive && '#ff5403' })}
                className="nav__btn__link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav__links">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive && '#ff5403' })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              style={({ isActive }) => ({ color: isActive && '#ff5403' })}
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              style={({ isActive }) => ({ color: isActive && '#ff5403' })}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({ color: isActive && '#ff5403' })}
            >
              About&nbsp;Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({ color: isActive && '#ff5403' })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
        </nav>
    )
}

export default Navigation;