import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from 'semantic-ui-react'
import FollowLink from './FollowLink'
import style from '../lib/style'

const FooterStyles = styled.div`
  .copyright {
    text-align: center;
    margin-top: 100px;
  }
  .footer {
    color: #AAA;
    background-color: ${style.backgroundColor};
    font-family: 'Proxima Nova','Helvetica Neue',Helvetica,sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  .grid-col-left {
    margin-right: 1rem;
  }
  .grid-col-right {
    margin-left: 1rem;
  }
  h3 {
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 2px;
    padding-bottom: 20px;
    padding-top: 10px;
  }
  p {
    line-height: 2em;
  }
  a {
    color: #AAA;
  }
  a:hover {
    color: ${style.hoverColor};
  }
  .link-text {
    font-size: 20px;
    padding-left: 30px;
  }
`

export default () => (
  <FooterStyles>
    <div className="footer">
      <Container>
        <div className='content'>
        <Grid divided='vertically' stackable >
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="grid-col-left">
                <h3>About</h3>
                <p>Docstack</p>
                <p>Dcoument Parser</p>
                <p></p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="grid-col-right">
                <h3>Follow Us</h3>
                <FollowLink to='' name='twitter' text='@Docstack' />
                <FollowLink to='' name='linkedin' text='Docstack' />
                <FollowLink to='' name='mail' text='docstack@gmail.com' />
                <FollowLink to='' name='rss' text='RSS feed' type='application/rss+xml' />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="copyright">© 2018 Doc Stack</div>
      </div>
      </Container>
    </div>
  </FooterStyles>
)