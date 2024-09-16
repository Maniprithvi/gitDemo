import { initializeApp } from "firebase/app";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0_W2xK7fTtpmy9T8S0wOc8MT0UJ7gjSU",
  authDomain: "imageupload-7be7a.firebaseapp.com",
  projectId: "imageupload-7be7a",
  storageBucket: "imageupload-7be7a.appspot.com",
  messagingSenderId: "917018035343",
  appId: "1:917018035343:web:31fd20cacf17b4a62d5cfa",
  measurementId: "G-L3TRK17YYV",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export async function uploadImageFirebase(imageObj?: any | undefined) {
  const source = "events";
  
  console.log(imageObj);
  const imageRef = ref(storage, `${source}/${imageObj.name}`);
  console.log(imageRef);
  return await uploadBytes(imageRef, imageObj).then((snapshot: any) => {
    console.log("imgref", imageRef, imageObj);
    return getDownloadURL(snapshot.ref)
      .then((res: any) => {
        console.log(res, "response from firebse");
        return res;
      })
      .catch((err: any) => console.log(err.message));
  });
}
