import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.scss'

const renderNavLink = (to, text) => (
    <NavLink to={to} activeClassName={styles.active}>
        {text}
    </NavLink>
)

const Header = memo(() => (
    <header className={styles.header}>
        {renderNavLink('/', 'Characters')}
        {renderNavLink('/episodes', 'Episodes')}
    </header>
))

export default Header
