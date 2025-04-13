'use client'

import React, { useState } from 'react'
import Location from './Location'
import Searchbar from './Searchbar'
import Navs from './Navs'

function Header() {
    const [isNavVisible, setNavVisible] = useState(false);

    return (
        <div>
            <Location />
            <Searchbar setNavVisible={setNavVisible} />
            <Navs isNavVisible={isNavVisible} setNavVisible={setNavVisible} />
        </div>
    )
}

export default Header