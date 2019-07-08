import React, { Component } from 'react';
import NavigationStack from './TopLevelNavigator';
import NavigationService from './NavigationService';
import { observer, inject } from "mobx-react"
import Product from '../store/Product'

export default class AppNavigator extends Component {

    render() {
        return (
            <NavigationStack
                ref={(navigatorRef: any) => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}


