FROM node:4.4.7  
MAINTAINER <aristanetworks.com>
RUN apt-get update && apt-get install -y --no-install-recommends \
    apt-utils \
    cron \
 && rm -rf /var/lib/apt/lists/*
ADD crontab /etc/cron.d/hello-cron
ADD CronScript.sh /root
ADD start.sh /root
RUN chmod 0644 /etc/cron.d/hello-cron
RUN chmod 777 /root/CronScript.sh /root/start.sh
ADD . /opt/app
WORKDIR /opt/app/app/server/lib
RUN npm install
EXPOSE 7777
WORKDIR /root
CMD cron && ./start.sh >> /var/log/benchmark-run.log 2>&1
 
