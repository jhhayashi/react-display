
import {it as test} from 'mocha'
import assert from 'assert'

import React from 'react'
import shallowRender from '@luiscarli/shallow-render'

import {Block, Flex, Row, Column, Main} from './'

test('Block', () => {
  const component = shallowRender(<Block margin={10}/>)
  assert.deepEqual(component.type, 'div')
  assert.deepEqual(
    component.props.style,
    {
      ...component.props.style,
      display: 'block', margin: 10, children: undefined,
    }
  )
})

test('Flex', () => {
  const component = shallowRender(<Flex margin={10}/>)
  assert.deepEqual(component.type, 'div')
  assert.deepEqual(
    component.props.style,
    {
      ...component.props.style,
      display: 'flex', margin: 10, children: undefined,
    }
  )
})

test('onClick', () => {
  const component = shallowRender(<Flex onClick={10}/>)
  assert.deepEqual(component.type, 'div')
  assert.deepEqual(
    component.props.style,
    {
      ...component.props.style,
      display: 'flex', children: undefined,
    }
  )
  assert.deepEqual(
    component.props.onClick,
    10
  )
})
test('Row', () => {
  const component = shallowRender(
    <Row/>
  )
  assert.deepEqual(component.type, 'div')
  assert.deepEqual(component.props.style.flexDirection, 'row')
})
test('Column', () => {
  const component = shallowRender(
    <Column/>
  )
  assert.deepEqual(component.type, 'div')
  assert.deepEqual(component.props.style.flexDirection, 'column')
})
test('Main', () => {
  const component = shallowRender(
    <Main/>
  )
  assert.deepEqual(component.type, 'div')
  assert.deepEqual(component.props.style.flexDirection, 'column')
  assert.deepEqual(component.props.style.top, 0)
  assert.deepEqual(component.props.style.left, 0)
})
