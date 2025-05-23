import InputField from "@/components/signup/InputField";
import CustomButton from "@/constants/CustomButton";
import { icons, images } from "@/constants/OnboardingData";
import { Link, router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Image, ScrollView, Text, View } from "react-native";
import tw from 'twrnc';
import { registerUser } from "@/utils/auth";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
}

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      await registerUser(form);
      router.replace("/(tabs)");
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      Alert.alert("Sign Up Failed", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`relative w-full h-64`}>
          <Image source={images.signUpCar} style={tw`z-0 w-full h-64`} />
          <Text style={tw`text-2xl text-black font-bold absolute bottom-5 left-5`}>
            Create Your Account
          </Text>
        </View>
        <View style={tw`p-5`}>
          <InputField
            label="First Name"
            placeholder="Enter first name"
            icon={icons.person}
            value={form.firstName}
            onChangeText={(value) => setForm({ ...form, firstName: value })}
            error={errors.firstName}
          />
          
          <InputField
            label="Last Name"
            placeholder="Enter last name"
            icon={icons.person}
            value={form.lastName}
            onChangeText={(value) => setForm({ ...form, lastName: value })}
            error={errors.lastName}
          />

          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
            error={errors.email}
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
            error={errors.password}
          />

          <InputField
            label="Phone"
            placeholder="Enter phone number"
            icon={icons.phone}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            value={form.phone}
            onChangeText={(value) => setForm({ ...form, phone: value })}
            error={errors.phone}
          />

          <CustomButton
            title={isLoading ? "Creating Account..." : "Sign Up"}
            onPress={handleSignUp}
            disabled={isLoading}
            className="mt-6"
          />

          {isLoading && <ActivityIndicator size="large" color="#414141" style={tw`mt-4`} />}

          <Link
            href="/sign-in"
            style={tw`text-lg text-center text-gray-500 mt-10`}
          >
            Already have an account?{" "}
            <Text style={tw`text-blue-500`}>Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;