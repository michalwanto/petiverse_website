import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDfn1mXew6yKQvoygbpMn6WvVEdCqjCQHY",
  authDomain: "petiverse-f7288.firebaseapp.com",
  databaseURL: "https://petiverse-f7288.firebaseio.com",
  projectId: "petiverse-f7288",
  storageBucket: "petiverse-f7288.appspot.com",
  messagingSenderId: "229844084150",
  appId: "1:229844084150:web:771624643eda3d66d1cd17",
  measurementId: "G-J3QTND7BYY",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { items, title } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const convertTokenDataToDataArray = (data) => {
  const unixTime = new Date(data.token.created * 1000);
  const time = unixTime.toLocaleString();
  const dataArray = () => ({
    id: data.token.id,
    email: data.token.email,
    itemsPurchased: data.purchasedItems,
    time: time,
    addresses: {
      city: data.token.card.address_city,
      country: data.token.card.address_country,
      address_line1: data.token.card.address_line1,
      address_line1_check: data.token.address_line1_check,
      address_line2: data.token.card.address_line2,
      state: data.token.card.address_state,
      zip: data.token.card.address_zip,
      zip_check: data.token.card.address_zip_check,
      country: data.token.card.country,
    },
    card: {
      brand: data.token.card.brand,
      funding: data.token.card.funding,
    },
  });

  return dataArray();
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
