import { View, TextInput } from 'react-native'
import { COLORS, SIZES } from '../constants'

const FormInput = ({
    containerStyle,
    inputContainerStyle,
    placeholder,
    inputStyle,
    value = '',
    prependComponent,
    appendComponent,
    onChange,
    onPress,
    editable,
    secureTextEntry,
    keyboardType = 'default',
    autocompleteType = 'off',
    autoCapitalize = 'none',
    maxLength,
    placeholderTextColor = COLORS.grey60
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <View
                style={{
                    flexDirection: 'row',
                    height: 55,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    backgroundColor: COLORS.lightGrey,
                    ...inputContainerStyle
                }}
            >
                {prependComponent}

                <TextInput
                    style={{
                        flex: 1,
                        paddingVertical: 0,
                        ...inputStyle
                    }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autocompleteType={autocompleteType}
                    maxLength={maxLength}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                    editable={editable}
                    onPressIn={onPress}    
                />

                {appendComponent}

            </View>
        </View>
    )
}

export default FormInput