
export const statsd = (
`statsd.increment('requests.counter', 1);
statsd.timing('request.processing', startTime);
statsd.gauge('users.active', currentUsers);`);

export const prometeus = (
`const reqCounter = new prometheus.Counter({ name: 'Requests' });
reqCounter.inc();

const usersGauge = new prometheus.Gauge({
  name: 'Active Users'
});
usersGauge.set(currentlyActiveUsers);`);

export const bosun = (
`alert sessions_limit {
  macro = victorOps
  template = generic
  $sessions = max(q("sum:backend.sessions.scur", "5m", ""))
  $session_limit = max(q("sum:backend.sessions.slim", "5m", ""))
  $q = ($sessions / $session_limit) * 100
  warn = $q > 80
  crit = $q > 95
}`);

export const healthcheck = (
`api.get('/healthcheck/live', (req, res) =>
  res.status(200).send('API is up and running');
);`);

export const deepHealthCheck = (
`api.get('/healthcheck/ready', (req, res) => (
  Promise.all(depenencies.map(dep => dep.callHealthCheck()))
    .then(allGood =>
      res.status(200).send('API up, depenencies OK'))
    .catch(problems => 
      res.status(500).send('Depenencies are failing'));
))`);

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
`const fetchSomeData = (id) => {
  if (localCache[id].isValid() === true) {
    return Promise.resolve(localCache[id].getData());
  } else if (dependencyHealthCheck.isUp() === true) {
    return dependency.fetchData(id);
  } else {
    return queueActionForLater(fetchSomeData.bind(id));
  }
};`);
