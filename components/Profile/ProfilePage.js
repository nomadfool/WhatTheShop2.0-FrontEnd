import React, { Component } from "react";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import UserOrderHistory from "./UserOrderHistory";


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
import { StyleSheet } from "react-native";

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
				<Container style={styles.container}>
					<Content>
						<Thumbnail
							style={{ width: 150, height: 150, borderRadius: 150 / 2, alignSelf: 'center' }}
							source={
								authStore.user.profile_image ? (
									{
										uri : user.profile_image
									}
								) : (
									require('../../assets/profile.png')
								)
							}
						/>

            <Text style={{ marginTop: 8, alignSelf: "center" }}>
              {user.username}
            </Text>

            <ListItem>
              <Text>
                Name: {user.first_name} {user.last_name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>Email: {user.email}</Text>
            </ListItem>
            {!user.profile.phone ? (
              <ListItem
                Button
                onPress={() =>
                  navigation.navigate("EditProfile", { user: user })
                }
              >
                <Text>Add Phone Number</Text>
              </ListItem>
            ) : (
              <ListItem>
                <Text>Phone: {user.profile.phone}</Text>
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
                last
                Button
                style={{ marginTop: 5 }}
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
            <ListItem
              last
              Button
              style={{ marginTop: 5 }}
              onPress={() =>
                navigation.navigate("orderHistory", { user: user })
              }
            >
              <Text>History Order</Text>
            </ListItem>

            <Button
              danger
              style={{ marginTop: 8 }}
              onPress={() => authStore.logoutUser(navigation)}
            >
              <Text>Logout</Text>
            </Button>
          </Content>
        </Container>
      );
    }
  }

}

const styles = StyleSheet.create({
	container : {
		flexGrow        : 1,
		width           : '100%',
		backgroundColor : '#422D56'
	},
	text      : { color: 'white' }
});

export default observer(ProfilePage);
