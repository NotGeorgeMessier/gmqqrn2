import {RootNavigator} from "@src/navigation";
import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";

function App(): React.JSX.Element {
    return (
        <SafeAreaProvider>
            <RootNavigator />
        </SafeAreaProvider>
    );
}
export default App;
