import React, {Component} from "react";
import Portal from "../Components/portal";

export default class Modal extends Component{
    render(){
        const {children, toogle, active} = this.props;
        return(
            <Portal>
                {active     && (
                    <div style={style.wrapper}>
                        <div style={style.window}>
                            <p>hola</p>
                            <button onClick={toogle} style={style.closeBrn} >X</button>
                    </div>
                </div>
                )}
            </Portal>
            )
    }
}

const style = {
    wrapper:{
        position: "aboslute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    window:{
        position: "relative",
        background: "#fff",
        borderRadius: 5,
        padding: 20,
        boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        zIndex: 1000,
        minWidth: 300,
    },

    closeBtn:{
        position: "absolute",
        top: 0,
        right: 0,
    }
};