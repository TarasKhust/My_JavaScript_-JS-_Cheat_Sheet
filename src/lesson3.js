/*
import * as BadApi from './lesson3/api-callback';

import {mathOp} from './lesson3/math';

function mathRun(){
    try{
        let a = mathOp(1, 2, '+') + mathOp(1, parseInt(Math.random() * 2), '/');
        console.log(a);
        return a;
    }
    catch(e){
        console.log(e.message);
        console.log(e.stack);
    }
    finally{
        console.log('math finnaly');
    }

    console.log('math done');
}

mathRun();


let some = new Promise(function(resolve, reject){
    window.setTimeout(() => {
        let num = Math.random();
        num > 0.5 ? resolve(num) : reject(`${num} less than 0.5`);
    }, 200);
    
});

console.log(some)

some.then((res) => {
    console.log('good! ' + res);
}, (err) => {
    console.log(err);
});


BadApi.userReg((res) => {
    console.log(res);

    BadApi.userAuth(res.id, (resAuth) => {
        console.log(resAuth);

        BadApi.userData(resAuth.token, (resData) => {
            console.log(resData);
        }, (e) => {
            console.log(e.msg);
        })
    }, (e) => {
        console.log(e.msg);
    });
}, (e) => {
    console.log(e.msg);
});

*/
/*
import * as PromiseApi from './lesson3/api-promise';

PromiseApi.userReg()
          .then((regRes) => {
                console.log(regRes);
                return PromiseApi.userAuth(regRes.id);
           })
           .then((authRes) => {
                console.log(authRes);
                return PromiseApi.userData(authRes.token);
           })
           .then((dataRes) => {
                console.log(dataRes);
           })
           .catch((e) => {
                console.log(e.msg);
           });
*/

import 'babel-polyfill';

import * as AsyncApi from './lesson3/api-async';

async function UserProccess(){
    let regRes = await AsyncApi.userReg();
    console.log(regRes);

    let authRes = await AsyncApi.userAuth(regRes.id);
    console.log(authRes);

    let dataRes = await AsyncApi.userData(authRes.token);
    console.log(dataRes);
    
    return dataRes.data;
}

UserProccess().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err.message);
});