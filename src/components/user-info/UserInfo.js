import React from 'react';
import './UserInfo.scss';

export const UserInfo = () => {
    return (
        <div className="user-info">
            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" className="user-info-avatar rounded-circle" alt="user"
            />
            <div className="user-info-details">
                <span>Welcome </span>
                <span>Volodymyr</span>
            </div>
        </div>
    );
};