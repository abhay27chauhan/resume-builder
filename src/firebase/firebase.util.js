import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from './secret'

firebase.initializeApp(firebaseConfig);

export default firebase;