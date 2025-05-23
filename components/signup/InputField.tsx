import React from "react";
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View
} from "react-native";
import tw from 'twrnc';

// Define the InputFieldProps type
export interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: ImageSourcePropType;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
}

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle = "",
  containerStyle = "",
  inputStyle = "",
  iconStyle = "",
  style = "",
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ width: "100%" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw`my-2 w-full `}>
          <Text style={tw`text-lg font-semibold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            style={tw`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} style={tw`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              style={tw`rounded-full p-4 font-semibold text-[15px] flex-1 ${inputStyle}`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;