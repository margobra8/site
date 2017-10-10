import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import "../../static/fakt-soft.css"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hack Club"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0' }
      ]}
    />
    <style children={`*{box-sizing:border-box}body{line-height:1.6;margin:0}`} />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
