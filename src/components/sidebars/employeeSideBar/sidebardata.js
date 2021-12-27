import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";

export const sidebardata = [
  {
    title: "profile",
    path: "/connect/employee/Profile",
    icon: <HiIcons.HiUserCircle />,
    cName: "nav-text"
  },
  {
    title: "contactHr",
    path: "/connect/employee/hiring-manager",
    icon: <IoIcons.IoIosPeople />,
    cName: "nav-text"
  },
  {
    title: "contact lineMG",
    path: "/connect/employee/line-manager",
    icon: <IoIcons.IoIosFolder />,
    cName: "nav-text"
  },
  {
    title: "change password",
    path: "/connect/employee/change-password",
    icon: <GoIcons.GoKebabHorizontal />,
    cName: "nav-text"
  }
];
