import React from 'react';

import {
  BlockQuote,
  Cite,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import {
  ThemedDeck,
  Title,
} from './utils';

const Presentation = () => (
  <ThemedDeck>
    <Slide id="title">
      <Title>Resilient JavaScript APIs</Title>
    </Slide>
    <Slide id="about-me">
      <Title>Hi, I'm Misho</Title>
    </Slide>
    <Slide id="resilience">
      <Title>Resilience</Title>
    </Slide>
    <Slide id="million-way-to-fail">
      <Slide>
        <Title>A million ways to fail on the web</Title>
      </Slide>
    </Slide>
    <Slide id="clean-code">
      <Title>Clean code is resilient code</Title>
    </Slide>
    <Slide id="predictability">
      <Title>Predictability</Title>
    </Slide>
    <Slide id="death-before-confusion">
      <Title>Death before confusion</Title>
    </Slide>
    <Slide id="tests">
      <Title>Tests increase resilience</Title>
    </Slide>
    <Slide id="plan-for-failure">
      <Title>Plan for failure</Title>
    </Slide>
    <Slide id="metrics">
      <Title>Metrics</Title>
    </Slide>
    <Slide id="monitoring">
      <Title>Monitoring</Title>
    </Slide>
    <Slide id="alerting">
      <Title>Alerting</Title>
    </Slide>
    <Slide id="healthcheck">
      <Title>Healthchecks</Title>
    </Slide>
    <Slide id="operations">
      <Title>Operations</Title>
    </Slide>
    <Slide id="run-books">
      <Title>Run books</Title>
    </Slide>
    <Slide id="auto-recovery">
      <Title>Recovery</Title>
    </Slide>
    <Slide id="fail-fast">
      <Title>Fail fast</Title>
    </Slide>
    <Slide id="backpressure">
      <Title>Backpressure</Title>
    </Slide>
    <Slide id="blocking-the-thread">
      <Title>Blocking the thread</Title>
    </Slide>
    <Slide id="auto-scaling">
      <Title>Scaling</Title>
    </Slide>
    <Slide id="theory-of-constraints">
      <Title>Theory of constraints</Title>
    </Slide>
    <Slide id="circuit-breaker">
      <Title>Circuit breaker</Title>
    </Slide>
    <Slide id="retry">
      <Title>Retry</Title>
    </Slide>
    <Slide id="fallback">
      <Title>Fallback</Title>
    </Slide>
    <Slide id="cap-theorem">
      <Title>CAP theorem</Title>
    </Slide>
    <Slide id="thank-you">
      <Title>Thank you!</Title>
      <Title>Enjoy beer.js</Title>
    </Slide>
  </ThemedDeck>
);

export default Presentation;
