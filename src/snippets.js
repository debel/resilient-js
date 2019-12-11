
export const statsd = (
`statsd.increment('requests.counter', 1);
statsd.timing('request.processing', startTime);
statsd.gauge('users.active', currentUsers);`);

export const bosun = (
`alert sessions_limit {
  macro = victorOps
  template = generic
  $current_sessions = max(q("sum:backend.sessions.scur", "5m", ""))
  $session_limit = max(q("sum:backend.sessions.slim", "5m", ""))
  $q = ($current_sessions / $session_limit) * 100
  warn = $q > 80
  crit = $q > 95
}`);

export const healthcheck = (
`api.get('/healthcheck/shallow', (req, res) =>
  res.status(200).send('API is up and running');
);`);

export const deepHealthCheck = (
`api.get('/healthcheck/deep', (req, res) => {
  Promise.all(depenencies.map(dep => dep.callHealthCheck()))
    .then(allGood => res.status(200).send('API up, depenencies OK'))
    .catch(problems => res.status(500).send('Depenencies are failing'));
})`);

export const backpressureOnLag = (
`const backpressureOnLag = (threshold, resolution = 250) => {
  const getEventLoopLag = eventLoopLagTimer(resolution);
  return (req, res, next) => {
    const lag = getEventLoopLag();
    if (lag > threshold) next(new Error('event loop too busy'))
    else next();
  };
}`);

export const healthcheckWithLag = (
`api.get('/healthcheck/withLag', (req, res) => {
  const lag = getEventLoopLag();
  if (lag > appConfig.threshold) {
    res.status(500).send('Event loop is too busy');
  }
  else {
    res.status(200).send('Event loop lag normal');
  }
});`);


export const circuitBreaker = (
`const fetchSomeData = (id) =>
  if (dependencyHealthCheck.isUp === true) {
    return fetch(\`\${dependencyURL}/\${id}\`);
  } else if (localCache[id].isValid === true) {
    return Promise.resolve(localCache[id]);
  } else {
    return queueAction(fetchSomeData.bind(id));
  }
};`);
