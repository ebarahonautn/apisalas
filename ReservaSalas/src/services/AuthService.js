import React, { Component } from 'react';

//const apiUrl= "http://localhost:3006/api/auth";
const apiUrl= process.env.REACT_APP_AUTH_URL ? process.env.REACT_APP_AUTH_URL : 'http://localhost:3006/api/auth';
console.log(process.env.REACT_APP_AUTH_URL);
console.log(apiUrl);

class AuthService extends React.Component{
    
    authUserFromApi = (values)=> new Promise((resolve, reject)=>{
          fetch(apiUrl,
                {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                })
            .then(respuesta => respuesta.json())
            .then(
              (resultado) => {
                if(resultado.success){
                    reject(resultado);
                }else{
                    resolve(resultado);
                }                
              },
              // Manejo de errores
              (errores) => {
                reject(errores);
              }
            );
    })
}

export default AuthService;