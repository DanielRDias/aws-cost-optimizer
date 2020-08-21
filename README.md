# I am not working on this project at the moment since most of the features I was working on are now part of [AWS Compute Optimizer](https://aws.amazon.com/compute-optimizer/)

# aws-cost-optimizer

## Development setup

### Get Started

Install requirements

``` bash
npm install
pipenv install
```

Start webpack

``` bash
npm run dev
```

Build production webpack

``` bash
npm run build
```

Start Django server

``` bash
python cloudmanager/manage.py runserver
```

## Runbook - Add and manage Django Apps

## Add new Django App

``` bash
python cloudmanager/manage.py startapp <AppName>
```

## Migrate Django App

``` bash
python cloudmanager/manage.py makemigrations <AppName>
```

### Run Django server

``` bash
python cloudmanager/manage.py runserver
```

``` text
Watching for file changes with StatReloader
Performing system checks...
System check identified no issues (0 silenced).
May 18, 2020 - 19:27:05
Django version 3.0.6, using settings 'cloudmanager.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

### API

Examples:

Create account

``` bash
curl --location --request POST 'localhost:8000/api/awsoptimizer/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "example",
    "email": "example@example.org",
    "accountid": "012345678912",
    "account_name": "aws1140"
}'
```

Get all accounts

``` bash
curl --location --request GET 'localhost:8000/api/awsoptimizer/'
```

Get account id 1

``` bash
curl --location --request GET 'localhost:8000/api/awsoptimizer/1'
```

Delete account id 2

``` bash
curl --location --request DELETE 'localhost:8000/api/awsoptimizer/2/'
```
