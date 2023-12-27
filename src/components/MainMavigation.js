import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              end={true}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;