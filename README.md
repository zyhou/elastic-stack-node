# stack-docker-node

This example Docker Compose configuration demonstrates many components of the
Elastic Stack, all running on a single machine under Docker.
I use [https://github.com/elastic/stack-docker](https://github.com/elastic/stack-docker) to boostrap the project.

## Starting the stack

Try `docker-compose up` to create a demonstration Elastic Stack with
Elasticsearch, Kibana, Logstash, Auditbeat, Metricbeat, Filebeat, Packetbeat,
and Heartbeat.

Point a browser at [`http://localhost:5601`](http://localhost:5601) to see the results.

Log in with `elastic` / `changeme`.

## Node

At the moment you can launch `node src/index.js` and see the APM data in Kibana.

## Todo list

- [ ] Add node in container
- [ ] Put winston file log in /var/log
- [ ] Test with filebeat and Kibana the log file

