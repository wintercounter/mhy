import React from 'react'
import { storiesOf } from '@storybook/react'

import { Episode } from '@components'

// Sections
const components = storiesOf('Episode', module)

components.add('Episode', () => <Episode />)
