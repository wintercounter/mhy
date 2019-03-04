import React, { memo } from 'react'

import { Header } from '@/components'
import { main, content } from './styles.scss'

const Index = memo(({ children }) => (
    <main className={main}>
        <Header />
        <section className={content}>{children}</section>
        <Header />
        {/* FOOTER */}
    </main>
))

export default Index
