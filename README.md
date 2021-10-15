# Metropolis-Health-App-Project-4

Health Clinic is planning to develop a web-based-system to maintain thier records using Node Js,Express and MongoDb

## TL;DR

- install all project dependencies with `npm install`
- start the development server with `npm start`

## SignUp-API

- [ ]     You need to give 4 key-value pair in the body of the API Like This:
          {
          "name":"",
          "email":"",
          "password":"",
          "passwordConfirm":"",
          "role":""
          }

## Verification-API

For This Verification Email Will Be Sent To You In The Given Email Address
Payload Of the Token Will Be:
{
id: " ",
status: true,
}

- For Now On Generated Token Will Be Saved in the Database
- But For Future You Should Provide It In The Header Of Api for authroized Access

## Login-API

- [ ]     You need to give 2 key-value pair in the body of the API Like This:
          {

"email":"",
"password":"",

}

- You need to save token for futher use
- Payload Of The login token contains:
  {
  id: " ",
  type/role:"",
  username: " ",

}

## Appoitnment-API

- [ ]     You need to give 1 key-value pair in the body of the API Like This:
          {
          "Time":"2021-04-25,10:00"
          }
          And The authroized token in the Header Of The Api Like This:
          key:"authorization"
          value:" token"

## Treatment-API

- [ ]     You need to give 1 key-value pair in the body of the API Like This:
          {
          "Treatment":""
          }

## Live Demo

- [ ]
