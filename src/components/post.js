import * as React from 'react'
import { Link } from 'gatsby'
import { container, headerContainer, metadataContainer, descriptionContainer, metadataElement, metadataLabel, metadataValue, metadataSpacer, flexContainer, halfWidth, thirdWidth, twoThirdsWidth } from './post.module.scss'
import ClassicWindow from './classicWindow'
import { MDXProvider } from '@mdx-js/react'
import { PropTypes } from 'prop-types'

// eslint-disable-next-line react/prop-types
const Post = ({ frontmatter, children }) => {
  return (
        <div className={container}>
            <div className={ headerContainer }>
                <div className={ metadataContainer }>
                    <MetadataElement label="date">{frontmatter.date}</MetadataElement>
                    {frontmatter.info && <MetadataElement label="info">{frontmatter.info}</MetadataElement>}
                    {frontmatter.link && <MetadataElement label="link"><Link to={frontmatter.link}>︎{frontmatter.link}  </Link> </MetadataElement>}
                </div>
                <div className={ descriptionContainer }>
                    <h3>{frontmatter.long_description}</h3>
                </div>
            </div>
            <MDXProvider
                components={{
                  ClassicWindow,
                  HalfWidth,
                  ThirdWidth,
                  TwoThirdsWidth,
                  FlexContainer

                }}
            >
                {children}
            </MDXProvider>
        </div>
  )
}

// eslint-disable-next-line react/prop-types
const MetadataElement = ({ label, children }) => {
  return (
                        <div className={metadataElement }>
                            <h6 className={metadataLabel}> {label} </h6>
                            <div className={metadataSpacer}></div>
                            <h6 className={metadataValue}>{children}</h6>
                        </div>)
}

const FlexContainer = ({ children }) => {
  return (
        <div className={ flexContainer }>
            {children}
        </div>)
}

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const HalfWidth = ({ children }) => {
  return (
        <div className={ halfWidth }>
            {children}
        </div>)
}

HalfWidth.propTypes = {
  children: PropTypes.node.isRequired
}

const ThirdWidth = ({ children }) => {
  return (
        <div className={ thirdWidth }>
            {children}
        </div>)
}

ThirdWidth.propTypes = {
  children: PropTypes.node.isRequired
}

const TwoThirdsWidth = ({ children }) => {
  return (
        <div className={ twoThirdsWidth }>
            {children}
        </div>)
}

TwoThirdsWidth.propTypes = {
  children: PropTypes.node.isRequired
}

export default Post
