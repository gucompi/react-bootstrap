import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleClick = ()=>{
        this.props.handleToggle();
    }
    render() {
        return (
            <>  
                <p>Hola, este es el componente del boton</p>
                <button onClick={this.handleClick} className={this.props.classBoton} type="button">Primary button</button>
            </>
        );
    }
}

export default Button;
