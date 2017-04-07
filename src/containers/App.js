import React from 'react'

import Message from './Message'
import AwesomeComponent from './AwesomeComponent'


class App extends React.Component {

  render() {
    return (
      <div>
        <Message/><br/>
        <AwesomeComponent/>
      </div>
    )
  }

}


export default App
