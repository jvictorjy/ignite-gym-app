import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Signup() {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <ScrollView contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator>
            <VStack flex={1} px={10}>
                <Image 
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando de bicicleta na academia"
                    resizeMode="contain"
                    position="absolute"
                />

                <Center my={24}>
                    <LogoSvg />

                    <Text color="gray.100" fontSize="sm">
                        Treine sua mente e o seu corpo
                    </Text>
                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                        Crie sua conta
                    </Heading>

                    <Input 
                        placeholder="Nome"
                    />
                    <Input 
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input 
                        placeholder="Senha" 
                        secureTextEntry
                    />
                    <Input 
                        placeholder="Confirme a Senha" 
                        secureTextEntry
                    />

                    <Button title="Criar e acessar" />
                </Center>

            
                <Button 
                    title="Voltar para o login" 
                    variant="outline" 
                    mt={24}
                    onPress={handleGoBack}
                />    
                
            </VStack>
        </ScrollView>
    );
}