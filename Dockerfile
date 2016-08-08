FROM node
RUN apt-get update && apt-get install -y apt-utils cron
RUN apt-get --force-yes -y install nodejs
RUN npm install node-mysql
ADD crontab /etc/cron.d/hello-cron
ADD CronScript.sh /root
ADD start.sh /root
RUN chmod 0644 /etc/cron.d/hello-cron
RUN chmod 700 /root/CronScript.sh
RUN chmod 700 /root/start.sh
WORKDIR /opt/app
ADD . /opt/app
WORKDIR app/server/js/
EXPOSE 7777
WORKDIR /root
CMD cron && ./start.sh
 
