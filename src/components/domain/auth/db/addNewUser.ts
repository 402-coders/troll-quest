import { getDocument, setDocument } from '~/lib/firebase';
import { User as FirebaseUser } from 'firebase/auth';
import { HeroTypes } from '../../select-mode/utils/heroTypes';

export type AuthUser = { displayName: string; email: string; uid: string };

export type User = {
  displayName: string;
  email: string;
  points: number;
  avatar: string;
  id: string;
  currentHero: HeroTypes;
  availableHeroes: HeroTypes[];
};

export const addNewUser = async ({ displayName, email, uid, photoURL }: FirebaseUser) => {
  try {
    const user = await getDocument<User>('users', uid);
    if (user.exists()) return user.data();

    const data: User = {
      email: email ?? '',
      displayName: displayName ?? '',
      avatar: photoURL ?? '',
      points: 0,
      currentHero: 'knight',
      availableHeroes: [],
      id: uid,
    };

    await setDocument('users', uid, data);
    return data;
  } catch (error) {
    console.log('🚀 ~ file: newUser.ts ~ line 16 ~ newUser ~ error', error);
  }
};
