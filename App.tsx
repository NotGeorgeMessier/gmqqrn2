import React from "react";
import {SafeAreaView, Text} from "react-native";

function App(): React.JSX.Element {
    return (
        <SafeAreaView>
            <Text style={styles.sectionTitle}>{"title"}</Text>
        </SafeAreaView>
    );
}

const styles = {
    sectionTitle: {
        fontSize: 24,
    },
};

export default App;
