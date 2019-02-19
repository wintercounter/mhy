import React, { memo } from 'react'
import { node } from 'prop-types'

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

Index.propTypes = {
    children: node.isRequired
}

export default Index
