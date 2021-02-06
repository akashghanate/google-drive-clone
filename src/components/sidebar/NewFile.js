import React from 'react';
import AddIcon from '@material-ui/icons/Add';

const NewFile = () => {
    return (
        <div className='newFile'>
            <div className='newFile_container'>
                {/* plus icon */}
                <AddIcon />
                <p>New</p>
            </div>
        </div>
    )
}

export default NewFile
