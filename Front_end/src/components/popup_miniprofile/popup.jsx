import React from 'react'
import './popup.css';

export default function popUpMiniProfile({open}) {
    if (!open) return null;

    return (
        <div>
            <div className="profile">
                
            </div>
        </div>
    )
}