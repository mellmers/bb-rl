import React from "react";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";

class Admin extends React.PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="view full-container" style={{ paddingTop: "0" }}>
                <Helmet><title>Admin - BattleBulls</title></Helmet>
                <iframe
                    src="http://localhost:3001/"
                    style={{
                        width: "100%",
                        height: "calc(100vh - 62px)",
                        border: "none"
                    }}
                />
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
