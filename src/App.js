import React, { Component } from 'react'
import toast, {Toaster} from 'react-hot-toast'
export default class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <button onClick={()=> toast ('yovosap!')}>toast</button>
        <Toaster/>
      </div>
    )
  }
}
