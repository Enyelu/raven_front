import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";

export const sideBarData = [
  {
    title: "profile",
    path: "/hr/profile",
    icon: <HiIcons.HiUserCircle />,
    cName: "nav-text"
  },
  {
    title: "employees",
    path: "/hr/employees",
    icon: <IoIcons.IoIosPeople />,
    cName: "nav-text"
  },
  {
    title: "message employees",
    path: "/hr/message-employees",
    icon: <IoIcons.IoIosFolder />,
    cName: "nav-text"
  },
  {
    title: "change password",
    path: "/hr/change-password",
    icon: <GoIcons.GoKebabHorizontal />,
    cName: "nav-text"
  },
  {
    title: "employee",
    path: "/hr/employee",
    icon: <HiIcons.HiUser />,
    cName: "nav-text"
  }
];