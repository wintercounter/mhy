import 'babel-polyfill'
import '@storybook/components'
import { configure, addDecorator } from '@storybook/react'
import { withInfo, setDefaults } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'
import { merge } from 'lodash-es'

// Decorators
addDecorator((story, context) => withInfo()(story)(context))
addDecorator(withKnobs)
addDecorator(StoryRouter())

// Configurations

setDefaults({
    maxPropsIntoLine: 1,
    inline: true,
    styles: defaultStyles =>
        merge({}, defaultStyles, {
            header: {
                body: {
                    marginBottom: '0',
                    paddingTop: '0',
                    borderBottom: 'none'
                }
            },
            infoStory: {
                marginBottom: '20px'
            },
            infoBody: {
                marginTop: '0',
                marginBottom: '20px',
                padding: '40px'
            },
            source: {
                h1: {
                    margin: '20px 0',
                    padding: '0 0 10px'
                }
            }
        })
})

// Require all *.story.js file
const req = require.context('src', true, /\.?(story|stories|book)\.[jt]sx?$/)
configure(() => req.keys().forEach(req), module)
