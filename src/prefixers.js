/* eslint no-param-reassign:0 */
import {assign} from 'lodash'

export function autoprefix(style) {
  if (style.hasOwnProperty('userSelect')) {
    style = assign({}, style, {
      WebkitUserSelect: style.userSelect,
      MozUserSelect: style.userSelect,
      msUserSelect: style.userSelect,
    })
  }

  if (style.hasOwnProperty('transition')) {
    assign(style, {
      WebkitTransition: style.transition,
      MozTransition: style.transition,
      msTransition: style.transition,
    })
  }

  if (style.hasOwnProperty('boxShadow')) {
    assign(style, {
      WebkitBoxShadow: style.boxShadow,
      MozBoxShadow: style.boxShadow,
      msBoxSelect: style.boxShadow,
    })
  }

  if (style.hasOwnProperty('fontSmoothing')) {
    assign(style, {
      WebkitFontSmoothing: style.fontSmoothing,
      MozOsxFontSmoothing: style.fontSmoothing === 'antialiased' ? 'grayscale' : undefined,
    })
  }

  if (style.hasOwnProperty('flexDirection')) {
    assign(style, {
      WebkitFlexDirection: style.flexDirection,
    })
  }

  if (style.hasOwnProperty('flexWrap')) {
    assign(style, {
      WebkitFlexWrap: style.flexWrap,
    })
  }

  if (style.hasOwnProperty('alignItems')) {
    assign(style, {
      WebkitAlignItems: style.alignItems,
    })
  }

  if (style.hasOwnProperty('flexGrow')) {
    assign(style, {
      WebkitFlexGrow: style.flexGrow,
    })
  }

  if (style.hasOwnProperty('flexShrink')) {
    assign(style, {
      WebkitFlexShrink: style.flexShrink,
    })
  }

  if (style.hasOwnProperty('order')) {
    assign(style, {
      WebkitOrder: style.order,
    })
  }

  if (style.hasOwnProperty('justifyContent')) {
    assign(style, {
      WebkitJustifyContent: style.justifyContent,
    })
  }

  if (style.hasOwnProperty('flex')) {
    assign(style, {
      WebkitFlex: style.flex,
    })
  }

  return style
}
