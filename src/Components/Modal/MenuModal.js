import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RiCloseCircleLine } from "react-icons/ri";
import { navbarLinks } from "../../data/projectData";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StyledMenuModal from "./style/MenuModal.style";
import * as modalsSlice from "../../redux/features/modals/modalsSlice";

const MenuModal = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isMenuModal } = useSelector((store) => store.modals);

  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  React.useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth > 1100) {
        closeNavbarModal();
      }
    };

    window.addEventListener("resize", checkWindowWidth);
    return () => window.removeEventListener("resize", checkWindowWidth);
  });

  const closeNavbarModal = () => {
    dispatch(modalsSlice.handleIsModal(false));
    dispatch(modalsSlice.handleIsMenuModal(false));
  };

  const handleAccountClick = () => {
    dispatch(modalsSlice.handleIsMenuModal(false));
    dispatch(modalsSlice.handleIsAuthModal(true));
  };

  const handleLinkClick = () => {
    closeNavbarModal();
  };

  const scrollToNowPlaying = () => {
    closeNavbarModal();

    const timeout = setTimeout(() => {
      props.nowPlayingContainer.current.scrollIntoView({ behavior: "smooth" });
    }, 400);
    return () => clearTimeout(timeout);
  };

  const activeLink = (path) => {
    if (
      (path !== "/" && location.pathname.slice(0, path.length) === path) ||
      (path === "/" && location.pathname.slice(0, 11) === "/nowPlaying")
    )
      return "var(--primary-red-clr)";
    else return "#fff";
  };

  const myAccountLink = (path, title) => {
    if (isUser) {
      return (
        <Link
          to={path}
          style={{
            color: activeLink(path),
          }}
          onClick={handleLinkClick}
        >
          {title}
        </Link>
      );
    } else {
      return <p onClick={handleAccountClick}>{title}</p>;
    }
  };

  return (
    <StyledMenuModal isMenuModal={isMenuModal}>
      <div className="menu">
        <p>Menu</p>
        <RiCloseCircleLine onClick={closeNavbarModal} />
      </div>

      <ul>
        {navbarLinks.map((link, index) => {
          const { title, path } = link;
          return (
            <li key={index}>
              {path !== "/myAccount" ? (
                <Link
                  to={path}
                  onClick={path === "/" ? scrollToNowPlaying : handleLinkClick}
                  style={{
                    color: activeLink(path),
                  }}
                >
                  {title}
                </Link>
              ) : (
                myAccountLink(path, title)
              )}
            </li>
          );
        })}
      </ul>
    </StyledMenuModal>
  );
};

export default MenuModal;
