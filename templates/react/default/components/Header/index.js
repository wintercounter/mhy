import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { header, active } from './styles.scss'

const ACTIVE_CLASSNAME = active

const renderNavLink = (to, text) => (
    <NavLink to={to} activeClassName={ACTIVE_CLASSNAME} exact>
        {text}
    </NavLink>
)

const Header = memo(() => (
    <header className={header}>
        {renderNavLink('/', 'Characters')}
        {renderNavLink('/episodes', 'Episodes')}
    </header>
))

export default Header
