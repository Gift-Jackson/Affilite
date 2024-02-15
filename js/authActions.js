const URL = "https://affiliate-vt50.onrender.com"

// Utility function to save data to local storage
async function saveToLocalStorage(key, data) {
    const prefixedKey = `affiliate-data-${key}`;
    localStorage.setItem(prefixedKey, JSON.stringify(data));
}

// Utility function to retrieve data from local storage
function getFromLocalStorage(key) {
    const prefixedKey = `affilite-data-${key}`;
    const storedData = localStorage.getItem(prefixedKey);

    try {
        return JSON.parse(storedData);
    } catch (error) {
        console.error(`Error parsing data for key ${prefixedKey}:`, error.message);
        return null;
    }
}

// Utility function to remove data from local storage
function removeFromLocalStorage(key) {
    const prefixedKey = `affilite-data-${key}`;
    localStorage.removeItem(prefixedKey);
}

// Utility function to update data in local storage
function updateLocalStorage(key, newData) {
    const existingData = getFromLocalStorage(key);
    if (existingData) {
        saveToLocalStorage(key, { ...existingData, ...newData });
    }
}

// Register user function
async function registerUser(data) {
    try {
        console.log(data);
        const response = await fetch(URL + "/api/v1/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        await saveToLocalStorage('accessToken', responseData.accessToken);
    } catch (error) {
        console.error("Error occurred during user registration:", error.message);
    }
}

// Login function
async function loginUser(userName, password) {
    try {
        const response = await fetch(URL + "/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, password }),
        });

        const responseData = await response.json();
        await saveToLocalStorage('accessToken', responseData.accessToken);
    } catch (error) {
        console.error("Error occurred during login:", error.message);
    }
}

// Get user function
async function getUser() {
    try {
        const accessToken = getFromLocalStorage('accessToken');
        if (!accessToken) {
            console.error("Access token not found.");
            return;
        }

        const response = await fetch(URL + "/api/v1/users/get", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const userData = await response.json();
        console.log("User data:", userData);
    } catch (error) {
        console.error("Error occurred during get user:", error.message);
    }
}

// Update user function
async function updateUser(updatedData) {
    try {
        const accessToken = getFromLocalStorage('accessToken');
        if (!accessToken) {
            console.error("Access token not found.");
            return;
        }

        const response = await fetch(URL + "/api/v1/users/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(updatedData),
        });

        const updatedUserData = await response.json();
        console.log("Updated user data:", updatedUserData);
    } catch (error) {
        console.error("Error occurred during update user:", error.message);
    }
}

// Delete user function
async function deleteUser() {
    try {
        const accessToken = getFromLocalStorage('accessToken');
        if (!accessToken) {
            console.error("Access token not found.");
            return;
        }

        const response = await fetch(URL + "/api/v1/users/delete", {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const deletedUserData = await response.json();
        console.log("Deleted user data:", deletedUserData);
    } catch (error) {
        console.error("Error occurred during delete user:", error.message);
    }
}


//registerUser({"firstName":"Nancy","lastName":"Jude","userName":"nampna","email":"nagpncy@gmail.com","password":"Nancy23"})
