import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
  artists,
} from '../page.module.css'
import Artist from '../components/artist'

const IndexPage  = ({data: {wpPage: {homeFields}}}) => {
 const image = getImage(homeFields.picture.localFile)
  return (
    <Layout>
      <section className={header}>
        <article className={headerInfo}>
          <h1 className={headerTitle}>{homeFields.title}</h1>
          <div dangerouslySetInnerHTML={{
              __html: homeFields.description,
          }}/>
          <a className={CTA} target="__blank" href={homeFields.callToAction.url}>
            {homeFields.callToAction.title}
          </a>
          </article>
          <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homeFields.picture.altText}
          />
        </div>
      </section>

      <section className={section}>
      <h2 className={subtitle}>Featured Artists</h2>
      <p>
        All of our artists are veterans in the industery and have proven themselves time and time again. Every week we put out 3 of our artists in the spotlight section, you can check out their individual portfolio’s and book them by contacting us. Send an email to book@artistagency.com or call us on 0123456789. 
      </p>
      <div className={artists}>
        {homeFields.artists.map(artist => {
          return <Artist slug={`artists/${artist.slug}`} key={artist.id} artist={artist} />
        })}
      </div>
  </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: {eq: "home"}) {
      homeFields {
        artists {
          ... on WpArtist {
            id
            slug
            artistFields {
              artistName
              firstName
              lastName
              profilePicture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
        callToAction {
          title
          url
        }
        title
        description
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
}

`

export default IndexPage 