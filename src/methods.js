import React from 'react'
import PropTypes from 'prop-types'

import {autoprefix} from './prefixers'
import _ from 'lodash'

/**
 * Creates function for pipeing a style through all local prefixers
 * @param  {object} style
 * @return {object}          prefixed style object
 */

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
      const actions = _.pickBy(this.props, (value, name) => /^on/.test(name))
      const noActions = _.omitBy(this.props, (value, name) => /^on/.test(name))
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
