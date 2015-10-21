
import {makeStyleComponentClass} from './methods'

/**
 * Exports an object containing a React component for each cssDisplayName
 * The components have a CSS display according to their names and convert their props
 * into autoprefixed CSS styles
 *
 * @example
 * <Block margin={10}/> // <div style="display: block; margin: 10px;"/>
 */

export const Block = makeStyleComponentClass('block', 'Block')
export const Flex = makeStyleComponentClass('flex', 'Flex')
export const InlineBlock = makeStyleComponentClass('inline-block', 'InlineBlock')
export const Table = makeStyleComponentClass('table', 'Table')
export const TableRow = makeStyleComponentClass('table-row', 'TableRow')
export const TableCell = makeStyleComponentClass('table-cell', 'TableCell')
export const Inline = makeStyleComponentClass('inline', 'Inline')
