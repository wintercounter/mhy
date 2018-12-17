import { loadConfig } from '../../util'

export default loadConfig(
    'gitignore',
    `.idea
.vscode
node_modules
dist
build
.babelrc
prettier.json
jest.config.js
webpack.config.js`
)
