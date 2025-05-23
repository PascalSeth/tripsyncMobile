import { Link, router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Image, ScrollView, Text, View } from "react-native";
import tw from 'twrnc';
import InputField from "../../components/signup/InputField";
import CustomButton from "../../constants/CustomButton";
import { loginUser } from "../../utils/auth";
interface FormData {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
}

const SignIn = () => {
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid"
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignIn = async () => {
    if (!validateForm()) return

    try {
      setIsLoading(true)
      await loginUser({
        email: form.email,
        password: form.password,
      })

      // Refresh user context

      // Navigate to the app
      router.replace("/")
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Failed to sign in. Please try again."
      Alert.alert("Sign In Failed", errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`relative w-full h-[250px]`}>
          <Image source={require("../../assets/images/signup-car.png")} style={tw`z-0 w-full h-[250px]`} />
          <Text style={tw`text-2xl text-black font-bold absolute bottom-5 left-5`}>Welcome 👋</Text>
        </View>

        <View style={tw`p-5`}>
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={require("../../assets/icons/email.png")}
            keyboardType="email-address"
            autoCapitalize="none"
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => {
              setForm({ ...form, email: value })
              if (errors.email) setErrors({ ...errors, email: undefined })
            }}
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={require("../../assets/icons/lock.png")}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => {
              setForm({ ...form, password: value })
              if (errors.password) setErrors({ ...errors, password: undefined })
            }}
          />

          <CustomButton
            title={isLoading ? "Signing In..." : "Sign In"}
            onPress={handleSignIn}
            disabled={isLoading}
            style="mt-6"
          />

          {isLoading && <ActivityIndicator size="large" color="#414141" style={tw`mt-4`} />}

          <Link href="/sign-up" asChild>
            <Text style={tw`text-lg text-center text-gray-500 mt-10`}>
              Don&apos;t have an account? <Text style={tw`text-[#414141] font-bold`}>Sign Up</Text>
            </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignIn
