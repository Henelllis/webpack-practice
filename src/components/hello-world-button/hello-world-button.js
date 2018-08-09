import './hello-world-button.scss';

class HelloWorldButton  {

    //buttonCssClass= 'hello-world-button';
    buttonCssClass= 'hello-world-button';
    render() {
        const     buttonCssClass= 'hello-world-button';

        const button = document.createElement('button');
        button.innerHTML = 'Hello world';
        console.log('DOES THIS WORK, ', buttonCssClass);
        button.classList.add(buttonCssClass); 
        const body = document.querySelector('body');

        button.onclick= () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }

        
        //button.classList.add('hello-world-button'); 

        body.appendChild(button);
    }
}


export default HelloWorldButton