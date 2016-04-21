
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import {Main, Column, Row} from './'

document.title = 'Project'
const Root = React.createClass({
  render() {
    return <Main background='lightgray'>
      <Row justifyContent='center'>
        <Column flexBasis={100}>App</Column>
      </Row>
    </Main>
  },
})

ReactDOM.render(<Root/>, document.getElementById('root'))
