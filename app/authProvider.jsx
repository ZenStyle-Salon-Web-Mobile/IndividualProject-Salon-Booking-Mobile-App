import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading user data, e.g., from AsyncStorage or an API
        const fetchUserData = async () => {
            // Simulated user data
            const user = {
                id: 1,
                name: 'John Doe',
                gender: 'Male',
                email: 'john.doe@example.com',
                phoneNumber: '+1234567890',
                image: 'https://xsgames.co/randomusers/assets/avatars/male/77.jpg',
            };
            setLoggedInUser(user);
            setLoading(false); // Data loading completed
        };

        fetchUserData();
    }, []);

    return (
        <AuthContext.Provider value={{ loggedInUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
