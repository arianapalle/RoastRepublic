import { Stack } from "expo-router";

const OrderPages = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown:false}} />
            <Stack.Screen name="Americano" options={{headerShown:false}} />
            <Stack.Screen name="OrderFormTwo" options={{headerShown:false}} />

        </Stack>

    );
}

export default OrderPages;