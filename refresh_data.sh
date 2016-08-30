#!/usr/bin/env bash

PATH=$PATH:/usr/local/bin

echo -e "\n[ Starting data refresh at `date` ]"

cd /opt/app/app/server/js/ && node benchmarkDashboard_Process.js
