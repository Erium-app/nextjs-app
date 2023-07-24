#!/bin/bash

# Function to update password
updatePassword() {
    username=$1
    current_password=$2
    new_password=$3

    # Change the password using passwd command
    echo -e "$current_password\n$new_password\n$new_password" | passwd $username

    # Check if password update was successful
    if [ $? -eq 0 ]; then
        echo "Password updated successfully for user $username."
        exit 0
    else
        echo "Failed to update password for user $username."
        exit 1
    fi
}

# Check if all three arguments are provided
if [ $# -ne 3 ]; then
    echo "Usage: ./updatePassword.sh <username> <current_password> <new_password>"
    exit 1
fi

# Call the function to update the password
updatePassword "$1" "$2" "$3"
