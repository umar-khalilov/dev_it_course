#!/bin/bash

read -p "Please input your IP: " ipAddress
read -p "Please input domain name: " hostName

matchesInHosts="$(grep -n $hostName /etc/hosts | cut -f1 -d:)"

ipAndDomain="${ipAddress} ${hostName}"

echo "Please enter your password for confirmation"

# shellcheck disable=SC2204
# shellcheck disable=SC1105
if (( ! -z "$matchesInHosts"))
then
 echo "Updating existing Ip and Domain"
 while read -r lineNumber; do
 	sudo sed -i '' "${lineNumber}s/.*/${ipAndDomain} /" /etc/hosts
 done <<< "$matchesInHosts"
 else
	echo "Adding new Ip and Domain"
	echo $ipAndDomain | sudo tee -a /etc/hosts > /dev/null
fi

GREEN="\e[32m"
ENDCOLOR="\e[0m"
echo -e "${GREEN}Success${ENDCOLOR}"
