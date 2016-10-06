# Base docker image
FROM node:4.4.7
MAINTAINER <aristanetworks.com>

RUN apt-get update && apt-get install -y --no-install-recommends \
    apt-utils \
    cron \
 && rm -rf /var/lib/apt/lists/*

#ADD benchmark-cron /etc/cron.d/
ADD refresh_data.sh /root
ADD entrypoint.sh /root

#RUN chmod 0644 /etc/cron.d/benchmark-cron
RUN chmod +x /root/refresh_data.sh /root/entrypoint.sh

ADD . /opt/app

WORKDIR /opt/app/app/server/lib
RUN npm install

EXPOSE 7777

WORKDIR /root
CMD /root/entrypoint.sh >> /var/log/benchmark-run.log 2>&1
