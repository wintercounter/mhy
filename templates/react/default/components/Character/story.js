import React from 'react'
import { storiesOf } from '@/storybook/react'

import { Character } from '@/components'

// Sections
const components = storiesOf('Character', module)

components.add('Character', () => <Character />)
