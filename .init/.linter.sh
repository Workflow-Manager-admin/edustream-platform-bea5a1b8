#!/bin/bash
cd /home/kavia/workspace/code-generation/edustream-platform-bea5a1b8/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

