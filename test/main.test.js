QUnit.module('myFunction MODULE', {})

QUnit.test('TEST area', assert => {

  assert.equal(area(5, 6, 7), 14.696938456699069, 'true')
  assert.equal(area(-3, -3, -1), 1.479019945774904, 'equal')
  assert.notEqual(area(-6, 6, 0), 1, 'notequal')
  assert.throws(area(-6, 6, 1), null, 'exception')
  assert.notEqual(area(5, 4, 1), 1, 'false')

});
