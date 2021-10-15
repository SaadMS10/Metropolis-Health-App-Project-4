# Metropolis-Health-App-Project-4

Health Clinic is planning to develop a web-based-system to maintain thier records using Node Js,Express and MongoDb
Read This File For APIS
- install all project dependencies with `npm install`
- start the development server with `npm start`

## SignUp-API

- POST [https://stark-brushlands-13971.herokuapp.com/healthclinicapi/v1/users/signup ]     
- You need to give 4 key-value pair in the body of the API Like This:
          {
          "name":"",
          "email":"",
          "password":"",
          "passwordConfirm":"",
          "role":""
          }

## Verification-API
- GET [https://stark-brushlands-13971.herokuapp.com/healthclinicapi/v1/users/authenticate/token]  

For This Verification Email Will Be Sent To You In The Given Email Address
Payload Of the Token Will Be:
{
id: " ",
status: true,
}

- For Now On Generated Token Will Be Saved in the Database
- But For Future You Should Provide It In The Header Of Api for authroized Access

## Login-API

- PATCH [https://stark-brushlands-13971.herokuapp.com//healthclinicapi/v1/users/login ]    
- You need to give 2 key-value pair in the body of the API Like This:
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

## Appointnment-API

- POST [https://stark-brushlands-13971.herokuapp.com//healthclinicapi/v1/appointments]     You need to give 1 key-value pair in the body of the API Like This:
          {
          "Time":"2021-04-25,10:00"
          }
          And The authroized token in the Header Of The Api Like This:
          key:"authorization"
          value:" token"
          
 - GET [https://stark-brushlands-13971.herokuapp.com/healthclinicapi/v1/appointments ]  To Get All Appointments
 - GET [https://stark-brushlands-13971.herokuapp.com/healthclinicapi/v1/appointments/id ]  To Get One Appointment
 - PATCH [https://stark-brushlands-13971.herokuapp.com/healthclinicapi/v1/appointments/id ]  To Update One Appointment
 - DELETE [https://stark-brushlands-13971.herokuapp.com//healthclinicapi/v1/appointment/id ]  To Delete Appointment

## Treatment-API

-  GET [https://stark-brushlands-13971.herokuapp.com/healthclinicapi/v1/treatments]      
-  You need to give 1 key-value pair in the body of the API Like This:
          {
          "Treatment":""
          }
                And The authroized token in the Header Of The Api Like This:
          key:"authorization"
          value:" token"

 - GET [https://stark-brushlands-13971.herokuapp.com/healthclinicapi/v1/treatments]  To Get All Treatment
 - GET [https://stark-brushlands-13971.herokuapp.com/healthclinicapi/v1/apointments/id ]  To Get One Treatment
 - PATCH [https://stark-brushlands-13971.herokuapp.com/healthclinicapi/v1/apointments/id ]  To Update One Treatment
 - DELETE [https://stark-brushlands-13971.herokuapp.com//healthclinicapi/v1/appointment/id ]  To Delete Treatment
