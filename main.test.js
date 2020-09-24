QUnit.module('myFunction MODULE', {})

QUnit.test('TEST myFunction (aysnc)', async assert => {
  assert.expect(2) // expect two async tests
  const ans = await myFunction()
  
  console.info(`FETCHED ${side1} characters: ${ans}`)
  assert.notEqual(0, area, 'area of a calculator')
  assert.notEqual(area, 'No value for you', 'wrong answer')
})