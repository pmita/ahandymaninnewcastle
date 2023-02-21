import { useState } from 'react';
//FIREBASE
import { firestore, timestamp } from '../firebase/config';

export type FirestoreDoc = {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobilePhone?: string;
  location?: string;
  additionalDetails?: string;
}

export const useFirestore = (collection: string) => {
  //STATE
  const [doc, setDoc] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);

  const uploadDoc = async (doc: FirestoreDoc) => {
    try {
      const docRef = await firestore.collection(collection).add({
        ...doc,
      });
    } catch(err){
      setError(err);
      setIsPending(false);
    }
  }

  return { doc, error, isPending, uploadDoc};
}