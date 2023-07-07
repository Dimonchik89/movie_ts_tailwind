import Image from 'next/image'
import React from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderMobileMenu from './HeaderMobileMenu';


interface IHeaderProps {
    toggleSearch: () => void;
    closeSearch: () => void;
    show: boolean;
}

const Header: React.FC<IHeaderProps> = ({toggleSearch, closeSearch, show}) => {

    const searchIcon = show ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-lightBlue cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-lightBlue cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>

    return (
        <header className="h-16 bg-darkBlue">
            <div className="_container flex items-center justify-between h-full">
                <HeaderMenu closeSearch={closeSearch}/>
                <HeaderMobileMenu/>
                <Image
                    src={"./logo_sm.svg"}
                    alt='logo'
                    width="55"
                    height="40"
                    className="block xl:hidden"
                />
                <div className='flex'>
                    <button onClick={toggleSearch}>
                        {searchIcon}
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header;