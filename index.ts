import "expo-router/entry";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "functionality provided by expo-notifications",
  "functionality is not fully supported in Expo Go",
  // Shows when adding the tab bar during fast refresh. Maybe related to the scrolling system?
  "Error evaluating injectedJavaScript:",
]);
