'use strict'

import React from 'react'
import FontIcon from 'material-ui/lib/font-icon'

require('./stylesheets/filters.scss')

class Filters extends React.Component {
  handleClick() {
    if (this.props.onClick) {
      if (this.props.changeComponentTo) {
        this.props.onClick(this.props.changeComponentTo)
      }
    }
  }
  render() {
    return (
      <div className='filters-component'>
        <span>Component 2</span>
        <FontIcon className='material-icons clickable' color='grey'
                  onClick={this.handleClick.bind(this)} >
          close
        </FontIcon>
      </div>
    )
  }
}

Filters.displayName = 'MoleculeFilters'

// Uncomment properties you need
// Filters.propTypes = {};
// Filters.defaultProps = {};

export default Filters