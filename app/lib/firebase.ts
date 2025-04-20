import { cert, initializeApp, getApps} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import "server-only";

//decodificação do certificado do firebase
const decodedKey = Buffer.from(process.env.FIREBASE_PRIVATE_KEY!, "base64").toString("utf-8");

//certificado do firebase
export const firebaseCert = cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: decodedKey,
});

//inicialização do firebase
//verifica se o firebase já foi inicializado para evitar inicializações múltiplas
if (!getApps().length) {
    initializeApp({
        credential: firebaseCert,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
}

//exportação do firebase
export const db = getFirestore();
export const storage = getStorage().bucket();

