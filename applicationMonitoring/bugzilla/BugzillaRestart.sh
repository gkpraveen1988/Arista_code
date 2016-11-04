#!/bin/bash
log_file='/home/dsilla-ext/startUpScripts/applicationMonitoring/bugzilla/BugzillaStatus.log'

# Creating the file if not present
if ! [ -f $log_file ]; then
   touch $log_file
fi
echo '-----------------------------------------' >> $log_file
echo `date +"%m-%d-%y %T"`' :Bugzilla Dashboard check application' >> $log_file

urlstatus=`curl -I http://us142.sjc.aristanetworks.com:2222 2>/dev/null | head -1 | cut -d$' ' -f2`
if [[ $urlstatus != 200 ]]; then
   echo `date +"%m-%d-%y %T"`' :Bugzilla Dashboard server not running,Trying to restart' >> $log_file
   echo `date +"%m-%d-%y %T"`' :Taking backup of log file' >> $log_file
   backupfile=$log_file'_nohup_'`date +"%m-%d-%y-%H-%M-%S"`
   cp /home/dsilla-ext/visualization/src/bugzillaDashBoard/nohup.out $backupfile
   cd /home/dsilla-ext/visualization/src/bugzillaDashBoard
   nohup ./runBugzillaServer > /dev/null 2>&1 &
   cd /home/dsilla-ext/startUpScripts/applicationMonitoring/bugzilla > /dev/null 2>&1 &
   echo `date +"%m-%d-%y %T"`' :Bugzilla Dashboard started successfully,checking URL again...' >> $log_file
   sleep 10s
   urlstatus=`curl -I http://us142.sjc.aristanetworks.com:2222 2>/dev/null | head -1 | cut -d$' ' -f2`
   if [[ $urlstatus == 200 ]]; then
    echo `date +"%m-%d-%y %T"`' :Bugzilla Dashboard URL accessible after restart' >> $log_file
    echo '-----------------------------------------' >> $log_file
   else  
    echo `date +"%m-%d-%y %T"`' :Bugzilla Dashboard still not accessbile, please check.. ' >> $log_file   
    echo '-----------------------------------------' >> $log_file
   fi
elif (( $(netstat -an | grep -w '0.0.0.0:2222'| wc -l) == 0 )); then
   echo `date +"%m-%d-%y %T"`' :Bugzilla Dashboard port (2222) not running,Trying to restart' >> $log_file
   echo `date +"%m-%d-%y %T"`' :Taking backup of log file' >> $log_file
   backupfile=$log_file'_'`date +"%m-%d-%y_%T"`
   cp $log_file $backupfile
   echo '-----------------------------------------' >> $log_file
   cd /home/dsilla-ext/visualization/src/bugzillaDashBoard
   nohup ./runBugzillaServer > /dev/null 2>&1 &
   cd /home/dsilla-ext/startUpScripts/applicationMonitoring/bugzilla > /dev/null 2>&1 &
   sleep 10s
   echo '-----------------------------------------' >> $log_file
   urlstatus=`curl -I http://us142.sjc.aristanetworks.com:2222 2>/dev/null | head -1 | cut -d$' ' -f2`
   if [[ $urlstatus == 200 ]]; then
    echo `date +"%m-%d-%y %T"`' :Bugzilla Dashboard URL accessible after restart' >> $log_file
   else  
    echo `date +"%m-%d-%y %T"`' :Bugzilla Dashboard still not accessbile, please check.. ' >> $log_file   
   fi
else
   echo `date +"%m-%d-%y %T"`' :Bugzilla Dashboard is running successfully...' >> $log_file
   echo '-----------------------------------------' >> $log_file
fi
