import React, {Component} from 'react';
import Example from "./Example";
import {withPrefix} from "gatsby"


class Examples extends Component {

    render() {
        return (
            <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
                <Example src={withPrefix("/example1.png")} url={"https://github.com/BoddepallyVenkatesh06"}
                         text={"Here is my profile on the GitHub " +
                         "service, where I have add icons generated with this site. On a daily basis " +
                         "I try to make World a better place using SD 🌎 💥 🤣"}/>
                {/*<Example src={example1} url={"https://github.com/BoddepallyVenkatesh06"} text={"Here is my profile on the GitHub " +*/}
                {/*"service, where I have add icons generated with this site. On a daily basis " +*/}
                {/*"I try to make World a better place using SD 🌎 💥 🤣"}/>*/}
            </div>
        );
    }

}

export default Examples;