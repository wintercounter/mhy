import '@storybook/components'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'

// Config
addParameters({
    options: {
        //panelPosition: 'right'
    }
})

// Decorators
addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(StoryRouter())

// Require all *.story.js file
const req = require.context('src', true, /\.?(story|stories|book)\.[jt]sx?$/)
configure(() => req.keys().forEach(req), module)
