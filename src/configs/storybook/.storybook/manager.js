// Addons commented out does not need to be registered
import '@storybook/addon-knobs/register'
import '@storybook/addon-actions/register'
import '@storybook/addon-events/register'
import '@storybook/addon-links/register'

import { themes } from '@storybook/theming/create'
import { addons } from '@storybook/addons'

addons.setConfig({
    theme: themes.dark
})

// Import setup files
const importAll = r => r.keys().forEach(r)
importAll(require.context('@', true, /storybook\.manager\.[jt]sx?$/))
