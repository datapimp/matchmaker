(function() {
  var Queue, _,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  _ = require("underscore");

  Queue = (function(_super) {

    __extends(Queue, _super);

    function Queue(options) {
      this.options = options != null ? options : {};
      _.extend(this, this.options);
      this.items = [];
    }

    Queue.prototype.detect = function() {
      return _(this.items).detect.apply(this, arguments);
    };

    Queue.prototype.find = function() {
      return this.detect.apply(this, arguments);
    };

    Queue.prototype.select = function() {
      return _(this.items).select.apply(this, arguments);
    };

    Queue.prototype.inject = function() {
      return _(this.items).reduce.apply(this, arguments);
    };

    Queue.prototype.each = function() {
      return _(this.items).each.apply(this, arguments);
    };

    Queue.prototype.map = function() {
      return _(this.items).map.apply(this, arguments);
    };

    Queue.prototype.collect = function() {
      return this.map.apply(this, arguments);
    };

    Queue.prototype.first = function() {
      return _(this.items).first();
    };

    Queue.prototype.last = function() {
      return _(this.items).last();
    };

    Queue.prototype.at = function(index) {
      return this.items[index];
    };

    return Queue;

  })(require("events").EventEmitter);

  module.exports = Queue;

}).call(this);
