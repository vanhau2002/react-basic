import React from 'react';

class Childcomponent extends React.Component {



    render() {
        console.log('>>> call render: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age } = this.props //cách props ngắn gọn
        return (
            <>
                <div>Childcomponent: {name} - {age}</div>
            </>
        )
    }
}
export default Childcomponent;

