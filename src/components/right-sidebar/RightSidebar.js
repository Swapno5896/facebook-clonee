import React from 'react';
import Contacts from './Contacts/Contacts';
import Sponsored from './Sponsored/Sponsored';

const RightSidebar = () => {
    return (
        <div>
            <Sponsored></Sponsored>
            <hr />
            <Contacts></Contacts>
        </div>
    );
};

export default RightSidebar;