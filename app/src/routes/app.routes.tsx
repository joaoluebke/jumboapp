import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { Platform } from "react-native";
import { House, Gift, Timer } from "phosphor-react-native";

import { Home } from "../screens/Home";
import { News } from "../screens/News";
import { Contact } from "../screens/Contact";
import { Promotion } from "../screens/Promotion";
import { Who } from "../screens/Who";

export function AppRoutes() {
    const { Navigator, Screen } = createBottomTabNavigator();
    const { colors, sizes } = useTheme();
    const size = sizes[6];
    return (
        <Navigator
            screenOptions={{
                tabBarLabelPosition: 'beside-icon',
                headerShown: false,
                tabBarActiveTintColor: colors.white,
                tabBarInactiveTintColor: colors.gray[950],
                tabBarStyle: {
                    position: 'absolute',
                    height: sizes[22],
                    borderWidth: 0,
                    backgroundColor: colors.green[500]
                },
                tabBarItemStyle: {
                    position: 'relative',
                    top: Platform.OS === 'android' ? -10 : 0
                }
            }}
        >
            <Screen name="home"
                component={Home}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarLabelPosition: 'below-icon',
                    tabBarIcon: ({ color }) => <House color={color} size={size} />
                }}
            />

            <Screen name="news"
                component={News}
                options={{
                    tabBarLabel: "Novidades",
                    tabBarLabelPosition: 'below-icon',
                    tabBarIcon: ({ color }) => <Gift color={color} size={size} />
                }}
            />

            <Screen name="promotion"
                component={Promotion}
                options={{
                    tabBarLabel: "Promoções",
                    tabBarLabelPosition: 'below-icon',
                    tabBarIcon: ({ color }) => <Timer color={color} size={size} />
                }}
            />


            <Screen name="contact"
                component={Contact}
                options={{
                    tabBarButton: () => null
                }}
            />



            <Screen name="who"
                component={Who}
                options={{
                    tabBarButton: () => null
                }}
            />
        </Navigator>
    );
}