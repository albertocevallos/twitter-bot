<!--
title: 'Twitter Bot for Web3 Projects'
description: 'This is simple REST API powered by a AWS Lambda and Serverless framework.'
layout: Doc
framework: v1
platform: NA
language: nodeJS
priority: 10
authorLink: 'https://github.com/albertocevallos'
authorName: 'Alberto Cevallos'
authorAvatar: 'https://avatars.githubusercontent.com/u/27132021?v=4'
-->

# Twitter Bot

This repo contains a simple bot for interacting with the Twitter v2 API. It is powered by AWS Lambda and Serverless framework.

## Also supports

- REST API with typescript
- Multi-environment management under Serverless
- Mocha unit tests and lambda-tester interface test
- AWS lambda function log view

## Invoke the function locally

```bash
serverless invoke local --function find
```

Which should result in:

```bash
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.

{
    "statusCode": 200,
    "body": "{\"code\":0,\"message\":\"success\",\"data\":[{\"_id\":\"5dff21f71c9d440000a30dad\",\"createdAt\":\"2020-05-16T09:27:51.219Z\"},{\"_id\":\"5dff22ba1c9d440000a30dae\",\"createdAt\":\"2020-05-16T09:27:51.220Z\"}]}"
}
```

## Deploy

### To Test It Locally

- Run `npm install` to install all the necessary dependencies.
- Run `npm run local` use serverless offline to test locally.

### Deploy on AWS, simply run:

```
$ npm run deploy

# or

$ serverless deploy
```
