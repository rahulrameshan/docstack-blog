import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'

import logoImg from '../logo.png'
import BigBanner from './BigBanner'
import PostCardFlow from './PostCardFlow'

const HomeStyles = styled.div`
  .massive-container {
    margin: auto;
    max-width: 1600px;
  }
`

export default getSiteProps((props) => {
  return (
    <HomeStyles>
      <BigBanner
        title='Docstack'
        description='The document parsing platform'
      />
      <div className='massive-container'>
        <PostCardFlow posts={ props.metadata }/>
      </div>
    </HomeStyles>
  );
})
