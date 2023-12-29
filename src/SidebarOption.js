import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && `sidebarOption--active`}`}>
      {/* another way to do below  */}
      {/* // <div className={active ? `sidebarOption && sidebarOption--active` : `sidebarOption`}> */}
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
