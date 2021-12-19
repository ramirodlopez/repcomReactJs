import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  Timestamp,
  addDoc,
} from "firebase/firestore";

export const getProducts = () => {
  const db = getFirestore();
  const ref = collection(db, "products");
  const products = getDocs(ref).then((snapShot) =>
    snapShot.docs.map((doc) => doc.data())
  );

  return products;
};

export const createOrder = async (items, total) => {
  const db = getFirestore();
  const docData = {
    buyer: { name: "pepe", phone: 12321, email: "rami@ghola.com" },
    items,
    date: Timestamp.fromDate(new Date()),
    total,
  };
  const docRef = await addDoc(collection(db, "orders"), docData);

  return docRef.id;
};
