import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
const ArtistsPage = ({data: {allWpArtist: {edges}}}) => {
  return (
    <Layout pageTitle="Artists of Ahmed Agency">
      {edges.map((item) => {
        const artist = item.node.artistFields;
        return <p key={item.node.id}>{artist.firstName} {artist.lastName}</p>
      })}
    </Layout>
  )
}
export const query = graphql`
  query {
    allWpArtist {
        edges {
          node {
            id
            artistFields {
              firstName
              lastName
              artistName
            }
          }
        }
      }
}

`
export default ArtistsPage