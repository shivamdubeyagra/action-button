import React, { useEffect, useState } from "react";
import "./MyButton.css";
import {
  UserCircle,
  Trash,
  Info,
  Heart,
  PencilSimple,
} from "@phosphor-icons/react";
import PropTypes from "prop-types";

const MyButton = ({
  text,
  icon,
  displayType,
  type,
  status,
  size,
  onClickFunc,
  ...args
}) => {
  let IconComponent;

  switch (icon) {
    case "UserCircle":
      IconComponent = UserCircle;
      break;
    case "PencilSimple":
      IconComponent = PencilSimple;
      break;
    case "Info":
      IconComponent = Info;
      break;
    case "Heart":
      IconComponent = Heart;
      break;
    case "Trash":
      IconComponent = Trash;
      break;
    default:
      IconComponent = UserCircle;
  }

  let textOnly = displayType === "textOnly" ? "textOnly" : "";
  return (
    <>
      <button
        className={`${displayType === "iconOnly" ? "iconOnly" : ""} ${size} ${type} ${status}`}
      >
        <IconComponent className={textOnly} />
        <span>{text}</span>
      </button>
    </>
  );
};

export default MyButton;

MyButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.oneOf([
    "UserCircle",
    "Heart",
    "PencilSimple",
    "Info",
    "Trash",
  ]),
  size: PropTypes.oneOf(["Default", "Small", "X-Small"]),
  type: PropTypes.oneOf(["DefaultType", "Neutral", "Reverse"]),
  status: PropTypes.oneOf(["DefaultStatus", "Hover", "Disabled"]),
  displayType: PropTypes.oneOf(["textOnly", "iconWithText", "iconOnly"]),
};
