import { useState, useEffect } from 'react';
//FIREBASE
import { firestore, timestamp } from '../firebase/config';

export const useFirestore = (collection: string) => {
  //STATE
  const [doc, setDoc] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState<boolean>(true);

  const uploadDoc = async (doc: any) => {
    try {
      const docRef = await firestore.collection(collection).add({
        ...doc,
        createdAt: timestamp(),
        updatedAt: timestamp()
      });
    } catch(err){
      setError(err);
      setIsPending(false);
    }
  }

  return { doc, error, isPending, uploadDoc};
}