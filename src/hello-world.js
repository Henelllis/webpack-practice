import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Header from './components/heading/heading';
import React from 'react';


const helloWorldButton = new HelloWorldButton();
const header = new Header();

header.render('Hello world');
helloWorldButton.render();
//addImage();

if (process.env.NODE_ENV === 'production'){
    console.log('PRODUCTION MODE');
} 
else if(process.env.NODE_ENV === 'development') {
    console.log('DEV MODE');
}
console.log('HELLLLLLO FRIEND');
helloWorldButton.methodThatDoesNotExist();

