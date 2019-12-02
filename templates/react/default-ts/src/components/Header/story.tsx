import '@core/styles.global.scss'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import { Header } from '@/components'

// Sections
const components = storiesOf('Header', module)

components.add('Header1', () => <Header />)

components.add('div2', () => (
    <button
        aria-label="Icon"
        type="button"
        onClick={action('handleClick')}
    >
        {text('Content', 'exampleIcon')}
    </button>
))
