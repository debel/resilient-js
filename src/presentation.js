import React from 'react';

import {
  Image,
  Layout,
  ListItem,
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
      <Title className="huge-title">Resilient<br/><span className="text-red">JavaScript</span><br/>APIs</Title>
    </Slide>
    <Slide id="about-me">
      <Title>Hi, I'm Misho</Title>
      <Layout>
        <Image src="images/rick-juggling.gif" />
        <List>
          <ListItem>Engineering Manager @SumUp</ListItem>
          <hr/>
          <ListItem>Rick and Morty fan</ListItem>
          <hr/>
          <ListItem>Board Game Geek</ListItem>
          <hr/>
          <ListItem>Juggler</ListItem>
        </List>
      </Layout>
    </Slide>
    
    <Slide id="beach-bugs">
      <Title>Reality</Title>
      <Image className="big" src="images/beach-bugs.jpeg" />
    </Slide>
    <Slide id="resilience">
      <Title>Resilience</Title>
      <Text fit>
        being able to withstand or recover quickly from difficult conditions
      </Text>
    </Slide>
    <Slide id="million-way-to-fail-meme">
    <Slide>
      <Title fit>A million ways to fail on the web</Title>
      <Image src="images/west-ice.jpeg" />
    </Slide>
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
    <Slide id="plan-for-failure">
      <Title>Plan for failure</Title>
      <Image className="big" src="images/gilf.jpeg" />
    </Slide>
    <Slide id="readable-code">
      <Title fit>Readable code is (more) resilient code</Title>
      <Image className="big" src="images/Uncle_Bob.png" />
    </Slide>
    <Slide id="death-before-confusion">
      <Title>Death before confusion</Title>
      <Image className="big" src="images/Crockford.jpg" />
    </Slide>
    <Slide id="fail-fast">
      <Title>Better to fail fast</Title>
      <Image src="images/broken-image-icon.gif" width="20%" />
      <Text></Text>
    </Slide>
    <Slide id="tests">
      <Title>Tests increase predictability</Title>
      <Image className="big" src="images/testing.png" />
    </Slide>
    <Slide id="tests-2">
      <Title>Tests increase predictability</Title>
      <Image className="big offset-top" src="images/testing.png" />
    </Slide>
    
    <Slide id="metrics-code">
      <Title>Metrics</Title>
      <Text fit>You cannot improve what you cannot measure</Text>
      <CodeJS src={snippets.prometeus} />
    </Slide>
    <Slide id="metrics-diatlov">
      <Title>Metrics</Title>
      <Image className="big" src="images/diatlov.jpg" />
    </Slide>
    
    <Slide id="monitoring">
      <Title>Monitoring</Title>
      <Text fit>Have visibility over the actual performance of your system</Text>
      <Image className="big" src="images/grafana.png" />
    </Slide>
    <Slide id="monitoring-meme">
      <Image className="big" src="images/monitoring-wrong.jpeg" />
    </Slide>
    <Slide id="monitoring-golden-signals">
      <Title>Monitoring</Title>
      <Text>The four golden signals</Text>
      <Image src="images/golden_signals.webp" />
    </Slide>
    <Slide id="monitoring-meme-2">
      <Image className="big" src="images/monitoring-right.jpeg" />
    </Slide>
    
    <Slide id="alerting">
      <Title>Alerting</Title>
      <Text fit>Automate the need to actively monitor data</Text>
      <CodeJS src={snippets.bosun} />
    </Slide>
    <Slide id="alerting-meme">
      <Title>Alerting</Title>
      <Image className="offset-mid" src="images/alerting-doomsday.jpeg" />
    </Slide>
    
    <Slide id="choices-1">
      <Image src="images/hope-and-pray.jpeg" />
    </Slide>
    <Slide id="choices-2">
      <Image width="90%" src="images/hope-and-pray-turn.jpeg" />
    </Slide>
    <Slide id="choices-3">
      <Image width="75%" src="images/right-thing-drake.jpeg" />
    </Slide>
    
    <Slide id="healthcheck">
      <Title>Healthchecks</Title>
      <Text fit>The system should be able to express its own state</Text>
      <Image className="big" src="images/healthcheck.png" />
    </Slide>
    <Slide id="types-of-healthchecks">
      <Title>Types of healthchecks</Title>
      <List>
        <ListItem>Startup checks</ListItem>
        <ListItem>Liveness checks</ListItem>
        <ListItem>Readiness checks</ListItem>
      </List>
    </Slide>
    <Slide id="liveness-healthcheck">
      <Title>Liveness healthcheck</Title>
      <Text fit>Is the service accessible? Can it receive traffic?</Text>
      <CodeJS src={snippets.healthcheck} />
    </Slide>
    <Slide id="deep-healthcheck">
      <Title>Readiness healthcheck</Title>
      <Text fit>Is the service operational? Should it receive traffic?</Text>
      <CodeJS src={snippets.deepHealthCheck} />
    </Slide>

    <Slide id="operations">
      <Title>Ops team</Title>
      <Text fit>Respect the people who keep your code running</Text>
      <Image className="big" src="images/ops-team.jpg" />
    </Slide>
    <Slide id="run-books">
      <Title>Run books</Title>
      <Text fit>Extensive and accurate documentation is critical</Text>
      <Image className="big" src="images/documentation.jpg" />
    </Slide>
    <Slide id="incident-learning">
      <Title>Incident learning debriefs</Title>
      <List>
        <ListItem>Learn from your mistakes</ListItem>
        <ListItem>Do NOT repeat previous mistakes</ListItem>
        <ListItem>Reparative, preventative and strategic actions</ListItem>
      </List>
    </Slide>
    <Slide id="incident-learning-meme">
      <Title>Incident learning debriefs</Title>
      <Image className="big" src="images/learn-from-mistakes.jpeg" />
    </Slide>
    
    <Slide id="auto-recovery">
      <Title>Recovery</Title>
      <Text>Simple solutions can be effective</Text>
      <Image className="big" src="images/restart.jpg" />
    </Slide>
    <Slide id="load-balancing">
      <Title>Load balancing</Title>
      <Text>Spread the load over multiple instances</Text>
      <Image src="images/load-balancer-diagram.png" />
    </Slide>
    <Slide id="auto-scaling">
      <Title>Scaling</Title>
      <Text>Allow your application to scale with the load</Text>
      <Image src="images/autoscaling-group.png" />
    </Slide>
    <Slide id="gree-blue">
      <Title>Blue/Green deployment</Title>
      <Text>Reduce failure from newly introduced bugs</Text>
      <Image width="70%" src="images/blue-green.png" />
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
        <ListItem>Block-listing</ListItem>
        <ListItem>Bots and scrappers</ListItem>
        <ListItem>Malicious actors</ListItem>
      </List>
    </Slide>
    <Slide id="backpressure">
      <Title>Backpressure</Title>
      <Image className="big" src="images/backpressure.png" />
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
    <Slide id="circuit-breaker-example">
      <Title>The circuit breaker pattern</Title>
      <CodeJS src={snippets.circuitBreaker} />
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
      <Text>Enjoy your</Text>
      <Image src="images/beerjs.png" />
      <Text textSize="small">[beer.js]</Text>
    </Slide>
  </ThemedDeck>
);

export default Presentation;
