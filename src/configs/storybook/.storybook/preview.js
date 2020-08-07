import '@storybook/components'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'

module._StorybookPreserveDecorators = true

export const parameters = {
    options: {
        showRoots: true
    }
}

// Decorators
addDecorator(withKnobs)
addDecorator(StoryRouter())

// Import setup files
const importAll = r => r.keys().forEach(r)
importAll(require.context('@', true, /storybook\.preview\.[jt]sx?$/))

// Require all *.story.js file
const req = require.context('@', true, /\.?(story|stories|book)\.([jt]sx?|mdx)$/)
configure(req, module)
