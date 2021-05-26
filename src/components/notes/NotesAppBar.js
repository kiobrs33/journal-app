import React from 'react';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
    const { active } = useSelector(state => state.notes)
    const dispatch = useDispatch();
    const date = new Date().getTime();
    const noteDate = moment(date);

    const handleSave = () => {
        dispatch(startSaveNote(active));
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const files = e.target.files;
        if(files){
            dispatch(startUploading(files[0]));
        }
    }

    return (
        <div className="notes-appbar">
            <h5>{`${noteDate.format('Do')} ${noteDate.format('dddd')}`}</h5>

            <input
                type="file"
                style={{
                    display: 'none'
                }}
                id="fileSelector"
                onChange={handleFileChange}
            />

            <div>
                <button 
                    className="btn"
                    onClick={handlePictureClick}
                >
                    Picture
                </button>
                <button 
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
