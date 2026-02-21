import React from "react";
import Button from "@mui/material/Button";
import "./Sidebar.css";
import { FaAngleRight } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" >
          <Button className="w-100">
            <span className="icon">
              <MdDashboard />{" "}
            </span>
            Dashboard
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/" >
          <Button className="w-100">
            <span className="icon">
              <FaProductHunt/>{" "}
            </span>
            Products
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Button className="w-100">
            <span className="icon">
              <IoCart/>{" "}
            </span>
            Orders
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Button className="w-100">
            <span className="icon">
              <MdMessage/>{" "}
            </span>
            Messages
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Button className="w-100">
            <span className="icon">
              <FaBell/>{" "}
            </span>
            Notifications
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
         
          <Button className="w-100">
            <span className="icon">
              <IoSettings/>{" "}
            </span>
            Setting
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
           </Link>
        </li>
        <li>
          <Link to="/">
          <Button className="w-100">
            <span className="icon">
              <IoSettings/>{" "}
            </span>
            Setting
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Button className="w-100">
            <span className="icon">
              <IoSettings/>{" "}
            </span>
            Setting
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="">
          <Button className="w-100">
            <span className="icon">
              <IoSettings/>{" "}
            </span>
            Setting
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Button className="w-100">
            <span className="icon">
              <IoSettings/>{" "}
            </span>
            Setting
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Button className="w-100">
            <span className="icon">
              <IoSettings/>{" "}
            </span>
            Setting
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="">
          <Button className="w-100">
            <span className="icon">
              <IoSettings/>{" "}
            </span>
            Setting
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="">
          <Button className="w-100">
            <span className="icon">
              <IoSettings/>{" "}
            </span>
            Setting
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Button className="w-100">
            <span className="icon">
              <IoSettings/>{" "}
            </span>
            Setting
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
          <Button className="w-100 ">
            <span className="icon">
              <IoSettings/>{" "}
            </span>
            Setting
            <span className="arrow ">
              <FaAngleRight />
            </span>
          </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
