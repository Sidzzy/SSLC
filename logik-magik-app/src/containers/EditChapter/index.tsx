import React, { useEffect, useState } from 'react';
import ChapterContent from './components/ChapterContent';
import Assignment from './components/Assignment';
import Sidebar from '../../components/Sidebar/Sidebar';
import { LogikMagikAppName } from '../../constants/appConstants';
import { MenuItems } from '../../constants/editChapterConstants';
import EditChapterName from './components/EditChapterName';
import styles from './EditChapter.module.css';

const EditChapter = (props: any) => {
    const [clickedMenuItem, setClickedMenuItem] = useState(MenuItems.ChapterContent);
    const [isCollapsed, setIsCollapsed] = useState(false);
    /*
        TODO: get chapter id instead of chapter name and fetch chapter details thorugh Id
        Update the chapter content through this Id and don't update the Id.
    */
    const query = new URLSearchParams(props.location.search);
    const chapterName = query.get('chapter');
    const sidebarMenuItems = [
        {
            itemName: MenuItems.ChapterContent,
            setClickedMenuItem: () => setClickedMenuItem(MenuItems.ChapterContent),
        },
        {
            itemName: MenuItems.Assignment,
            setClickedMenuItem: () => setClickedMenuItem(MenuItems.Assignment),
        },
        {
            itemName: MenuItems.ChapterName,
            setClickedMenuItem: () => setClickedMenuItem(MenuItems.ChapterName),
        }
    ];

    const toggleSidebar = () => {
        setIsCollapsed((isCollapsed) => !isCollapsed);
    }
    
    return (
        <div>
            <Sidebar
                sidebarMenuItems={sidebarMenuItems}
                headerName={LogikMagikAppName}
                collapsable={true}
                isCollapsed={isCollapsed}
                toggleSidebar={toggleSidebar}
            />
            <div className={`${styles.editorBody} ${isCollapsed && styles.sidebarClose}`}>
                {clickedMenuItem === MenuItems.ChapterContent && <ChapterContent />}
                {clickedMenuItem === MenuItems.Assignment && <Assignment />}
                {clickedMenuItem === MenuItems.ChapterName && <EditChapterName chapterName={chapterName} />}
            </div>
        </div>
    );

}

export default EditChapter;