import React from 'react';

import {
  BlockQuote,
  Cite,
  Image,
  Layout,
  ListItem,
  Quote,
  Slide,
} from 'spectacle';

import {
  ThemedDeck,
  List,
  Title,
  Text,
  CodeJS,
} from './utils';

import * as snippets from './snippets';

const Presentation = () => (
  <ThemedDeck>
    <Slide id="title">
      <Title>Resilient<br/>JavaScript<br/>APIs</Title>
    </Slide>
    <Slide id="about-me">
      <Title>Hi, I'm Misho</Title>
      <Layout>
        <Image src="images/rick-juggling.gif" />
        <List>
          <ListItem>Senior Software Engineer @Skyscanner</ListItem>
          <hr/>
          <ListItem>Rick and Morty fan</ListItem>
          <hr/>
          <ListItem>Board game geek</ListItem>
          <hr/>
          <ListItem>Juggler</ListItem>
        </List>
      </Layout>
    </Slide>
    <Slide id="resilience">
      <Title>Resilience</Title>
      <Text fit>
        being able to withstand or recover quickly from difficult conditions
      </Text>
    </Slide>
    <Slide id="million-way-to-fail">
      <Slide>
        <Title fit>A million ways to fail on the web</Title>
        <List>
          <ListItem>Bugs</ListItem>
          <ListItem>Infrastructure failures</ListItem>
          <ListItem>Traffic overloads</ListItem>
          <ListItem>Malicious actors</ListItem>
        </List>
      </Slide>
    </Slide>
    <Slide id="clean-code">
      <Title>Clean code is resilient code</Title>
      <Image src="images/Uncle_Bob.png" />
    </Slide>
    <Slide id="death-before-confusion">
      <Title>Death before confusion</Title>
      <Image src="images/Crockford.jpg" />
    </Slide>
    <Slide id="tests">
      <Title>Tests increase predictability</Title>
      <Image width="35%" src="images/testing.png" />
    </Slide>
    <Slide id="plan-for-failure">
      <Title>Plan for failure</Title>
      <Image width="50%" src="images/plan-for-failure.jpg" />
    </Slide>
    <Slide id="metrics">
      <Title>Metrics</Title>
      <Image src="images/diatlov.jpg" />
    </Slide>
    <Slide id="metrics-statsd">
      <Title>Metrics</Title>
      <Text fit>You cannot improve what you cannot measure</Text>
      <CodeJS src={snippets.statsd} />
    </Slide>
    <Slide id="monitoring">
      <Title>Monitoring</Title>
      <Text fit>Have visibility over the actual performanc of your system</Text>
      <Image width="70%" src="images/grafana.png" />
    </Slide>
    <Slide id="alerting">
      <Title>Alerting</Title>
      <Text fit>Automate the need to actively monitor data</Text>
      <CodeJS src={snippets.bosun} />
    </Slide>
    <Slide id="healthcheck">
      <Title>Healthchecks</Title>
      <Text fit>The system should be able to express its own state</Text>
      <Image width="70%" src="images/healthcheck.png" />
    </Slide>
    <Slide id="simple-healthcheck">
      <Title>Healthchecks</Title>
      <CodeJS src={snippets.healthcheck} />
    </Slide>
    <Slide id="deep-healthcheck">
      <Title>Deep healthchecks</Title>
      <CodeJS src={snippets.deepHealthCheck} />
    </Slide>
    <Slide id="operations">
      <Title>Operations</Title>
      <Text>Respect the Ops team</Text>
      <Image src="images/ops-team.jpg" />
    </Slide>
    <Slide id="run-books">
      <Title>Run books</Title>
      <Text fit>Extensive and accurate documentation is critical</Text>
      <Image src="images/documentation.jpg" />
    </Slide>
    <Slide id="incident-learning">
      <Title>Incident learning debriefs</Title>
      <List>
        <ListItem>Learn from your mistakes</ListItem>
        <ListItem>Do NOT repeat previous mistakes</ListItem>
        <ListItem>Reparative, preventative and strategic actions</ListItem>
      </List>
    </Slide>
    <Slide id="auto-recovery">
      <Title>Recovery</Title>
      <Text>Simple solutions can be effective</Text>
      <Image src="images/restart.jpg" />
    </Slide>
    <Slide id="auto-scaling">
      <Title>Scaling</Title>
      <Image src="images/autoscaling-group.png" />
    </Slide>
    <Slide id="caching">
      <Title>Caching</Title>
      <List>
        <ListItem>Client-side</ListItem>
        <ListItem>Intermediate / Shared</ListItem>
        <ListItem>Server-side</ListItem>
      </List>
    </Slide>
    <Slide id="caching-diagram">
      <Title>Caching</Title>
      <Image width="60%" src="images/shared-cache.png" />
    </Slide>
    <Slide id="rate-limiting">
      <Title>Rate limiting</Title>
      <Text fit>Reduce the number of requests reaching the service</Text>
      <List>
        <ListItem>by IP</ListItem>
        <ListItem>by Endpoint</ListItem>
        <ListItem>by ApiKey / Token</ListItem>
      </List>
    </Slide>
    <Slide id="request-filtering">
      <Title>Request filtering</Title>
      <Text>Not all requests deserve a response</Text>
      <List>
        <ListItem>Blacklisting</ListItem>
        <ListItem>Bots and scrappers</ListItem>
        <ListItem>Malicious actors</ListItem>
      </List>
    </Slide>
    <Slide id="fail-fast">
      <Title>Fail fast</Title>
      <Image src="images/broken-image-icon.gif" width="20%" />
      <Text></Text>
    </Slide>
    <Slide id="backpressure">
      <Title>Backpressure</Title>
      <Image src="images/backpressure.png" />
    </Slide>
    <Slide id="event-loop">
      <Title>The event loop</Title>
      <Text>Measuring the event loop latency</Text>
      <Image width="60%" src="images/event-loop-phases.png" />
    </Slide>
    <Slide id="backpressure-code">
      <Title fit>Backpressure on event loop lag</Title>
      <CodeJS src={snippets.backpressureOnLag} />
    </Slide>
    <Slide id="healthcheck-with-lag">
      <Title>Healthchecks based on lag</Title>
      <CodeJS src={snippets.healthcheckWithLag} />
    </Slide>
    <Slide id="blocking-the-thread">
      <Title>Stop blocking the thread</Title>
      <Text>Backpressure cannot help when the service is long blocking operation on the JS thread</Text>
    </Slide>
    <Slide id="being-nice">
      <Title>Be nice to others</Title>
      <Image src="images/please-be-nice.png" />
    </Slide>
    <Slide id="circuit-breaker">
      <Title>Circuit breaker</Title>
      <Image src="images/curcuit-breaker.jpg" />
    </Slide>
    <Slide id="retry">
      <Title>Retry</Title>
      <List>
        <ListItem>Limit number of retries</ListItem>
        <ListItem>Apply exponential backoff</ListItem>
      </List>
    </Slide>
    <Slide id="fallbacks">
      <Title>Fallbacks</Title>
      <List>
        <ListItem>Stale local cache</ListItem>
        <ListItem>Another service</ListItem>
        <ListItem>Queue actions for later</ListItem>
      </List>
    </Slide>
    <Slide id="thank-you">
      <Title>Thank you!</Title>
      <Title>Enjoy beer.js</Title>
      <Image src="images/beerjs.png" />
    </Slide>
  </ThemedDeck>
);

export default Presentation;
