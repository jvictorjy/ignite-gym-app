import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';
import { useTheme } from "native-base";
import { Platform } from "react-native";


type AppRoutes = {
    home: undefined;
    exercise: { exerciseId: string };
    history: undefined;
    profile: undefined;
}

export type AppNavigatorRoutesPros = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const { sizes, colors } = useTheme();

    const iconSizes = sizes[6];

    return (
        <Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.green[500],
                tabBarInactiveTintColor: colors.gray[200],
                tabBarStyle: {
                    backgroundColor: colors.gray[600],
                    borderTopWidth: 0,
                    height: Platform.OS === 'android' ? 'auto' : 0,
                    paddingBottom: sizes[10],
                    paddingTop: sizes[6]
                }
            }}
        >
            <Screen 
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg fill={color} width={iconSizes} height={iconSizes} />
                    )
                }}
            />

            <Screen 
                name="history"
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg fill={color} width={iconSizes} height={iconSizes} />
                    )
                }}
            />

            <Screen 
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSvg fill={color} width={iconSizes} height={iconSizes} />
                    )
                }}
            />

            <Screen 
                name="exercise"
                component={Exercise}
                options={{
                    tabBarButton: () => null
                }}
            />
        </Navigator>
    )
}