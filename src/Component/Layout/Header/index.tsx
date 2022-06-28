import { NavLink } from "react-router-dom"
import className from "classnames/bind"
// @ts-ignore
 import style from './Header.module.scss'
import { Routes } from "../../Config/index"

 const cx = className.bind(style);

export const Header = () => {
  return (
    <div className={cx("swapper")}>
      <ul className={cx("header__list")}>
        <NavLink
          to={Routes.home}
          className={(nav) =>
            cx("header__list--item", { active: nav.isActive })
          }
        >
          Home
        </NavLink>
        <NavLink
          to={Routes.dog}
          className={(nav) =>
            cx("header__list--item", { active: nav.isActive })
          }
        >
          Dogs
        </NavLink>
        <NavLink
          to={Routes.cart}
          className={(nav) =>
            cx("header__list--item", { active: nav.isActive })
          }
        >
          Cart
        </NavLink>
      </ul>
    </div>
  );
};
