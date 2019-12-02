import React, { memo } from 'react'

import { Header } from '@/components'
import styles from './styles.scss'

const Index = memo(({ children }) => (
    <main className={styles.main}>
        <Header />
        <section className={styles.content}>{children}</section>
        <Header />
        {/* FOOTER */}
    </main>
))

export default Index
