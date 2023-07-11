import React, { Component } from 'react';

const apiUrl= "https://612h5hpj38.execute-api.us-east-1.amazonaws.com/dev";

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
