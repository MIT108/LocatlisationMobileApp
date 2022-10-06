import { apiResponse } from "./client";
import { app, auth } from "../../firebase";
import { addDoc, collection, doc, getFirestore, getDocs, query, updateDoc, where, setDoc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { randomString } from "../services/AES";
import {setVariable} from '../services/AsyncStorageMethods'


const db = getFirestore(app);
const addDevice = async (deviceData) => {
    try {
        var exist = false;
        deviceData.id = randomString(20)
        const querySnapshot = await getDocs(collection(db, "devices"));
            querySnapshot.forEach((doc) => {
                if (doc.data().userId == deviceData.userId && doc.data().name == deviceData.name) {
                    exist = true;
                }
            });
            if (!exist) {
                await setDoc(doc(db, "devices", deviceData.id ), deviceData);
                return apiResponse(200, "Device created successfully", deviceData);
            }else{
                return apiResponse(422, "Device Name already exists", deviceData)
            }
    } catch (error) {
        console.log("Error adding device", error);
        return apiResponse(400, "Error adding device", error)
    }
}

const listDevices = async (userId) => {
    
    try {
        var devices = [];
        const querySnapshot = await getDocs(collection(db, "devices"));
            querySnapshot.forEach((doc) => {
                if (doc.data().userId == userId) {
                    devices.push(doc.data())
                }
            });
            return apiResponse(200, "Device listed successfully", devices);

    } catch (error) {
        console.log("Cant list devices", error);
        return apiResponse(400, "Cant list devices", error)
    }
}


const getDevice = async (deviceId) => {
    try {
        var devices = null;
        const querySnapshot = await getDocs(collection(db, "devices"));
            querySnapshot.forEach((doc) => {
                if (doc.data().id == deviceId) {
                    devices = doc.data();
                }
            });
            return apiResponse(200, "Successfully", devices);
    } catch (error) {
        console.log("Error", error);
        return apiResponse(400, "Error", error)
    }
}

// productRef.forEach((doc) => {
//   var data = doc.data();
//   data["fId"] = doc.id;
//   products.push(data);
// });

const getAuthUser = async () => {
    try {
        const user = auth.currentUser;
        if (user) {
            return apiResponse(200, "Successfully authenticated user", user)
        } else {
            return apiResponse(400, "Sorry user does not exist")
        }
    } catch (error) {
        console.log("getAuthUser Error: ", error);

    }

}

const updateUserCollection = async (data) => {
    try {
        const auth = getAuth();
        const docRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(docRef, data);
        var currentUser = await findUser(auth.currentUser.uid);
        return apiResponse(200, "User profile successfully updated", currentUser)
    } catch (error) {
        console.log("updateUserCollection Error: ", error);
        return apiResponse(400, "Sorry there was an error updating user")
    }
}

const updateAuthUser = async (data) => {
    try {
        const auth = getAuth();
        await updateProfile(auth.currentUser, data);
        return apiResponse(200, "User profile successfully updated", auth.currentUser)
    } catch (error) {
        console.log("updateAuthUser Error: ", error);
        return apiResponse(400, "Sorry there was an error updating user")
    }
}

const updateUserPassword = async (newPassword) => {
    const user = auth.currentUser;
    try {
        if (newPassword != null || newPassword.length == 0) {
            const authMethod = user['providerId'];
            if (authMethod == "email_and_password") {
                var res = await updatePassword(user, newPassword);
                return apiResponse(200, "Password successfully password", res)
            }
        } s
    } catch (error) {
        console.log("updateUserPassword Error: ", error);
        return apiResponse(400, "Sorry there was an error updating password")
    }
}

const findUser = async (uid) => {
    var user = [];
    console.log("User Find Service", uid);
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        var user = docSnap.data();
        if (docSnap.exists()) {
            return apiResponse(200, "User successfully retrieved", user)
        } else {
            return apiResponse(400, "Sorry the user does not exist")
        }
    } catch (error) {
        console.log("findUser Error: ", error);
        return apiResponse(400, "Sorry the user does not exist")
    }

}
export default { addDevice, listDevices, getDevice, updateUserCollection, updateUserPassword, findUser }