import React from 'react';
import HashLoader from "react-spinners/HashLoader";
import './Loading.css';

const Loading = ({handleLoading}) => {
    return (
        <div className='loading'>
            <div className='flex h-screen'>
                <div className="m-auto">
                    <HashLoader 
                    size={50}
                    color={'#169CF1'}
                    loading={()=>handleLoading()}
                    />
                </div>
            </div>
        </div>
    );
}

export default Loading;
