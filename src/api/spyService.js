import { apiResponse } from "./client";
import { app, auth } from "../../firebase";
import { addDoc, collection, doc, getFirestore, getDocs, query, updateDoc, where, setDoc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { randomString } from "../services/AES";
import {setVariable} from '../services/AsyncStorageMethods'


const db = getFirestore(app);



const loginSpy = async (userData) => {
    try {
        var exist = false;
        const querySnapshot = await getDocs(collection(db, "devices"));
            var spyInformation = null;
            querySnapshot.forEach((doc) => {
                if (doc.data().code == userData.id) {
                    exist = true;
                    spyInformation = doc.data();
                }
            });
            if (exist) {
                spyInformation.type = 1
                setVariable(spyInformation, "locationUserInfo")
                return apiResponse(200, "Login Successfully", spyInformation);
            }else{
                return apiResponse(422, "Device does not exist", userData);
            }
    } catch (error) {
        console.log("Error: ", error);
        return apiResponse(400, "Error: ", error)
    }
}

const getDeviceInfo = async (uid) => {
    var device = [];
    try {
        const docRef = doc(db, "devices", uid);
        const docSnap = await getDoc(docRef);
        var device = docSnap.data();
        if (docSnap.exists()) {
            return apiResponse(200, "device successfully retrieved", device)
        } else {
            return apiResponse(400, "Sorry the device does not exist")
        }
    } catch (error) {
        console.log("finddevice Error: ", error);
        return apiResponse(400, "Sorry the device does not exist")
    }
}

const updateDevice = async (data) => {
    try {
        const auth = getAuth();
        const docRef = doc(db, 'devices', data.id);
        await updateDoc(docRef, data);
        return apiResponse(200, "User profile successfully updated")
    } catch (error) {
        console.log("updateUserCollection Error: ", error);
        return apiResponse(400, "Sorry there was an error updating user")
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

const updateStatus = async (data) => {
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
export default { loginSpy, updateDevice, getDeviceInfo, findUser }