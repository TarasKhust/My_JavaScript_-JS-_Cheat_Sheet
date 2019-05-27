import './index.css'
import React, { PropTypes } from 'react'

class Select extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.any,
    defaultValue: PropTypes.any
  }

  render() {
    const isOpen = false
    return (
      <div className="select">
        <div className="label">label <span className="arrow">▾</span></div>
        {isOpen && (
          <div className="options">
            {children}
          </div>
        )}
      </div>
    )
  }
}


class Option extends React.Component {
  render() {
    return (
      <div className="option">
        {this.props.children}
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    selectValue: 'dosa'
  }

  setToMintChutney = () => {
    this.setState({
      selectValue: 'mint-chutney'
    })
  }

  render() {
    return (
      <div className="app">

        <div className="block">
          <h2>Uncontrolled</h2>
          <Select defaultValue="tikka-masala">
            <Option value="tikka-masala">Tikka Masala</Option>
            <Option value="tandoori-chicken">Tandoori Chicken</Option>
            <Option value="dosa">Dosa</Option>
            <Option value="mint-chutney">Mint Chutney</Option>
          </Select>
        </div>

        <div className="block">
          <h2>Controlled</h2>
          <p>
            <button onClick={this.setToMintChutney}>
              Set to Mint Chutney
            </button>
          </p>
          <Select
            value={this.state.selectValue}
            onChange={(selectValue) => {
              this.setState({ selectValue })
            }}
          >
            <Option value="tikka-masala">Tikka Masala</Option>
            <Option value="tandoori-chicken">Tandoori Chicken</Option>
            <Option value="dosa">Dosa</Option>
            <Option value="mint-chutney">Mint Chutney</Option>
          </Select>
        </div>
      </div>
    )
  }
}

export default App
