describe('Utils', () => {
  const utils = require('./../libs/utils')

  test('lowerCaseFirstLetter', () => {
    const initialStr = 'What?'
    const finalStr   = 'what?'

    expect(utils.lowerCaseFirstLetter(initialStr)).toBe(finalStr)
  })

  test('upperCaseFirstLetter', () => {
    const initialStr = 'what?'
    const finalStr   = 'What?'

    expect(utils.upperCaseFirstLetter(initialStr)).toBe(finalStr)
  })
})