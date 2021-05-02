import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import SubHeader from '../components/SubHeader';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {


  // useState , useEffect, useReducer , customHooks

  const [count, setCount] = React.useState(0);
  const [customerList, setCustomerList] = React.useState([])


  React.useEffect(() => {
  
  console.log('render');
 
  }, [count])

  const btnName = "+";
  const btnName1 = "-";
  const btnName2 = "reset";

  const handleIncrementClicked = () => {
    console.log('btn clicked REgister')
    setCount(count + 1);
}
  const handleDecrementClicked = () => {
    console.log('btn clicked Edit')
    setCount(count - 1);
}
  const handleResetClicked = () => {
    console.log('btn clicked Submit')
    setCount(0);
}

// console.log(count, "count");
// console.log(customerList, "customers");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Text>Count: {count}</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      <SubHeader headerName={btnName}   clicked={handleIncrementClicked} iconName="pencil"></SubHeader>
      <SubHeader headerName={btnName1}   clicked={handleDecrementClicked} iconName="camera"></SubHeader>
      <SubHeader headerName={btnName2}   clicked={handleResetClicked} iconName="glass"></SubHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
