import React, { useEffect, useState } from 'react';
import styles from '../EditChapter.module.css';

type EditChapterNameProps = {
    chapterName: string | null;
}

const EditChapterName = ( props: EditChapterNameProps ) => {
    const { chapterName } = props;
    const handleChapterNameChange = () => {
    }
    return (
        <div className={styles.editChapterNameContainer}>
            <input value={chapterName || ''} />
            <button onClick={handleChapterNameChange}>Edit Chapter Name</button>
        </div>
    )
}

export default EditChapterName;
