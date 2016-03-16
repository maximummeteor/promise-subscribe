export const promiseSubscribe = function promiseSubscribe(name, ...args) {
  return new Promise((resolve, reject) => {
    this.subscribe.apply(Meteor, [name].concat(args).concat([{
      onStop: (err) => err && reject(err),
      onReady: resolve,
    }]))
  })
}
