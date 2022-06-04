import { getDocument, setDocument } from '~/lib/firebase';
import { User as FirebaseUser } from 'firebase/auth';

export type AuthUser = { displayName: string; email: string; uid: string };

export type User = { displayName: string; email: string; points: number };

export const addNewUser = async ({ displayName, email, uid }: FirebaseUser) => {
  try {
    const user = await getDocument<User>('users', uid);
    if (user.exists()) return user.data();

    const data = {
      email,
      displayName,
      points: 0,
    };

    await setDocument('users', uid, data);
    return data as User;
  } catch (error) {
    console.log('🚀 ~ file: newUser.ts ~ line 16 ~ newUser ~ error', error);
  }
};
