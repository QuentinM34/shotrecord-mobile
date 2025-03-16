
import {View, Text, Image} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Header({ primaryText, secondaryText, backButton, logOutButton, infoButton }) {

    return (
        <View
            row
            backgroundColor={'#141311'}
            style={{
                width: '100%',
                height: 60,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {backButton &&
                <View row style={{width: '15%', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name={'left'} size={30} color={'white'} />
                </View>
            }
            <View style={{width: '70%', justifyContent: 'center', alignItems: 'center'}}>
                <Text white text70 uppercase>{primaryText}</Text>
                <Text white text80>{secondaryText}</Text>
            </View>
            {logOutButton &&
                <View style={{width: '15%', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name={'logout'} size={30} color={'red'} />
                </View>
            }
            {infoButton &&
                <View style={{width: '15%', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name={'infocirlceo'} size={30} color={'white'} />
                </View>
            }
        </View>
    );
}