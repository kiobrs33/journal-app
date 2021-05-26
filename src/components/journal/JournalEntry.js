import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id, date, title, body, url}) => {

    const dispatch = useDispatch();

    const noteDate = moment(date);

    const handleEntryClick = () => {
        const newNote = {
            title,
            body,
            date,
            url
        }
        dispatch(activeNote(id, newNote ));
    }

    return (
        <div 
            className="journal__entry pointer animate__animated animate__bounceInLeft"
            onClick={handleEntryClick}
        >
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage:`url(${url})`
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">

                <span> {noteDate.format('dddd')} </span>
                <h4>{noteDate.format('Do')}</h4>
                
            </div>

        </div>
    )
}
