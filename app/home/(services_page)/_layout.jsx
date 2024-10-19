import { Stack } from 'expo-router';
import { View } from 'react-native';

const _layout = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* Stack navigation for nested screens under /services */}
            <Stack/>

        </View>
    );
}

export default _layout;
