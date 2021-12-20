import React from "react";
import './inputText.css'

class InputText extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:""
        };
    }

    updateVal=(e)=>{
        this.setState({
            value:e.target.value
        })
    }

    submitList=(e)=>{
        if(e.key=="Enter"){
            this.props.addList(this.state.value);
            this.setState({
                value:""
            })
        }
    }

    render(){
        return(
            <div className="inputt">

                <input value={this.state.value} type="text" placeholder="type what you want?" onKeyPress={this.submitList} onChange={this.updateVal}/>
            </div>
        )
    }

}
export default InputText;
