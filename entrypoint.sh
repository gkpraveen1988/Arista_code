#!/usr/bin/env bash

# Start cron in daemon mode
cron

# Kickstart cron processing
sleep 3
touch /etc/crontab /etc/cron.d/*

# Start application
cd /opt/app/app/server/js/
node server.js
