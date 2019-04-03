import React, { Component } from "react";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

import {
  Container,
  Left,
  Content,
  Thumbnail,
  ListItem,
  Text,
  Button,
  View,
  Right
} from "native-base";
import { observer } from "mobx-react";
import { Image } from "react-native";

class ProfilePage extends Component {
  componentDidMount() {
    const user = authStore.user;
    profileStore.retraiveUserProfile(user);
  }
  render() {
    const user = profileStore.user;

    const navigation = this.props.navigation;

    if (!user) {
      return (
        <View>
          <Text>loading</Text>
        </View>
      );
    } else {
      return (
        <Container>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Thumbnail
              source={{
                uri:
                  "https://img1.looper.com/img/gallery/disney-may-take-over-development-of-avatar-x-men-franchises/intro-1533929612.jpg"
              }}
            />

            <Text>{user.username}</Text>
          </View>
          <Content>
            <ListItem last>
              <Text>
                {user.first_name} {user.last_name}
              </Text>
            </ListItem>
            <ListItem last>
              <Text>{user.email}</Text>
            </ListItem>
            {user.profile.phone ? (
              <ListItem
                Button
                onPress={() =>
                  navigation.navigate("EditProfile", { user: user })
                }
                last
              >
                <Text>{user.profile.phone}</Text>
              </ListItem>
            ) : (
              <ListItem>
                <Text>Add Phone Number</Text>
              </ListItem>
            )}

            {!user.address ? (
              <ListItem
                Button
                onPress={() => navigation.navigate("Address", { user: user })}
              >
                <Text>Create Address</Text>
              </ListItem>
            ) : (
              <ListItem
                Button
                onPress={() =>
                  navigation.navigate("ViewAddress", { user: user })
                }
              >
                <Left>
                  <Text>Address</Text>
                </Left>

                <Right>
                  <Button
                    transparent
                    onPress={() =>
                      navigation.navigate("EditAddress", { user: user })
                    }
                  >
                    <Text>Edit</Text>
                  </Button>
                </Right>
              </ListItem>
            )}

            <Button danger onPress={() => authStore.logoutUser(navigation)}>
              <Text>Logout</Text>
            </Button>
          </Content>
        </Container>
      );
    }
  }
}

export default observer(ProfilePage);
