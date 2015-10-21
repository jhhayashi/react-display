import React, {PropTypes} from 'react'

import * as prefixers from './prefixers'
import compose from 'lodash/function/compose'
import values from 'lodash/object/values'

/**
 * Creates function for pipeing a style through all local prefixers
 * @param  {object} style
 * @return {object}          prefixed style object
 */
export const autoprefix = compose(...values(prefixers))

/**
 * Returns a React component that converts props into autoprefixed style, with a specific display value
 * @param  {string} display     css display value
 * @param  {string} displayName component displayName value
 * @return {ReactComponent}
 */
export function makeStyleComponentClass(display, displayName) {
  return React.createClass({
    displayName: displayName,
    propTypes: {
      children: PropTypes.node,
      id: PropTypes.string,
    },
    render() {
      const style = autoprefix({
        ...this.props,
        display,
        id: undefined,
        children: undefined,
      })
      return (
        <div
          id={this.props.id}
          style={style}
        >{this.props.children}</div>
      )
    },
  })
}
