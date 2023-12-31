import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  headerContainer,
  metadataContainer,
  descriptionContainer,
  metadataElement,
  metadataLabel,
  metadataValue,
  metadataSpacer,
  flexContainer,
  halfWidth,
  thirdWidth,
  twoThirdsWidth,
  nextPrevProjectDiv,
  twentyPercentWidth,
  contentContainer,
  caption
} from './post.module.scss'
import ClassicWindow from './classicWindow'
import { MDXProvider } from '@mdx-js/react'
import { PropTypes } from 'prop-types'
import { kbcButton } from 'keyboard-css'

// eslint-disable-next-line react/prop-types
const Post = ({ frontmatter, prev, next, children }) => {
  if (!frontmatter) return null

  return (
        <div className={container}>
            <div className={ headerContainer }>
                <div className={ metadataContainer }>
                    <MetadataElement label="date">{frontmatter.date}</MetadataElement>
                    {frontmatter.info && <MetadataElement label="info">{frontmatter.info}</MetadataElement>}
                    {frontmatter.tech && <MetadataElement label="tech">{frontmatter.tech}</MetadataElement>}
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
            <div className={ flexContainer }>
                <div className={nextPrevProjectDiv} style={{ marginRight: 'auto' }}>
                    {prev && <Link to={`/${prev.frontmatter.slug}`}> <p>← Previous Project</p> <h6>{prev.frontmatter.title}</h6> </Link>}
                </div>
                <div className={nextPrevProjectDiv} style={{ textAlign: 'right' }}>
                    {next && <Link to={`/${next.frontmatter.slug}`}> <p> Next Project → </p> <h6>{next.frontmatter.title}</h6> </Link>}
                </div>
            </div>
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

export const FlexContainer = ({ children }) => {
  return (
        <div className={ flexContainer }>
            {children}
        </div>)
}

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export const HalfWidth = ({ children }) => {
  return (
        <div className={ halfWidth }>
            {children}
        </div>)
}

HalfWidth.propTypes = {
  children: PropTypes.node.isRequired
}

export const ThirdWidth = ({ centerVertically = true, children }) => {
  const style = {}
  if (!centerVertically) {
    style.marginTop = '0px'
    style.marginBottom = 'auto'
  }
  return (
        <div style={style} className={ thirdWidth }>
            {children}
        </div>)
}

ThirdWidth.propTypes = {
  children: PropTypes.node.isRequired,
  centerVertically: PropTypes.node.isOptional
}

export const TwoThirdsWidth = ({ children }) => {
  return (
        <div className={ twoThirdsWidth }>
            {children}
        </div>)
}

TwoThirdsWidth.propTypes = {
  children: PropTypes.node.isRequired
}

export const TwentyPercentWidth = ({ children }) => {
  return (
        <div className={ twentyPercentWidth }>
            {children}
        </div>)
}

TwentyPercentWidth.propTypes = {
  children: PropTypes.node.isRequired
}

export const CustomWidth = ({ width, verticalAlignment, horizontalAlignment, children }) => {
    const style = {width}
    switch (verticalAlignment) {
        case "top":
            style.marginTop = '0px';
            style.marginBottom = 'auto';
            break;
        case "bottom":
            style.marginTop = 'auto';
            style.marginBottom = '0px';
            break;
    }
    switch (horizontalAlignment) {
        case "left":
            style.marginLeft = '0px';
            style.marginRight = 'auto';
            break;
        case "right":
            style.marginLeft = 'auto';
            style.marginRight = '0px';
            break;
    }
  return (
        <div style={style} className={ contentContainer }>
            {children}
        </div>)
}

CustomWidth.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.node.isRequired,
  verticalAlignment: PropTypes.node.isOptional,
  horizontalAlignment: PropTypes.node.isRequired,
}

export const Caption = ({ children }) => {
  return (
        <div className={ caption }>
            {children}
        </div>)
}

Caption.propTypes = {
  children: PropTypes.node.isRequired
}

export const Key = ({ children }) => {
    return (
        <kbd className={ 'kbc-button' }>
            {children}
        </kbd>)
}

export default Post
