import React from 'react';

class State extends React.Component {
    state = {
        name: 'andree',
        age: 20
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    /*
    JSX => return block
    in ra 2 div không có bọc ngoài => <React.Fragment> </React.Fragment>
    */
    handleClickButton = () => {
        alert('click me')

    }
    render() {

        return (
            <React.Fragment>
                {/* {console.log('my name is:',name)} */}

                <div className="First">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}

                    />
                </div>
                <div className="second">
                    my component, my name is {this.state.name}
                </div>
                <div className="third">
                    <button onClick={() => { this.handleClickButton() }}>Click me</button>
                </div>
            </React.Fragment>
        )
    }
}
export default State;

