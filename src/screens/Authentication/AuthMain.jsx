import { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { MotiView, useAnimationState } from 'moti'
import { Shadow } from 'react-native-shadow-2';

import {
    Checkbox,
    CountryDropDown, FormInput, IconButton, TextButton
} from "../../components";
import { COLORS, images, SIZES, icons, FONTS } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const AuthMain = () => {

    const [mode, setMode] = useState('signIn')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [isVisble, setIsVisble] = useState(false)
    const [termsChecked, setTermsChecked] = useState(false)
    // Country
    const [countries, setCountries] = useState([])
    const [showCountryModal, setShowCountryModal] = useState(false)

    const animationState = useAnimationState({
        signIn: {
            height: SIZES.height * 0.55
        },
        signUp: {
            height: SIZES.height * 0.7
        }
    })

    useEffect(() => {

        animationState.transitionTo('signIn')
        // Fetch countires
        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data => {
                let countryData = data.map(item => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://countryflagsapi.com/png/${item.alpha2Code}`
                    }
                })

                setCountries(countryData)
            })
    }, [])


    function renderSignIn() {
        return (
            <MotiView
                state={animationState}
                style={{
                    ...styles.authContainer,
                    marginTop: SIZES.padding,
                    height: SIZES.height * 0.55
                }}
            >
                <Text
                    style={{
                        width: '60%',
                        lineHeight: 45,
                        color: COLORS.dark,
                        fontSize: SIZES.width * .08,
                        fontWeight: 'bold'
                    }}
                >Sign In to continue</Text>
                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    keyboardDismissMode='on-drag'
                    keyboardShouldPersistTaps={'handled'}
                    extraScrollHeight={-300}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center'
                    }}
                >

                    {/* Email */}
                    <FormInput
                        containerStyle={{
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.error
                        }}
                        value={email}
                        onChange={(text) => setEmail(text)}
                        placeholder={'Email'}

                        prependComponent={
                            <Image source={icons.email}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginRight: SIZES.base
                                }} />
                        }
                    />
                    {/* password */}
                    <FormInput
                        containerStyle={{
                            marginTop: SIZES.radius,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.error
                        }}
                        value={password}
                        onChange={(text) => setPassword(text)}
                        placeholder={'Password'}
                        secureTextEntry={!isVisble}
                        prependComponent={
                            <Image source={icons.lock}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginRight: SIZES.base
                                }} />
                        }

                        appendComponent={
                            <IconButton
                                icon={isVisble ? icons.eye_off : icons.eye}
                                iconStyle={{
                                    tintColor: COLORS.grey
                                }}
                                onPress={() => setIsVisble(!isVisble)}
                            />
                        }
                    />
                    <View
                        style={{ alignItems: 'flex-end' }}
                    >
                        <TextButton
                            label={'forgot password ?'}
                            contentContainerStyle={{
                                marginTop: SIZES.radius,
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.support3
                            }}
                        />
                    </View>
                </KeyboardAwareScrollView>
                <TextButton
                    label={'Log In'}
                    contentContainerStyle={{
                        height: 55,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    labelStyle={{
                        fontSize: SIZES.width * .05
                    }}
                />


            </MotiView>
        )
    }

    function renderSignUp() {
        return (
            <MotiView
                state={animationState}
                style={{
                    marginTop: SIZES.padding,
                    ...styles.authContainer,

                }}
            >
                <Text
                    style={{
                        width: '60%',
                        lineHeight: 45,
                        color: COLORS.dark,
                        fontSize: SIZES.width * .08,
                        fontWeight: 'bold'
                    }}
                >Create new Account</Text>
                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    keyboardDismissMode='on-drag'
                    keyboardShouldPersistTaps={'handled'}
                    extraScrollHeight={-300}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center'
                    }}
                >

                    {/* Name */}
                    <FormInput
                        containerStyle={{
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.error
                        }}
                        value={name}
                        onChange={(text) => setName(text)}
                        placeholder={'Name'}

                        prependComponent={
                            <Image source={icons.person}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginRight: SIZES.base
                                }} />
                        }
                    />
                    {/* Email */}
                    <FormInput
                        containerStyle={{
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.error,
                            marginTop: SIZES.radius,

                        }}
                        value={email}
                        onChange={(text) => setEmail(text)}
                        placeholder={'Email'}
                        keyboardType={'email-address'}
                        prependComponent={
                            <Image source={icons.email}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginRight: SIZES.base
                                }} />
                        }
                    />
                    {/* Phone */}
                    <FormInput
                        containerStyle={{
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.error,
                            marginTop: SIZES.radius,

                        }}
                        value={phone}
                        onChange={(text) => setPhone(text)}
                        placeholder={'+33 607080910'}
                        keyboardType={'phone-pad'}
                        prependComponent={
                            <Image source={icons.phone}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginRight: SIZES.base
                                }} />
                        }
                    />
                    {/* Country */}
                    <CountryDropDown
                        containerStyle={{
                            marginTop: SIZES.radius
                        }}
                        selectedCountry={selectedCountry}
                        onPress={() => setShowCountryModal(!showCountryModal)}
                    />

                    {renderCountryModal()}

                    {/* password */}
                    <FormInput
                        containerStyle={{
                            marginTop: SIZES.radius,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.error
                        }}
                        value={password}
                        onChange={(text) => setPassword(text)}
                        placeholder={'Password'}
                        keyboardType={'visible-password'}
                        secureTextEntry={!isVisble}
                        prependComponent={
                            <Image source={icons.lock}
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginRight: SIZES.base
                                }} />
                        }

                        appendComponent={
                            <IconButton
                                icon={isVisble ? icons.eye_off : icons.eye}
                                iconStyle={{
                                    tintColor: COLORS.grey
                                }}
                                onPress={() => setIsVisble(!isVisble)}
                            />
                        }
                    />

                    <Checkbox
                        containerStyle={{
                            marginTop: SIZES.radius
                        }}

                        isSelected={termsChecked}
                        onPress={() => setTermsChecked(!termsChecked)}
                    />
                </KeyboardAwareScrollView>


                <TextButton
                    label={'Create account'}
                    contentContainerStyle={{
                        height: 55,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    labelStyle={{
                        fontSize: SIZES.width * .05
                    }}
                />

            </MotiView>
        )
    }

    function renderAuthContainer() {
        if (mode == 'signIn') {
            return renderSignIn()
        } else return renderSignUp()
    }

    function renderAuthFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height : 80,
                    alignItems : 'flex-end',
                    justifyContent : 'center',
                    marginTop : -30,
                    marginHorizontal : SIZES.radius,
                    paddingBottom : SIZES.radius,
                    backgroundColor : COLORS.light60,
                    borderBottomLeftRadius : SIZES.radius,
                    borderBottomRightRadius : SIZES.radius
                }}
            >
                <Text
                style={{
                    color : COLORS.grey,
                    fontSize : SIZES.width * .035
                }}
                >{mode === 'signIn' ? "Don't have an account ?" : "I already have an account"}</Text>
                <TextButton 
                 onPress={() => {
                    if (animationState.current === 'signIn') {
                        animationState.transitionTo('signUp')
                        setMode('singUp')
                    } else {
                        animationState.transitionTo('signIn')
                        setMode('signIn')
                    }
                }}
                labelStyle={{
                    color : COLORS.support3
                }}
                label={mode === 'signIn' ? " Create an Account" : " Sign In"}
                contentContainerStyle={{
                    backgroundColor : null
                }}
                />
            </View>
        )
    }

    function renderSocialFooter() {
        return(
            <View
                style={{
                    flex : 1,
                    alignItems : 'center',
                    justifyContent : 'center',
                    marginTop : -30,
                    zIndex : -1
                }}
            >
                <Text
                style={{
                    color : COLORS.dark
                }}
                >
                    Or log in with
                </Text>

                <View
                    style={{
                        flexDirection : 'row',
                        marginTop : SIZES.radius
                    }}
                >
                    <IconButton 
                        icon={icons.twitter}
                        iconStyle={{
                            tintColor : COLORS.dark
                        }}
                        contentcontainerStyle={styles.iconButton}
                    />
                    <IconButton 
                        icon={icons.google}
                        iconStyle={{
                            tintColor : COLORS.dark
                        }}
                        contentcontainerStyle={{...styles.iconButton, marginLeft : SIZES.radius}}
                    />
                    <IconButton 
                        icon={icons.linkedin}
                        iconStyle={{
                            tintColor : COLORS.dark
                        }}
                        contentcontainerStyle={{...styles.iconButton, marginLeft : SIZES.radius}}
                    />

                </View>

            </View>
        )
    }
    
    // Render

    function renderCountryModal() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showCountryModal}
            >
                <TouchableWithoutFeedback
                    onPress={() => setShowCountryModal(false)}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.dark80
                        }}
                    >
                        <View
                            style={{
                                height: 400,
                                width: SIZES.width * 0.8,
                                backgroundColor: COLORS.light,
                                borderRadius: SIZES.radius
                            }}
                        >
                            <FlatList
                                data={countries}
                                keyExtractor={(item) => item.code}
                                contentContainerStyle={{
                                    paddingHorizontal: SIZES.padding,
                                    paddingBottom: SIZES.padding,
                                }}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginTop: SIZES.radius
                                            }}
                                            onPress={() => {
                                                console.log(item)
                                                setSelectedCountry(item)
                                                setShowCountryModal(false)
                                            }}
                                        >
                                            <Image
                                                source={{ uri: item.flag }}
                                                resizeMode="contain"
                                                style={{
                                                    width: 40,
                                                    height: 30
                                                }}
                                            />
                                            <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.lightGrey
            }}
        >
            <Image source={images.logo}
                style={{
                    alignSelf: 'center',
                    marginTop: SIZES.padding * 2,
                    width: 50,
                    height: 50
                }} />
            {renderAuthContainer()}
            {renderAuthFooter()}
            {mode === 'signIn' && renderSocialFooter()}
        </View>
    )
}
const styles = StyleSheet.create({
    authContainer: {
        width: SIZES.width - (SIZES.padding * 2),
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.light,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex : 3
    },
    iconButton : {
        width : 55,
        height : 55,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : COLORS.grey20,
        borderRadius : SIZES.radius
    }
})
export default AuthMain;