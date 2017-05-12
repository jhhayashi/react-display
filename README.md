## Display Components

[![Build Status](https://travis-ci.org/luiscarli/react-display.svg?branch=master)](https://travis-ci.org/luiscarli/react-display)

This package is directly based on the work done by [Pete Hunt](https://github.com/petehunt) on the [jsxstyle](https://github.com/petehunt/jsxstyle)

Install by using npm:
```bash
$ npm install react-display --save
```

Display components allows you to define inline styles through components props, and also have then auto-prefixed for you.

Instead of doing
```jsx
<div
  style={{
    fontFamily: theme.fontFamily
    fontSize: theme.fontSize
  }}
  onClick={handleClick}
/>
```

You can do
```jsx
import {Block} from 'react-display'
```
```jsx
<Block
  fontFamily={theme.font}
  fontSize={theme.fontSize}
  onClick={handleClick}
>
```

## API

The module has the following *named exports*.

##### ● `<Block/>`, `<Flex/>`, `<Table/>`, `<TableRow/>`, `<TableCell/>`, `<Inline/>`, `<InlineBlock/>` and `<InlineFlex/>`
Those React components render `<div/>` with a css `display` attribute set according to the name of the component. All props defined on the component are prefixed and set as css style attributes, with the exception of event handling props like `onClick`, `onMouseEnter`, etc.

```jsx
<Flex/>
// is the same as
<div
  style={{
    display: 'flex'
  }}
/>
```

##### ● `<Column/>`
Creates a `<Flex/>` component with `flexDirection` set to `column`

##### ● `<Row/>`
Creates a `<Flex/>` component with `flexDirection` set to `row`

##### ● `<Main/>`
Creates a component with the following style:
```jsx
{
  display: 'flex',
  flexDirection: 'column'
  bottom: 0,
  left: 0,
  overflow: 'scroll',
  position: 'absolute',
  right: 0,
  top: 0,
}
```

This component is good as the root component of a web app.

##### ● `autoprefix(object)`
Add vendor prefixes to an object of css style attributes.

```jsx
autoprefix({transition: 1})
returns {
  MozTransition: 1,
  WebkitTransition: 1,
  msTransition: 1,
  transition: 1,
}
```

## Example

```jsx
import React from 'react'
import PropTypes from 'prop-types'
import {Block} from 'react-display'
import defaultTheme from '../defaultTheme'

const ExampleComponent = props => (
  <Block
    fontFamily={props.theme.font}
    fontSize={props.theme.fontSize}
    onClick={handleClick}
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
