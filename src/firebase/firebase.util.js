import firebase from 'firebase/app';

import { firebaseConfig } from './secret'

firebase.initializeApp(firebaseConfig);

export default firebase;