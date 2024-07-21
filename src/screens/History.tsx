import { ExerciseCard } from "@components/ExerciseCard";
import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Flex, Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";


export function History() {
    const [exercises, setExercises] = useState([
        {
            title: '20.07.2024',
            data: ['Remada fronta', 'Remada curvada']
        },
        {
            title: '19.07.2024',
            data: ['Remada curvada']
        }
    ])

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de exercícios" />

            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" fontSize="md" mt={10} mb={3} fontFamily="heading">
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Não há exercícios registrado ainda. {'\n'}
                        Vamos fazer um exercício hoje?
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </VStack>
    )
}