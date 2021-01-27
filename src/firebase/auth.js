import firebase from 'firebase/app';
import 'firebase/auth';
import {createUserDocument} from "./user";

export const signup = async (email,password,firstName,lastName,phone,address) => {
    const resp = await firebase.auth().createUserWithEmailAndPassword(email,password)
    const userProfile = {email:email,
                         displayName: `${firstName} ${lastName}`,
                         address : address,
                         role : 'user',
                         phoneNumber : phone,
                        }
    const user = resp.user
    await user.updateProfile({ displayName: `${firstName} ${lastName}` , phoneNumber : phone})
    await createUserDocument(userProfile,resp.user.uid);
    // return user
}
export const logout = () => {
    return firebase.auth().signOut();
};
export const login = async (email, password) => {
    const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    return resp.user;
};