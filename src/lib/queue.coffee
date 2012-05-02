_ = require "underscore"


class Queue extends require("events").EventEmitter
  constructor: (@options={})->
    _.extend @, @options

    @items = []

  sortMethod: (item)->
    item.added_at * -1

  add: (items)->
    items = [items] unless _.isArray(items)

    _( items ).each (item)=>
      @items.push
        item: item
        added_at: new Date().valueOf()

    @items = _( @items ).sortBy @sortMethod

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