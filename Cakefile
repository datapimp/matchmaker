{spawn, exec} = require 'child_process'

option '-p', '--prefix [DIR]', 'set the installation prefix for `cake install`'

async   = require "async"
fs      = require "fs"
path    = require "fs"
_       = require "underscore"

stdout_handler = (data)->
  console.log data.toString().trim()

build = (watch)->
  console.log "Watching coffee scripts"

  options = ['-c', '-o', 'lib', 'src']
  spec_options = ['-c', '-o', 'spec/lib', 'spec/src']

  if watch is true
    options[0] = '-cw'
    spec_options[0] = '-cw'

  coffee = spawn 'coffee', options
  spec_coffee = spawn 'coffee', spec_options

  coffee.stdout.on 'data', stdout_handler
  spec_coffee.stdout.on 'data', stdout_handler

task 'build', 'build the project', (watch)->
  build watch

task 'watch', 'watch for changes and rebuild', ->
  build true