import React, { Component } from 'react'
import './index.scss'

class Report extends Component{
  render() {
    return (
      <div className="report">
        <a href={this.props.reportConfig.url} target="_blank" rel="noopener noreferrer">{this.props.reportConfig.name}</a>
      </div>
    )
  }
}

export default Report