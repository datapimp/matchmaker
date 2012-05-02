_ = require "underscore"

class Manager extends require("events").EventEmitter
  constructor: (@options={})->
    _.extend @, @options

    @_queues = {}
    @_scope ||= "all"

  currentScope: ()->
    @_queues[ @scope() ] ||= {}

  scope: (set)->
    @_scope = set if set?
    @_scope

  add: (identifier, queue, options={})->
    if identifier instanceof Queue
      identifier  = identifier.name || _.uniqueId("queue")
      queue       = identifier

    @scope()[identifier] = queue

    @

  get: (identifier)->
    @scope()[identifier]

  module.exports = Manager
