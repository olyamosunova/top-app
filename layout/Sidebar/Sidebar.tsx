import React from "react";
import {SidebarProps} from "./Sidebar.props";
import styles from "./Header.module.css";
import cn from "classnames";

export const Sidebar = (
    {...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};
