import React, { Component } from 'react'
import { ImagePicker  ,Button } from 'antd-mobile'
import { createForm } from 'rc-form'
import PropTypes from 'prop-types'

@createForm()
class app extends Component {
  PropTypes={
    onChange: PropTypes.func,
  }

    state = {
      files: [],
    }

componentDidMount(){
  const {userInfo} = this.props
  const {avatar} = userInfo
  this.setState({files:[{url:avatar}]})
}

onSubmit = () => {
  const {files} = this.state
  console.info(files,'files')
    this.props.onChange({avatar:files[0].url},3)
}

onChange = (files, type, index) => {
  console.log(files, type, index);
  this.setState({
    files,
  })
}

    render() {
      const { files } = this.state
        return (
          <div className="flex-column">
            <div className="flex-3">
              <ImagePicker
                files={files}
                onChange={this.onChange}
                onImageClick={(index, fs) => console.log(index, fs)}
                selectable={files.length < 1}
                accept="image/gif,image/jpeg,image/jpg,image/png"
              />
            </div>
            <div className="flex-1">
              <Button type="primary" onClick={this.onSubmit}>保存</Button>
            </div>
          </div>
        )
    }
}

export default app