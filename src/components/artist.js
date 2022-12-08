import React from 'react'
import { Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    wrapper,
    image,
    artistInfo,
    artistName,
    fullName,
  } from './artist.module.css'
export const Artist = ({artist,slug}) => {
    const profile = getImage(artist.artistFields.profilePicture.localFile)
  return (
    <Link className={wrapper} to={slug}>
      <GatsbyImage
      className={image}
        image={profile}
        alt={artist.artistFields.profilePicture.altText}
      />
      <article className={artistInfo}>
        {artist.artistFields.artistName && <p className={artistName}>{artist.artistFields.artistName}</p>}
        <p className={fullName}>
          {artist.artistFields.firstName} {artist.artistFields.lastName}
        </p>
      </article>
    </Link>
  )
}

export default Artist;