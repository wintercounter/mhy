import '@storybook/components'
import { addons } from '@storybook/addons'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'
import { isFunction } from 'lodash'

module._StorybookPreserveDecorators = true

export const parameters = {}

addons.setConfig({
    options: {
        showRoots: true
    }
})

export const decorators = [withKnobs, StoryRouter()]

export const globalTypes = {}

// Import setup files
const importAll = r =>
    r.keys().forEach(m => {
        const mod = r(m)

        if (isFunction(mod.parameters)) {
            mod.parameters(parameters)
        }

        if (isFunction(mod.decorators)) {
            mod.decorators(decorators)
        }

        if (isFunction(mod.globalTypes)) {
            mod.globalTypes(globalTypes)
        }
    })
importAll(require.context('@', true, /storybook\.preview\.[jt]sx?$/))
