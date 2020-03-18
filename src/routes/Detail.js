import React from "react"
import { Redirect } from "react-router-dom"

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props)
    const { location, history } = this.props
    if (location.state === undefined) {
      history.push("/")
    }
  }
  render() {
    // const { location } = this.props
    const location = this.props.location
    console.log(location)
    if (location.state === undefined) {
      console.log("love you")
      //   window.location.reload() // F5
      //   location.state = "dd"
      return <Redirect to={"/"} />
    }
    return <span>{location.state.title}</span>
  }

  // TEST!
  //   render() {
  //     return null
  //   }
}

export default Detail
