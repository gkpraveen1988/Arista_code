FROM node:4.4.7  
MAINTAINER <aristanetworks.com>
RUN apt-get update && apt-get install -y apt-utils cron
ADD crontab /etc/cron.d/hello-cron
ADD CronScript.sh /root
ADD start.sh /root
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN chmod 0644 /etc/cron.d/hello-cron
WORKDIR /opt/app
ADD . /opt/app
RUN cp -a /tmp/node_modules /opt/app/app/server/lib/
RUN chmod 777 /root/CronScript.sh /root/start.sh
EXPOSE 7777
WORKDIR /root
CMD cron && ./start.sh
 
