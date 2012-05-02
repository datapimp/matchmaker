(function() {
  var Manager, MatchMaker, Queue, eyes, _,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  _ = require("underscore");

  Manager = require("./lib/manager");

  Queue = require("./lib/queue");

  eyes = require("eyes");

  MatchMaker = (function(_super) {

    __extends(MatchMaker, _super);

    function MatchMaker(options) {
      this.options = options;
      this.manager = new Manager(this.options);
      this.queues || (this.queues = []);
    }

    return MatchMaker;

  })(require("events").EventEmitter);

  module.exports = MatchMaker;

}).call(this);
