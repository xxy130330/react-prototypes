import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber(){
    const randomNum = Math.floor(Math.random()*1000)+1
    return randomNum;
}

const user = {
    name : 'Christin',
    luckyNumber : luckyNumber()
};

function Greeting(user) {

    const returnItem = (
        <div>
            <h1>Hello, my name is {user.name}!</h1>
            <h2 className = 'text-muted'>{user.name}'s luck number is {user.luckyNumber}!</h2>
        </div>
    );
    return returnItem;
}



ReactDOM.render(
    Greeting(user),
    document.getElementById('root')
);
