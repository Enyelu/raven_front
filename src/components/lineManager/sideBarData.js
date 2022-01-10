import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";

export const sidebardata = [
  {
    title: "profile",
    path: "/linemanager/profile",
    icon: <HiIcons.HiUserCircle />,
    cName: "nav-text"
  },
  {
    title: "employees",
    path: "/linemanager/employees",
    icon: <IoIcons.IoIosPeople />,
    cName: "nav-text"
  },
  {
    title: "message employees",
    path: "/linemanager/message-employees",
    icon: <IoIcons.IoIosFolder />,
    cName: "nav-text"
  },
  {
    title: "change password",
    path: "/linemanager/change-passward",
    icon: <GoIcons.GoKebabHorizontal />,
    cName: "nav-text"
  },
  {
    title: "employee",
    path: "/linemanager/message-employee",
    icon: <HiIcons.HiUser />,
    cName: "nav-text"
  }
];
