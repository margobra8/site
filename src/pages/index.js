import React from 'react'
import {
  Provider,
  Banner,
  Heading,
  Badge,
  Lead,
  Container,
  Flex,
  Box,
  Text,
  Subhead,
  Button,
  ButtonOutline,
  Label,
  Input,
  Circle,
  Relative,
  Absolute,
  Image,
  Row,
  Column
} from 'rebass'
import Bar from '../components/Bar'
import Icon from '../components/Icon'
import Bubbles from '../components/Bubbles'
import Flag from '../components/Flag'
import Start from '../components/Start'
import Stat from '../components/Stat'
import theme, { brand, grays, geo, wk, mx, mm } from '../theme'
import { keys } from 'lodash'

import Footer from '../components/Footer'

const tilt = n =>
  wk(`clip-path: polygon(0% ${100 - n}%, 100% 0, 100% ${n}%, 0 100%)`)
const Stripe = Banner.extend`
  ${geo(brand.primary)};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${tilt(90)};
  padding-top: 6rem;
  padding-bottom: 6rem;
  margin-top: -4rem;
  min-height: initial !important;

  ${mx[1]} {
    ${tilt(75)};
    padding-top: 8rem;
    padding-bottom: 8rem;
    margin-top: -6rem;
  }
  ${mx[2]} {
    /* padding-top: 10rem;
    padding-bottom: 10rem; */
  }
  h3 {
    opacity: 0.85;
  }
`

const StripeContainer = Container.extend`
  max-width: 48rem;
  padding: 0;
  text-align: center;
  z-index: 1;
`

const Headline = Heading.extend.attrs({
  f: [6, 7],
  my: 0,
  color: 'primary'
})`line-height: 1.1;`
const Subheadline = Lead.extend.attrs({
  f: [3, 4],
  mt: 3,
  mb: 4,
  mx: 'auto',
  w: [1, 2 / 3],
  color: 'grey'
})`line-height: 1.5;`
const Description = Lead.extend.attrs({ f: [4, 5], mb: 0 })`
  line-height: 1.5;
  /* max-width: 36rem; */
`

const Split = Row.extend.attrs({ mx: -3, my: 3, align: 'center' })`
  flex-flow: column wrap;

  ${mx[1]} {
    flex-flow: row nowrap;
  }

  > div {
    flex: 1 1 auto;
  }
`
const SplitWide = Column.extend`${mx[1]} {max-width: 60%;}`
const SplitNarrow = Flex.extend.attrs({ px: 3 })`${mx[1]} {max-width: 40%;}`

const BodyHeading = Heading.extend.attrs({
  is: 'h2',
  f: 5,
  mt: 4,
  mb: 2,
  color: 'primary'
})`line-height: 1.25;`
const BodySubhead = Subhead.extend.attrs({
  is: 'h3',
  f: [3, 4],
  mt: 0,
  mb: 1,
  color: 'silver'
})`
  font-weight: normal;
  line-height: 1.5;
`

const CTA = Button.extend.attrs({
  is: 'a',
  f: 4,
  py: 3,
  px: 4,
  m: 2
})`
  box-shadow: 0 2px 12px rgba(0, 0, 0, .2);
  transition: .2s box-shadow ease-out;
  &:hover {
    box-shadow: 0 4px 12px 2px rgba(0, 0, 0, .3);
  }
`

export default () => (
  <Provider theme={theme}>
    <Bubbles>
      <Flag />
      <Headline>We the students.</Headline>
      <Subheadline>
        Hack Clubs are places where students learn to code and build amazing
        things together.
      </Subheadline>
      <Flex justify="center" wrap m={-2}>
        <CTA href="/about" bg="white" color="primary">
          Read More
        </CTA>
        <CTA href="https://hackclub.com/start" bg="primary" color="white">
          Start a Club
        </CTA>
      </Flex>
    </Bubbles>
    <Stripe>
      <StripeContainer>
        <BodyHeading color="white" f={6} mt={0}>
          At Hack Club, it’s all about you.
        </BodyHeading>
        <BodySubhead color="white" my={0}>
          Hack Clubs are coding clubs that are led by students, for students.
        </BodySubhead>
      </StripeContainer>
    </Stripe>
    <Container maxWidth={36 * 16} bg="white" color="black">
      <BodyHeading>Learning is different at Hack Clubs.</BodyHeading>
      <BodySubhead>
        Start with guided workshops, then start your own.
      </BodySubhead>
      <Flex mx={-4} my={3} justify="center" wrap>
        <Stat value={180} label="clubs" />
        <Stat value={13} label="countries" />
        <Stat value={25} label="states" />
        <Stat value="2K+" label="members" />
      </Flex>
      <BodyHeading>We’ve got everything you need for your club.</BodyHeading>
      <BodySubhead>Talk to our team for guidance anytime.</BodySubhead>
      <BodySubhead>Chat 24/7 with the community on Slack.</BodySubhead>
      <BodySubhead>Read our open source lesson plans.</BodySubhead>
      <BodySubhead>Get swag for your club.</BodySubhead>
    </Container>
    <Start />
    {/* <Bar w={1 / 3} my={4} mx="auto" /> */}
    <Footer />
  </Provider>
)
