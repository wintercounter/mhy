import '@storybook/components'
import { addons } from '@storybook/addons'
import StoryRouter from 'storybook-react-router'
import { isFunction } from 'lodash'

module._StorybookPreserveDecorators = true

export const parameters = {}

addons.setConfig({
    sidebar: {
        showRoots: true
    }
})

export const decorators = [StoryRouter()]

export const globalTypes = {}

// Import setup files
const LoadedModules = new WeakSet()
const importAll = r =>
    r.keys().forEach(m => {
        const d = r(m)
        if (LoadedModules.has(d)) return
        LoadedModules.add(d)

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
