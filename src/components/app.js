import React from 'react'
import styled from 'styled-components'

export default class Tagger extends React.Component {
  constructor () {
    super()
    this.state = { tags: [], textareaValue: '' }

    this._onChange = this._onChange.bind(this)
  }

  _onChange (e) {
    const { value } = e.target

    this.setState({ textareaValue: value }, () => {
      if (/[,;\s\n\t]/g.test(value)) {
        this._updateTags()
      }
    })
  }

  _updateTags () {
    const { textareaValue } = this.state

    const tags = textareaValue
      .replace(/[;,\n\s]/, ' ')
      .split(' ')
      .map(tag => tag.trim())
      .filter(tag => tag !== '')

    this.setState({tags, textareaValue: ''})
  }

  render () {
    return (
      <Wrapper>
        {this.state.tags.map(tag => <div>{tag}</div>)}
        <Textarea
          rows={1}
          value={this.state.textareaValue}
          onChange={this._onChange}
        />
      </Wrapper>
    )
  }
}

const Textarea = styled.textarea`

`

const Wrapper = styled.div`

`
