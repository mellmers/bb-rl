import React from "react";
import {connect} from "react-redux";

class Admin extends React.PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        console.log(this.props.user);
        return (
            <div className="container admin-view">
                <h1>Admin panel</h1>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...state
    };
}
export default connect(mapStateToProps)(Admin);