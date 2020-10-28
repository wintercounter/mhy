import React, { memo } from 'react'
import { node } from 'prop-types'

import { Header } from '@/components'
import styles from './styles.module.scss'

const Index = memo(({ children }) => (
    <main className={styles.main}>
        <Header />
        <section className={styles.content}>{children}</section>
        <Header />
        {/* FOOTER */}
    </main>
))

Index.propTypes = {
    children: node.isRequired
}

export default Index
