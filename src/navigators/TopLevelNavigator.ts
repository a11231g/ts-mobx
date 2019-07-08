import {createAppContainer, createStackNavigator, StackNavigatorConfig} from 'react-navigation';
import Home from '../screens/Products/Products'

const navigatorConfig = {
    initialRouteName: 'Home',
};
const productNavigation = createStackNavigator({
    Product: {
        screen: Home,
        navigationOptions: () => ({headerTitle: 'Products'})

    },
}, {});


export default createAppContainer(productNavigation);
