
export function userSelect(style) {
  if (style.hasOwnProperty('userSelect')) {
    return {
      WebkitUserSelect: style.userSelect,
      MozUserSelect: style.userSelect,
      msUserSelect: style.userSelect,
      ...style,
    }
  }
  return style
}

export function transition(style) {
  if (style.hasOwnProperty('transition')) {
    return {
      WebkitTransition: style.transition,
      MozTransition: style.transition,
      msTransition: style.transition,
      ...style,
    }
  }
  return style
}

export function boxShadow(style) {
  if (style.hasOwnProperty('boxShadow')) {
    return {
      WebkitBoxShadow: style.boxShadow,
      MozBoxShadow: style.boxShadow,
      msBoxSelect: style.boxShadow,
      ...style,
    }
  }
  return style
}

export function fontSmoothing(style) {
  if (style.hasOwnProperty('fontSmoothing')) {
    return {
      WebkitFontSmoothing: style.fontSmoothing,
      MozOsxFontSmoothing: style.fontSmoothing === 'antialiased' ? 'grayscale' : undefined,
      ...style,
    }
  }
  return style
}

export function flexDirection(style) {
  if (style.hasOwnProperty('flexDirection')) {
    return {
      WebkitFlexDirection: style.flexDirection,
      ...style,
    }
  }
  return style
}

export function flexWrap(style) {
  if (style.hasOwnProperty('flexWrap')) {
    return {
      WebkitFlexWrap: style.flexWrap,
      ...style,
    }
  }
  return style
}

export function alignItems(style) {
  if (style.hasOwnProperty('alignItems')) {
    return {
      WebkitAlignItems: style.alignItems,
      ...style,
    }
  }
  return style
}

export function flexGrow(style) {
  if (style.hasOwnProperty('flexGrow')) {
    return {
      WebkitFlexGrow: style.flexGrow,
      ...style,
    }
  }
  return style
}

export function flexShrink(style) {
  if (style.hasOwnProperty('flexShrink')) {
    return {
      WebkitFlexShrink: style.flexShrink,
      ...style,
    }
  }
  return style
}

export function order(style) {
  if (style.hasOwnProperty('order')) {
    return {
      WebkitOrder: style.order,
      ...style,
    }
  }
  return style
}

export function justifyContent(style) {
  if (style.hasOwnProperty('justifyContent')) {
    return {
      WebkitJustifyContent: style.justifyContent,
      ...style,
    }
  }
  return style
}

export function flex(style) {
  if (style.hasOwnProperty('flex')) {
    return {
      WebkitFlex: style.flex,
      ...style,
    }
  }
  return style
}

export function displayFlex(style) {
  if (style.display === 'flex') {
    return {
      ...style,
      display: `${style.display};display:-webkit-flex;display:-ms-flexbox`,
    }
  }
  return style
}
