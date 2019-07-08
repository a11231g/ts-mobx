import React, { PureComponent } from 'react';
import {
    View,
    ActivityIndicator,
    Text,
    FlatList,
    ScrollView, StyleSheet
} from 'react-native';
import ProductListItem from '../../components/productListItem/productListItem';
import Product from '../../store/Product'
import stores from '../../store'
import { observer, inject } from "mobx-react"



interface Props {
    Product: Product
}
 @observer
export  default  class Products extends PureComponent<Props> {
    
    componentDidMount(): void {
        console.log(this.props)
        const { fatchData } = this.props.Product;
        fatchData();
    };


    private renderRow = (item: any, listIndex: number) =>{
        return(
            <ProductListItem key={`product-${listIndex}-${item.index}`} item={item.item} />
        )
    };

    public render() {
        const { loading, loaded, result } = this.props.Product;
        console.log(loading, loaded)
        return (
            <View style={styles.container}>
                <ScrollView>
                    {loading && !loaded
                        ? <ActivityIndicator size={'large'}/>
                        : null
                    }
                    {result && result.length > 0 && loaded
                        ? result.map((list: any, index: number)=>{
                            return(
                                <View>
                                    <Text style={styles.title} key={index}>{list.catName}</Text>
                                    <FlatList
                                        columnWrapperStyle={styles.listWrapper}
                                        data={list.data}
                                        numColumns={4}
                                        renderItem={item => {
                                            return this.renderRow(item,index);
                                        }}
                                        />
                                    <View style={styles.divider}/>
                                </View>
                            )
                            })
                        : null
                    }
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: 15,
        paddingBottom: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 15,
        paddingLeft: 15
    },
    divider: {
        backgroundColor: '#aaa',
        height: 1,
        marginBottom: 15,
        marginTop: 15
    },
    listWrapper: {
        flexDirection: 'row'
    }
})
