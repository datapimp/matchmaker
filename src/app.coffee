_         = require "underscore"
Manager   = require "./lib/manager"
Queue     = require "./lib/queue"
eyes      = require "eyes"

class MatchMaker extends require("events").EventEmitter
  constructor: (@options)->
    @manager = new Manager(@options)
    @queues ||= []
    @strategies = []

  strategy: (strategy)->
    @strategies.push( strategy )

    @strategies = _( @strategies ).sortBy (strategy)->
      strategy.priority || _( @strategies ).indexOf( strategy )

module.exports = MatchMaker

