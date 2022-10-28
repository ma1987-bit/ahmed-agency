
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Ahmed Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
      alt='foto from pexel website'
      src='https://images.pexels.com/photos/13918700/pexels-photo-13918700.jpeg?auto=compress&cs=tinysrgb&w=200&lazy=load'
      /> 
      </Layout>
      
    </main>
  )
}

export default IndexPage