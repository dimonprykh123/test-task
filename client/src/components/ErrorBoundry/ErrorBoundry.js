import React from "react";

class ErrorBoundry extends React.Component{

    state={
        error:false
    }
    componentDidCatch(error, errorInfo) {
            this.setState({error:true})
    }
    render() {
        const {error} = this.state
        console.log(error)
        if(error){
            return(
                <div>
                    Your data is loading to base , please wait log from server and then - refresh the page!
                </div>
            )
        }
        return (
            this.props.children
        )
    }

}
export default ErrorBoundry