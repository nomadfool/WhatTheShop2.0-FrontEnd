import React, { Component } from "react";
// import { Icon } from "native-base";
import ItemList from "./itemList";

class HomeScreen extends Component {
  render() {
    return <ItemList navigation={this.props.navigation} />;
  }
}

export default HomeScreen;
{
  /* <Icon
        type="FontAwesome"
        name="home"
        style={{
          fontSize: 300,
          alignSelf: "center",
          paddingTop: "50%",
          color: "red"
        }}
      /> */
}
