FROM node
RUN apt-get update && apt-get install -y apt-utils cron
RUN apt-get --force-yes -y install nodejs
RUN npm install
RUN npm install node-mysql
ADD crontab /etc/cron.d/hello-cron
ADD CronScript.sh /root
RUN chmod 0644 /etc/cron.d/hello-cron
WORKDIR /opt/app
ADD . /opt/app
WORKDIR app/server/js/
EXPOSE 7777
WORKDIR /root
CMD cron && cd /opt/app/app/server/js && nodejs server.js
 
