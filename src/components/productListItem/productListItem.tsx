import React, { PureComponent } from 'react';
import {
    View,
    Image,
    Text, StyleSheet, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
const { width } =  Dimensions.get('window');

export interface Props {
    item: any,
}
export default class productListItem extends PureComponent<Props> {

    static propTypes = {
        item: PropTypes.objectOf(PropTypes.any).isRequired,
    };

    render() {
        const { item } = this.props;
        return (
            <View style={styles.itemContainer}>
                {item.image
                    ? <Image source={{uri: item.image}} style={styles.image} />
                    : null
                }
                <View>
                    <View style={styles.row}>
                        <View style={styles.nameWrapper}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                        <View style={styles.priceWrapper}>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                    </View>
                    <Text style={styles.desc}>{item.desc}</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        width:  width / 4,
        padding: 10,
    },
    image: {
        alignSelf: 'stretch',
        height: 100
    },
    itemName: {
        fontSize: 12,
        fontWeight: 'bold',
        flex: 1
    },
    price: {
        fontSize: 11,
        color: '#777',
        alignSelf: 'flex-end'
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        flex: 1,
        marginBottom: 7
    },
    priceWrapper: {
        flex: 1,
    },
    nameWrapper: {
        flex: 1
    },
    desc: {
        fontSize: 11,
        color: '#666',
        alignSelf: 'flex-end'
    }
})
