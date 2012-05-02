(function() {
  var Manager, _,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  _ = require("underscore");

  Manager = (function(_super) {

    __extends(Manager, _super);

    function Manager(options) {
      this.options = options != null ? options : {};
      _.extend(this, this.options);
      this._queues = {};
      this._scope || (this._scope = "all");
    }

    Manager.prototype.currentScope = function() {
      var _base, _name;
      return (_base = this._queues)[_name = this.scope()] || (_base[_name] = {});
    };

    Manager.prototype.scope = function(set) {
      if (set != null) this._scope = set;
      return this._scope;
    };

    Manager.prototype.add = function(identifier, queue, options) {
      if (options == null) options = {};
      if (identifier instanceof Queue) {
        identifier = identifier.name || _.uniqueId("queue");
        queue = identifier;
      }
      this.scope()[identifier] = queue;
      return this;
    };

    Manager.prototype.get = function(identifier) {
      return this.scope()[identifier];
    };

    module.exports = Manager;

    return Manager;

  })(require("events").EventEmitter);

}).call(this);
