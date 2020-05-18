# aws-cost-optimizer

## Runbook - Add and manage apps

## Add new App

``` bash
cd cloudmanager
python manage.py startapp <AppName>
```

## Update App

``` bash
cd cloudmanager
python manage.py makemigrations <AppName>
```

### Run server

``` bash
cd cloudmanager
python manage.py runserver
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
