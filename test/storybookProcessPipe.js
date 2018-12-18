const { spawn } = require('child_process')

console
    .log
    //require('C:\\Work\\nodejs\\node_modules\\@mhy\\mhy\\node_modules\\@mhy\\config\\dist\\storybook\\.storybook\\webpack.config.js')
    ()

const p = spawn(
    'node',
    [
        //'C:\\Work\\Repos\\mhy\\node_modules\\@storybook\\react\\bin\\index.js',
        'C:\\Work\\nodejs\\node_modules\\@mhy\\mhy\\node_modules\\@storybook\\react\\bin\\index.js',
        '--port',
        9000,
        '--host',
        'localhost',
        '--config-dir',
        //'C:\\Work\\Repos\\mhy\\dist\\config\\storybook\\.storybook'
        'C:\\Work\\nodejs\\node_modules\\@mhy\\mhy\\node_modules\\@mhy\\config\\dist\\storybook\\.storybook'
    ],
    {
        shell: true,
        stdio: 'pipe'
    }
)

p.stdout && p.stdout.on('data', cb)
p.stderr && p.stderr.on('error', cb)
p.stderr && p.stderr.on('data', cb)

function cb(line) {
    console.log(line.toString('utf8').trim())
}
