#! /bin/bash
# Git Hard Reset

git fetch
git pull origin master

git reset --hard origin/master
