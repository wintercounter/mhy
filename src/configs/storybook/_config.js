import '@storybook/components'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'

// Config
addParameters({
    options: {
        //panelPosition: 'right'
    }
})

// Decorators
addDecorator(withKnobs)
addDecorator(StoryRouter())

// Import setup files
const importAll = r => r.keys().forEach(r)
importAll(require.context('src', true, /storybook\.setup\.[jt]sx?$/))

// Require all *.story.js file
const req = require.context('src', true, /\.?(story|stories|book)\.[jt]sx?$/)
configure(req, module)
