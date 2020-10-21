import React from 'react';
import Button from './Button';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classBoton:"primary",
            showCard: true
        };
    }
    handleToggle = ()=>{
        this.setState({classBoton: (this.state.classBoton === "primary" ? "secondary" : "primary")});
        this.setState({showCard:!this.state.showCard});
    }
    render() {
        return (
            <>
                {this.state.showCard && (
                    <div className="card text-white bg-danger" style={{ maxWidth: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">Saludo!!!!</h5>
                        </div>
                    </div>
                )}
                <Button hola="holaaaa" handleToggle={this.handleToggle} classBoton={`btn btn-lg btn-${this.state.classBoton}`} ></Button>
                {/* <button onClick={this.handleToggle} type="button" className={`btn btn-lg btn-${this.state.classBoton}`}>Primary button</button> */}
            </>
        );
    }
}

export default Toggle;
