_ = require "underscore"


class Queue extends require("events").EventEmitter
  constructor: (@options={})->
    _.extend @, @options

    @items = []

  detect: ()->
    _( @items ).detect.apply(@, arguments)

  find: ()->
    @detect.apply(@, arguments)

  select: ()->
    _( @items ).select.apply(@, arguments)

  inject: ()->
    _( @items ).reduce.apply(@, arguments)

  each: ()->
    _( @items ).each.apply(@, arguments)

  map: ()->
    _( @items ).map.apply(@, arguments)

  collect: ()->
    @map.apply(@, arguments)

  first: ()->
    _( @items ).first()

  last: ()->
    _( @items ).last()

  at: (index)->
    @items[ index ]

module.exports = Queue