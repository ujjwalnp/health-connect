import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <>
            <div className=" items-center justify-center">
                <div className="flex items-center border-b py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="Full name" />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                       <SearchIcon/>
                    </button>
                </div>
            </div>
        </>
    );
}