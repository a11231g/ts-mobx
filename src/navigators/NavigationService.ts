import { NavigationActions, StackActions } from "react-navigation";

let navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
    navigator = navigatorRef;
}

function navigate(routeName: any, params: any) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function navigateAndReset(routeName: any, params: any) {
    navigator.dispatch(
        StackActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({
                    routeName,
                    params
                })
            ]
        })
    );
}

function goBack(key: any) {
    navigator.dispatch(
        NavigationActions.back({
            key: key
        })
    );
}

export default {
    navigate,
    navigateAndReset,
    goBack,
    setTopLevelNavigator,
};
