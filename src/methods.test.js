

import {it as test} from 'mocha'
import assert from 'assert'

import * as methods from './methods'

test('makeStyleComponentClass', () => {
  assert.ok(
    methods.makeStyleComponentClass('Block', 'block')
  )
})
