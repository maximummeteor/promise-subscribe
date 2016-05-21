import { Tinytest } from 'meteor/tinytest';
import { Mongo } from 'meteor/mongo';
import { Random } from 'meteor/random';
import { promiseSubscribe } from 'meteor/maximum:promise-subscribe';

if (Meteor.isClient) {
  Tinytest.addAsync('promise-subscribe - resolve', (test, next) => {
    const collection = new Mongo.Collection('test')
    promiseSubscribe.call(Meteor, 'test', 1, 2, 3).then((subscription) => {
      test.equal(subscription.name, 'test')
      const item = collection.findOne()
      test.equal(item.arg1, 1)
      test.equal(item.arg2, 2)
      test.equal(item.arg3, 3)
      next()
    })
  })

  Tinytest.addAsync('promise-subscribe - reject', (test, next) => {
    promiseSubscribe.call(Meteor, 'error').catch((err) => {
      test.equal(err.error, 404)
      next()
    })
  })
}
if (Meteor.isServer) {
  Meteor.publish('test', function test(arg1, arg2, arg3) {
    this.added('test', Random.id(), { arg1, arg2, arg3 })
    return this.ready()
  })
}
