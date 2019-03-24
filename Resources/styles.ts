import {FlexAlignType} from "react-native";


export const colors  = {
  primary: '#ff790a',
  secondary: '#ff230d',
  tertiary: '#FFFFFF'
}


export const mainContainer = {
  flex: 1,
  backgroundColor: colors.primary,
  alignItems: <FlexAlignType>'center',
  justifyContent: "center",
}

export const margin = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const drawerButton = {
  alignSelf: 'flex-start',
  position: 'absolute',
  top: 35,
  margin: 10,
  width: 50,
  flexDirection: 'row',
  alignItems: 'center',
}