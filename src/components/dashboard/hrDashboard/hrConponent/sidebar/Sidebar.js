import React from "react"
import "./sidebar.css";
import {
  Person,
  Group,
  Assignment,
  Settings,
  Report,
  LocalOffer,
  MailOutline,
  WorkOutline,
} from "@material-ui/icons";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">

      <Link to="/profile" className="link">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Person className="sidebarIcon" />
              Profile
            </li>
          </ul>
        </div>
        </Link>

        <Link to="/employees" className="link">
        <div className="sidebarMenu">
          <ul className="sidebarList">
              <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                Employees
              </li>
          </ul>
        </div>
        </Link>

        <Link to="/jobOffering" className="link">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LocalOffer className="sidebarIcon" />
              Job Offering
            </li>
          </ul>
        </div>
        </Link>

        <Link to="/onboarding" className="link">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Onboarding
            </li>
          </ul>
        </div>
        </Link>

        <Link to="/workFlow" className="link">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Assignment className="sidebarIcon" />
              Workflow
            </li>
          </ul>
        </div>
        </Link>

        <Link to="/report" className="link">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        </Link>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              System Settings
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}