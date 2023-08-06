import React from 'react';
import styles from './Sidebar.module.css';
import { ArrowRightCircleFill } from "react-bootstrap-icons";

export type MenuItem = {
    itemName: string,
    setClickedMenuItem: () => void,
};

export type ISidebarProps = {
    sidebarMenuItems: MenuItem[],
    headerName: string,
    collapsable?: boolean,
    isCollapsed?: boolean,
    toggleSidebar?: () => void,
}


const Sidebar = (props: ISidebarProps) => {
    const {sidebarMenuItems, headerName, collapsable, isCollapsed, toggleSidebar} = props;
    return (
        <nav className={`${styles.sidebarContainer} ${isCollapsed && styles.close}`}>
            <header>
                <h1 className={styles.headerName}>{headerName}</h1>
                {collapsable && <ArrowRightCircleFill onClick={toggleSidebar} className={`${styles.toggle}`}/>}
            </header>
            <div className={styles.menuBar}>
                {sidebarMenuItems.map(menuItem => 
                    <div className={styles.menuItem} onClick={menuItem.setClickedMenuItem}>
                        <span className={styles.menuItemText}>{menuItem.itemName}</span>
                    </div>
                )}                
            </div>
        </nav>
    );
}

export default Sidebar;