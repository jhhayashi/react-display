
import {makeStyleComponentClass} from './methods'

/**
 * Exports an object containing a React component for each cssDisplayName
 * The components have a CSS display according to their names and convert their props
 * into autoprefixed CSS styles
 *
 * @example
 * <Block margin={10}/> // <div style="display: block; margin: 10px;"/>
 */

export {autoprefix} from './methods'

export const Block = makeStyleComponentClass('block', 'Block')
export const Flex = makeStyleComponentClass('flex', 'Flex')
export const InlineFlex = makeStyleComponentClass('inline-flex', 'InlineFlex')
export const InlineBlock = makeStyleComponentClass('inline-block', 'InlineBlock')
export const Table = makeStyleComponentClass('table', 'Table')
export const TableRow = makeStyleComponentClass('table-row', 'TableRow')
export const TableCell = makeStyleComponentClass('table-cell', 'TableCell')
export const Inline = makeStyleComponentClass('inline', 'Inline')

export const Row = makeStyleComponentClass(
  'flex', 'Row',
  {
    flexDirection: 'row',
    flex: '1 0',
    WebkitOverflowScrolling: 'touch',
  }
)
export const Column = makeStyleComponentClass(
  'flex', 'Column',
  {
    flexDirection: 'column',
    flex: '1 0',
    WebkitOverflowScrolling: 'touch',
  }
)
export const Main = makeStyleComponentClass(
  'flex', 'Main',
  {
    bottom: 0,
    flexDirection: 'column',
    flexShrink: 0,
    left: 0,
    overflow: 'scroll',
    position: 'absolute',
    right: 0,
    top: 0,
    WebkitOverflowScrolling: 'touch',
  }
)
