import React, { Component} from 'react'
import { Text,  StyleSheet, ActivityIndicator, View, FlatList, Image, TouchableOpacity } from 'react-native';
import UserService from '../Services/UserService';


export default class UserList extends Component{
    constructor(props){
        super(props);
        this.state={
            users: null, 
            isLoading: true
        }
        
    }
    componentDidMount(){
        //console.log("entro aqui");
        UserService.getUsers().then((results) => {
            if(results && results.data && results.data.results ){
                this.setState({
                    users: results.data.results, 
                    isLoading: false
                });
            }
            
        }).catch((err) => {
            console.log(err);
        });
    }

    render(){

        if(this.state.isLoading){
            return(
                <ActivityIndicator/>
            )

        }
        return(
            <View >
                <FlatList
                    data={this.state.users}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity 
                                onPress= {() => {
                                    this.props.navigation.navigate('UserDetails', {
                                        user: item
                                    });
                                }}
                            style={[ styles.itemContainer, item.gender == 'male' ? styles.male : styles.famale]}>
                                
                                <Image
                                 source={{uri: item.picture.medium}}   
                                 style={ styles.itemImage}></Image>
                                 <View style={{flexDirection: 'column'}}>
                                    <Text style={styles.itemTitle}>Nombre: { item.name.first +' '+ item.name.last}</Text>
                                    <Text style={[styles.itemTitle, { fontSize: 13}]}>Toca para mas detalle</Text>
                                </View>

                            </TouchableOpacity>    
                        );
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 1
    },
    itemTitle: {
        fontSize: 20,
        color: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        marginLeft: 10,
        color: 'white'

    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    male: {
        backgroundColor: 'blue'
    },
    famale: {
        backgroundColor: '#ff1d6e'
    }
});
