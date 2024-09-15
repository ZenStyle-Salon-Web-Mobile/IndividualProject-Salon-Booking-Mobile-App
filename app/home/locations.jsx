import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import index from "../index";
import {CustomMarker, markers} from "../../components/CustomMarker";

export default function Locations() {
    const region = {
        latitude: 6.923987843102914,
        longitude: 79.87092292394051,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
    };

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                showsUserLocation={true}
                showsMyLocationButton={true}
                loadingEnabled={true} // Shows a loading indicator until the map is loaded
                onError={(error) => {
                    console.log('Map error: ', error);
                }}
            >
                {/* You can add markers to the map */}
                {
                    markers.map((marker, index) => (
                        <Marker key={index}
                                title={marker.title}
                                description={marker.name}
                                coordinate={marker}
                        />
                    ))
                }

                {/*<Marker*/}
                {/*    coordinate={{*/}
                {/*        latitude: 6.923987843102914,*/}
                {/*        longitude: 79.87092292394051,*/}
                {/*    }}*/}
                {/*    title={"ZenStyle Salon"}*/}
                {/*    description={"Beauty Category"}*/}
                {/*/>*/}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject, // Fill the entire View
    },
});
