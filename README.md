# Serverless Nodejs Rest API with TypeScript And Dynamo DB

This is a simple REST API example for AWS Lambda By Serverless framework with TypeScript and Dynamo DB.

## Use Cases

* REST API with typescript
* DynamoDB data storage
* Multi-environment management under Serverless
* AWS lambda function log view

## Invoke the function locally

```bash
$ sls invoke local --function find
```

## Deploy

### To Test it locally

* Run ```yarn``` to install all the necessary dependencies.
* Run ```yarn local``` use serverless offline to test locally. 

### Deploy on AWS, simply run:

```
$ yarn deploy

# or

$ sls deploy
```

## Usage

send an HTTP request directly to the endpoint using a tool like curl

```sh
$ curl https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/projects
```

## Scaling

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to 100. The default limit is a safety limit that protects you from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, follow the steps in [To request a limit increase for concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit).
