import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { project, projectSelected, container, list, heroContainer, hidden, visible, projectDescInner } from './projectList.module.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import ProjectHero from './projectHero'

const ProjectList = () => {
  const data = useStaticQuery(graphql`
      query {
        allMdx(sort: { frontmatter: { date: DESC }}) {
          nodes {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              slug
              short_description
              hero_image_alt
              hero_image {
                childImageSharp {
                  gatsbyImageData(height:500 
                  width: 500)
                }
              }
            }
            id
          }
        }
      }
    `)
  const [selectedProject, setSelectedProject] = React.useState('')
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  return (
      // onMouseLeave={() => { setSelectedProject('') }
      <div className={container} >
        <div className={list}>{
                data.allMdx.nodes.map(node => (
                    <Link to={`/${node.frontmatter.slug}`} onMouseEnter={() => { setSelectedProject(node.id) } }>
                    <article className={node.id === selectedProject ? projectSelected : project}>
                        <h2 key={node.id}>
                                {node.frontmatter.title}
                        </h2>
                    </article>
                    </Link>
                ))
            }
        </div>
        <div className={heroContainer} ref={parent}>{
            data.allMdx.nodes.map(node => (
              node.id === selectedProject && (<ProjectHero key={node.id} node={node}/>)
            ))
        }
        </div>

      </div>
  )
}

export default ProjectList
