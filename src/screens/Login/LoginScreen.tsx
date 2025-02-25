// src/screens/Login/LoginScreen.tsx
import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginFormData } from "../../forms/loginSchema";
import { useNavigation } from "@react-navigation/native";
import { Box } from "@/src/components/ui/box";
import { VStack } from "@/src/components/ui/vstack";
import { Heading } from "@/src/components/ui/heading";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import Feather from "@expo/vector-icons/Feather";
import { Image } from "@/src/components/ui/image";
import { RootStackParamList } from "@/src/navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text } from "react-native";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    // Exemplo: autenticar com backend usando axios
    // Se sucesso: navigation.replace('Drawer');
    console.log("Login data:", data);
    navigation.replace("Main");
  }

  return (
    <Box className="flex justify-center items-center bg-white">
      <VStack className="items-center w-[80%]">
        <Heading size="lg" className="bg-red-500">
          <Text>IFlabs</Text>
        </Heading>
        <Image
          size="md"
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
          alt="image"
        />

        <Input {...control.register("email")} className="mt-3">
          <InputField type="text" placeholder="Email" />
        </Input>
        {errors.email && <Box><Text>
          {errors.email.message}
          </Text>
          </Box>}

        <Input {...control.register("password")} className="mt-3">
          <InputField type="password" placeholder="Senha" />
          <InputSlot>
            <InputIcon>
              <Feather name="eye" size={24} color="black" />
            </InputIcon>
          </InputSlot>
        </Input>
        {errors.password && <Box><Text>
          {errors.password.message}
          </Text>
          </Box>}

        <Button className="mt-3" onPress={handleSubmit(onSubmit)}>
          Entrar
        </Button>
      </VStack>
    </Box>
  );
}
