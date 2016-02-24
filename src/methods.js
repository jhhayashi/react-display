import React, {PropTypes} from 'react'

import * as prefixers from './prefixers'
import flowRight from 'lodash/flowRight'
import values from 'lodash/values'
import pickBy from 'lodash/pickBy'
import omitBy from 'lodash/omitBy'

/**
 * Creates function for pipeing a style through all local prefixers
 * @param  {object} style
 * @return {object}          prefixed style object
 */
export const autoprefix = flowRight(...values(prefixers))

/**
 * Returns a React component that converts props into autoprefixed style, with a specific display value
 * @param  {string} display     css display value
 * @param  {string} displayName component displayName value
 * @return {ReactComponent}
 */
export function makeStyleComponentClass(display, displayName, defaultStyle) {
  return React.createClass({
    displayName,
    propTypes: {
      children: PropTypes.node,
      id: PropTypes.string,
    },
    render() {
      const actions = pickBy(this.props, (value, name) => /^on/.test(name))
      const noActions = omitBy(this.props, (value, name) => /^on/.test(name))
      const style = autoprefix({
        display,
        ...defaultStyle,
        ...noActions,
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
