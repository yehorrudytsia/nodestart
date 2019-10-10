'use strict';

const EventEmitter = function() {
  this.events = {};
};

EventEmitter.prototype.on = function(name, func) {
  const event = this.events[name];
  if (event) event.push(func);
  else this.events[name] = [func];
};

EventEmitter.prototype.emit = function(name, ...data) {
  const event = this.events[name];
  if (event) event.forEach(func => func(...data));
};

const EEmitter = new EventEmitter();

EEmitter.on('event', data => {
  console.dir(data);
});

EEmitter.emit('event', { data: -110 });
