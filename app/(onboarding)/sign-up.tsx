import InputField from "@/components/signup/InputField";
import CustomButton from "@/constants/CustomButton";
import { icons, images } from "@/constants/OnboardingData";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, Modal, ScrollView, Text, View } from "react-native";
import tw from 'twrnc';

const SignUp = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState("");

  // Simplified onSignUp function (frontend only)
  const onSignUpPress = () => {
    // Basic validation
    if (!form.name || !form.email || !form.password) {
      alert("Please fill in all fields");
      return;
    }
    
    if (!form.email.includes('@')) {
      alert("Please enter a valid email address");
      return;
    }
    
    if (form.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    
    // Show verification modal (simulate sending verification code)
    setShowVerificationModal(true);
  };

  // Simplified verification function (frontend only)
  const onPressVerify = () => {
    if (!verificationCode || verificationCode.length < 5) {
      setVerificationError("Please enter a valid verification code");
      return;
    }
    
    // Close verification modal and show success modal
    setShowVerificationModal(false);
    setShowSuccessModal(true);
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
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />
          {/* <OAuth /> */}
          <Link
            href="/sign-in"
            style={tw`text-lg text-center text-gray-500 mt-10`}
          >
            Already have an account?{" "}
            <Text style={tw`text-blue-500`}>Log In</Text>
          </Link>
        </View>

        {/* Verification Modal */}
        <Modal
          visible={showVerificationModal}
          transparent={true}
          animationType="slide"
        >
          <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
            <View style={tw`bg-white px-7 py-9 rounded-2xl m-5 w-10/12`}>
              <Text style={tw`font-bold text-2xl mb-2`}>
                Verification
              </Text>
              <Text style={tw`mb-5`}>
                We&apos;ve sent a verification code to {form.email}.
              </Text>
              <InputField
                label="Code"
                icon={icons.lock}
                placeholder="12345"
                value={verificationCode}
                keyboardType="numeric"
                onChangeText={setVerificationCode}
              />
              {verificationError ? (
                <Text style={tw`text-red-500 text-sm mt-1`}>
                  {verificationError}
                </Text>
              ) : null}
              <CustomButton
                title="Verify Email"
                onPress={onPressVerify}
                className="mt-5 bg-green-500"
              />
            </View>
          </View>
        </Modal>

        {/* Success Modal */}
        <Modal
          visible={showSuccessModal}
          transparent={true}
          animationType="slide"
        >
          <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
            <View style={tw`bg-white px-7 py-9 rounded-2xl m-5 w-10/12`}>
              <Image
                source={images.check}
                style={tw`w-28 h-28 mx-auto my-5`}
              />
              <Text style={tw`text-3xl font-bold text-center`}>
                Verified
              </Text>
              <Text style={tw`text-base text-gray-400 text-center mt-2`}>
                You have successfully verified your account.
              </Text>
              <CustomButton
                title="Browse Home"
                onPress={() => router.push("/(tabs)")}
                className="mt-5"
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default SignUp;