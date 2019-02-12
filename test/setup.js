import path from 'path'
import fs from 'fs'
import { spawn } from 'promisify-child-process'
import rimraf from 'rimraf'

global.spawn = function(cmd = [], cwd) {
    return spawn('mhyd', cmd, { encoding: 'utf8', cwd, shell: true })
}

global.fs = fs
global.path = path
global.rimraf = rimraf
