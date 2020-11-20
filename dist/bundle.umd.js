;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
      ? define(factory)
      : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
        (global.reactjsspinners = factory()))
})(this, function () {
  'use strict'

  const helloWorld = () => {
    console.log('hello world')
  }

  return helloWorld
})
