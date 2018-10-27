import React from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { addMessage } from '../actions'

const AddMessage = (props) => {
  let input

  return (
    <section id="new-message">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props.addMessage(input.value, 'Me')
          input.value = ''
        }
      }}
        type="text"
        id="new-message-input"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  )
}

export default connect(null, { addMessage })(AddMessage)
