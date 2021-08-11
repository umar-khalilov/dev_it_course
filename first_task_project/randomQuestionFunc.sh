#!/bin/bash

randomQuestionFunc () {
read -p "Please write your question: " value

resolve="YES"
reject="NO"

GREEN="\e[32m"
RED="\e[31m"
ENDCOLOR="\e[0m"


randomNumber=$RANDOM
if(($randomNumber < 15000));then
echo -e "${GREEN}$resolve${ENDCOLOR}"
else
echo -e "${RED}$reject${ENDCOLOR}"
fi
}

result=$(randomQuestionFunc)
echo "The answer to your question: " $result
