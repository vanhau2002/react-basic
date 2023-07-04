import React from 'react';
import Childcomponent from './Childcomponent';
class Mycomponents extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

    handleChangefirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })

    }
    handleChangelastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()  //ngăn chặn default của submit
        console.log('-> check data: ', this.state)
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangefirstName(event)}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangelastName(event)}

                    /><br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <Childcomponent
                    name={'Andree Right Hand'}
                    age={20}
                />

            </>
        )
    }
}
export default Mycomponents;

