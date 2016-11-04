#!/bin/bash
log_file='/home/dsilla-ext/startUpScripts/applicationMonitoring/abuild/abuildrestart.log'

# Creating the file if not present
if ! [ -f $log_file ]; then
   touch $log_file
fi
echo '-----------------------------------------' >> $log_file
echo `date +"%m-%d-%y %T"`' :Abuild Dashboard check application' >> $log_file

urlstatus=`curl -I http://us142.sjc.aristanetworks.com:7000 2>/dev/null | head -1 | cut -d$' ' -f2`
if [[ $urlstatus != 200 ]]; then
   echo `date +"%m-%d-%y %T"`' :Abuild Dashboard server not running,Trying to restart' >> $log_file
   echo `date +"%m-%d-%y %T"`' :Taking backup of log file' >> $log_file
   backupfile=$log_file'_nohup_'`date +"%m-%d-%y-%H-%M-%S"`
   cp /home/dsilla-ext/visualization/src/AbuildDashboard/app/server/js/nohup.out $backupfile
   cd /home/dsilla-ext/visualization/src/AbuildDashboard/app/server/js
   nohup ./runServer > /dev/null 2>&1 &
   cd /home/dsilla-ext/startUpScripts/applicationMonitoring/abuild > /dev/null 2>&1 &
   echo `date +"%m-%d-%y %T"`' :Abuild Dashboard started successfully,checking URL again...' >> $log_file
   sleep 10s
   urlstatus=`curl -I http://us142.sjc.aristanetworks.com:7000 2>/dev/null | head -1 | cut -d$' ' -f2`
   if [[ $urlstatus == 200 ]]; then
    echo `date +"%m-%d-%y %T"`' :Abuild Dashboard URL accessible after restart' >> $log_file
    echo '-----------------------------------------' >> $log_file
   else  
    echo `date +"%m-%d-%y %T"`' :Abuild Dashboard still not accessbile, please check.. ' >> $log_file   
    echo '-----------------------------------------' >> $log_file
   fi
elif (( $(netstat -an | grep -w '0.0.0.0:7000'| wc -l) == 0 )); then
   echo `date +"%m-%d-%y %T"`' :Abuild Dashboard port (7000) not running,Trying to restart' >> $log_file
   echo `date +"%m-%d-%y %T"`' :Taking backup of log file' >> $log_file
   backupfile=$log_file'_'`date +"%m-%d-%y_%T"`
   cp $log_file $backupfile
   echo '-----------------------------------------' >> $log_file
   cd /home/dsilla-ext/visualization/src/AbuildDashboard/app/server/js
   nohup ./runServer > /dev/null 2>&1 &
   cd /home/dsilla-ext/startUpScripts/applicationMonitoring/abuild > /dev/null 2>&1 &
   sleep 10s
   echo '-----------------------------------------' >> $log_file
   urlstatus=`curl -I http://us142.sjc.aristanetworks.com:7000 2>/dev/null | head -1 | cut -d$' ' -f2`
   if [[ $urlstatus == 200 ]]; then
    echo `date +"%m-%d-%y %T"`' :Abuild Dashboard URL accessible after restart' >> $log_file
   else  
    echo `date +"%m-%d-%y %T"`' :Abuild Dashboard still not accessbile, please check.. ' >> $log_file   
   fi
else
   echo `date +"%m-%d-%y %T"`' :Abuild Dashboard is running successfully...' >> $log_file
   echo '-----------------------------------------' >> $log_file
fi
