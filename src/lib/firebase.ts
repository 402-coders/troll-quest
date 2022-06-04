import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, Auth, connectAuthEmulator } from 'firebase/auth';
import { addDoc, collection, doc, DocumentSnapshot, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  // databaseURL: import.meta.env.VITE_FIREBASE_DATABASEURL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
});

export const useAuth = () => {
  return getAuth(firebaseApp);
};

export const useFirestore = () => {
  return getFirestore(firebaseApp);
};

export const useStorage = () => {
  return getStorage(firebaseApp);
};

export const db = getFirestore(firebaseApp);

export type Collection = 'users';

export const setDocument = (collection: Collection, id: string, data: unknown) => {
  return setDoc(doc(db, collection, id), data);
};

export const addDocument = (collectionName: Collection, data: unknown) => {
  return addDoc(collection(db, collectionName), data);
};

export const updateDocument = (collection: Collection, id: string, data: any) => {
  const ref = doc(db, collection, id);

  return updateDoc(ref, data);
};

export const getDocument = async <T extends unknown>(collection: Collection, id: string) => {
  const ref = doc(db, collection, id);
  const document = await getDoc(ref);

  return document as DocumentSnapshot<T>;
};
