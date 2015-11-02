## Display Components

[![Build Status](https://travis-ci.org/luiscarli/display.svg?branch=master)](https://travis-ci.org/luiscarli/display) [![Coverage Status](https://coveralls.io/repos/luiscarli/display/badge.svg?branch=master&service=github)](https://coveralls.io/github/luiscarli/display?branch=master)

This package is directly based on the work done by [Pete Hunt](https://github.com/petehunt) on the [jsxstyle](https://github.com/petehunt/jsxstyle)

Install by using npm:
```bash
$ npm install @luiscarli/display --save
```

Display components allows you to define inline styles through components props.

Example:
```jsx
import React, {PropTypes} from 'react'
import {Block} from '@luiscarli/display'
import defaultTheme from '../defaultTheme'

const ExampleComponent = props => (
  <Block
    fontFamily: {props.theme.font}
    fontSize: {props.theme.fontSize}
  >
    {props.text}
  </Block>
)

ExampleComponent.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.object,
}
ExampleComponent.defaultProps = {
  theme: defaultTheme,
}

export default ExampleComponent
```

Display export the following components: `Block`, `Flex`, `InlineBlock`, `Table`, `TableRow`, `TableCell` and `Inline`.

Events callbacks (`onClick`, `onMouseEnter`, ...) are rewired accordingly.
