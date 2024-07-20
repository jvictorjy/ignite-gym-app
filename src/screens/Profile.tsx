import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, Heading, ScrollView, Skeleton, Text, useToast, VStack } from "native-base";
import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
 
import * as ImagePicker from 'expo-image-picker';

const PHOTO_SIZE = 33;

export function Profile() {
    const [photoisLoading, setPhotoIsLoading] = useState(false);
    const [userPhoto, setuserPhoto] = useState('https://github.com/jvictorjy.png');

    const toast = useToast();

    async function handleUserPhotoSelect() {
        try {
            setPhotoIsLoading(true);

            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true
            });
    
            if (photoSelected.canceled) {
                return;
            }

            console.log(photoSelected);

            if (photoSelected.assets[0].uri) {
                if (photoSelected.assets[0].fileSize && (photoSelected.assets[0].fileSize / 1024) > 20) {
                    return toast.show({
                        title: 'Imagem maior do que o esperado. Escolha uma de até 14KB',
                        placement: "top",
                        bgColor: 'red.500'
                    });
                    
                }

                setuserPhoto(photoSelected.assets[0].uri);
            }
        } catch(error) {
            console.log(error);
        } finally {
            setPhotoIsLoading(false);
        }
        
    }

    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />

            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt={6} px={10}>
                    {
                        photoisLoading ?
                            <Skeleton 
                                w={PHOTO_SIZE} 
                                h={PHOTO_SIZE} 
                                rounded="full" 
                                startColor="gray.500"
                                endColor="gray.400"
                            />
                        :
                            <UserPhoto  
                                source={{ uri: userPhoto }}
                                alt="Foto do usuário"
                                size={PHOTO_SIZE}
                            />
                    }
                    
                    <TouchableOpacity onPress={handleUserPhotoSelect}>
                        <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
                            Alterar foto
                        </Text>
                    </TouchableOpacity>

                    <Input 
                        placeholder="Nome"
                        bg="gray.600"
                    />

                    <Input 
                        placeholder="Email"
                        bg="gray.600"
                        isDisabled
                    />
                
            
                    <Heading color="gray.200" fontSize="md" mb={2} mt={12} alignSelf="flex-start">
                        Alterar senha
                    </Heading>

                    <Input 
                        bg="gray.600" 
                        placeholder="Senha antiga"
                        secureTextEntry
                    />
                    <Input 
                        bg="gray.600" 
                        placeholder="Nova senha"
                        secureTextEntry
                    />

                    <Input 
                        bg="gray.600" 
                        placeholder="Confirmar nova senha"
                        secureTextEntry
                    />

                    <Button 
                        title="Atualizar"
                        mt={4}
                    />
                </Center>
                
            </ScrollView>
        </VStack>
    )
}