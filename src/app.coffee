_         = require "underscore"
Manager   = require "./lib/manager"
Queue     = require "./lib/queue"
eyes      = require "eyes"

class MatchMaker extends require("events").EventEmitter
  constructor: (@options)->
    @manager = new Manager(@options)
    @queues ||= []

module.exports = MatchMaker

