const dc = [
  { name: 'batman', power: 100 },
  { name: 'superman', power: 90 },
  { name: 'greenarrow', power: 70 },
  { name: 'greenlantern', power: 70 },
]

it('should cause a side effect for every item', () => {
  const callback = jest.fn()

  dc.forEach(callback)

  expect(callback).toHaveBeenCalledTimes(dc.length)
})

it('should return a list of hero names', () => {
  const expected = ['batman', 'superman', 'greenarrow', 'greenlantern']

  const heroNames = dc.map(x => x.name)

  expect(heroNames).toEqual(expected)
})

it('should return all heroes with power 70', () => {
  const expected = dc.slice(2)

  const heroesWithPower70 = dc.filter(x => x.power === 70)

  expect(heroesWithPower70).toEqual(expected)
})

it('should return the name of the (single) hero with power 90', () => {
  const singleHeroWithPower90 = dc.find(x => x.power === 90)

  expect(singleHeroWithPower90.name).toBe('superman')
})

it('[1, 2, 3, 4, 5] shoud contain 3, but not 7', () => {
  const array = [1, 2, 3, 4, 5]

  const contains3 = array.includes(3)
  const contains7 = array.includes(7)

  expect(contains3).toBe(true)
  expect(contains7).toBe(false)
})

it('should return the most powerful hero!', () => {
  const mostPowerfull = dc.reduce((a, b) => (a.power > b.power ? a : b))

  expect(mostPowerfull.name).toBe('batman') // another time, superman! 🦇
})

it('should contain Green Arrow in the list of DC heroes', () => {
  const includesGreenArrow = dc.map(x => x.name).includes('greenarrow')

  expect(includesGreenArrow).toBe(true)
})
