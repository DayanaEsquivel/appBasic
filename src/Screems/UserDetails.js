import React, { Component} from 'react'
import { Text, StyleSheet, ActivityIndicator, View, Image } from 'react-native';

export default class UserDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            user: null
        }
        
    }

    componentDidMount(){
        console.log(this.props.route.params.user);
        
        this.setState({
            user: this.props.route.params.user
        })
    }
    render(){
        if(this.state.user === null){
            return(
                <ActivityIndicator/>
            )

        }
        return(
            <View style={[ styles.content, this.state.user.gender== 'male' ? styles.male : styles.famale ]} >
                <Image style={ styles.itemImage}
                source={{uri: this.state.user.picture.large}}>
                </Image>
                <Text style={ styles.itemText }>Name: {this.state.user.name.first} {this.state.user.name.last}  </Text>
                <Text style={ styles.itemText }>Email: {this.state.user.email} </Text>
                <Text style={ styles.itemText }>Location: {this.state.user.location.city} </Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    itemImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginVertical: 10
    },
    itemText: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
        color: 'white'
    },
    male: {
        backgroundColor: 'blue'
        
    },
    famale: {
        backgroundColor: '#ff1d6e'
    }
});
