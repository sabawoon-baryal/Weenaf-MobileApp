import { StyleSheet, Text, View, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  loginBtnText: { color: "white", marginLeft: -5 },
  loginBtn: {
    paddingHorizontal: 10,
    backgroundColor: "red",
    borderRadius: 3,
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },
  disabledLoginBtnText: {
    color: "white",
    marginLeft: -5
  },
  disabledLoginBtn: {
    backgroundColor: "rgb(216, 40, 36)",
    borderRadius: 3,
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15
  },
  textInput: {
    width: "100%",
    height: 45,
    fontSize: 16,
    backgroundColor: "white",
    paddingLeft: 8,
    borderRadius: 2,
    marginVertical: 3
  },
  nameTextInput: {
    width: "49%",
    height: 45,
    fontSize: 16,
    backgroundColor: "white",
    marginHorizontal: 5,
    borderRadius: 2,
    paddingLeft: 8
  },
  clearButton: {
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  clearButtonText: {
    color: "red",
    marginTop: 20,
    fontSize: 16
  },

  // Create New Account btn styles
  newAccButton: {
    backgroundColor: "transparent",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 10,
    alignItems: "center",
    width: "100%"
  },
  newAccButtonText: {
    color: "red",
    fontSize: 16
  },
  scroller: {
    flex: 1,
    width: "100%"
  },

  // contact form styles
  joinWeena: {
    backgroundColor: "red",
    borderRadius: 3,
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    marginTop: 20
  },
  joinWeenaBtnText: {
    color: "white"
  },
  disabledJoinWeena: {
    backgroundColor: "rgb(216, 40, 36)",
    borderRadius: 3,
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    marginTop: 20
  },
  disabledJoinWeenaBtnText: {
    color: "white"
  },

  // already have account btn styles
  haveAccount: {
    marginTop: 100
  },
  genderButton: {
    backgroundColor: "red",
    width: "49%",
    borderRadius: 3,
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 20,
    marginHorizontal: 5
  },
  ListItem: {
    marginVertical: 10,
    marginHorizontal: 5
  },
  ListItemImage: {
    width: "100%",
    height: 400
  },
  profileImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100
  },
  headerProfileImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100
  },
  ListItemContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20
  },
  ListItemHeader: {
    padding: 10,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  storyDescription: {
    margin: 10
  },
  addStory: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    marginVertical: 10
  }
});
