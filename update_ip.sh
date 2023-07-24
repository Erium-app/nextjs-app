#!/bin/bash

while true; do

# Get the current IP address of the server
NEW_IP=$(ip addr show | awk '/inet .* global/{split($2,a,"/"); print a[1]; exit}')

DOMAIN="erium.local"
HOSTS_FILE="/etc/hosts"

sudo sed -i "/$DOMAIN/d" $HOSTS_FILE

echo "$NEW_IP $DOMAIN" | sudo tee -a $HOSTS_FILE

    # Wait for 5 seconds
    sleep 1
done
