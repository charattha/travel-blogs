import Link from "next/link";
import "./MainNavigation.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import { useState } from "react";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <p className="title">Travel Blogs</p>
      <div
        className="menu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isOpen ? "open" : ""}>
        <li>
          <Link href="/">Blogs</Link>
        </li>
        <li>
          <Link href="/new-meetup">Add New Place</Link>
        </li>
        <li>
          <Link href="/favorites">
            Favorite
            <span className="badge">{favoritesCtx.totalFavorites}</span>
          </Link>
        </li>
      </ul>
    </nav>

    // <header className={classes.header}>
    //   <div className={classes.logo}>Travel Blog</div>
    //   <nav className={classes.navbar}>
    //     <div
    //       className={classes.menu}
    //       onClick={() => {
    //         setIsOpen(!isOpen);
    //       }}
    //     >
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </div>
    //     <ul>
    //       <li>
    //         <Link to="/">All Blogs</Link>
    //       </li>
    //       <li>
    //         <Link to="/new-meetup">Add New Blogs</Link>
    //       </li>
    //       <li>
    //         <Link to="/favorites">
    //           Favorite
    //           <span className={classes.badge}>
    //             {favoritesCtx.totalFavorites}
    //           </span>
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default MainNavigation;
