import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";

export const sidebardata = [
  {
    title: "profile",
    path: "/connect/linemanager/profile",
    icon: <HiIcons.HiUserCircle />,
    cName: "nav-text"
  },
  {
    title: "employees",
    path: "/connect/linemanager/employees",
    icon: <IoIcons.IoIosPeople />,
    cName: "nav-text"
  },
  {
    title: "message employees",
    path: "/connect/linemanager/message-employees",
    icon: <IoIcons.IoIosFolder />,
    cName: "nav-text"
  },
  {
    title: "change password",
    path: "/connect/linemanager/change-passward",
    icon: <GoIcons.GoKebabHorizontal />,
    cName: "nav-text"
  },
  {
    title: "employee",
    path: "/connect/linemanager/message-employee",
    icon: <HiIcons.HiUser />,
    cName: "nav-text"
  }
];
