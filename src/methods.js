import React, {PropTypes} from 'react'

import * as prefixers from './prefixers'
import compose from 'lodash/function/compose'
import values from 'lodash/object/values'
import pick from 'lodash/object/pick'
import omit from 'lodash/object/omit'

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
export function makeStyleComponentClass(display, displayName, defaultStyle) {
  return React.createClass({
    displayName: displayName,
    propTypes: {
      children: PropTypes.node,
      id: PropTypes.string,
    },
    render() {
      const actions = pick(this.props, (value, name) => /^on/.test(name))
      const noActions = omit(this.props, (value, name) => /^on/.test(name))
      const style = autoprefix({
        ...defaultStyle,
        ...noActions,
        display,
        id: undefined,
        children: undefined,
      })
      return (
        <div
          id={this.props.id}
          style={style}
          {...actions}
        >{this.props.children}</div>
      )
    },
  })
}
