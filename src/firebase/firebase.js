import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  Timestamp,
  where,
  query,
  addDoc,
  updateDoc,
} from "firebase/firestore";

export const getProducts = () => {
  const db = getFirestore();
  const ref = collection(db, "products");
  const products = getDocs(ref).then((snapShot) =>
    snapShot.docs.map((doc) => doc.data())
  );

  return products;
};

export const createOrder = async (buyer, items, total) => {
  const db = getFirestore();
  const docData = {
    buyer,
    items,
    date: Timestamp.fromDate(new Date()),
    total,
  };
  const docRef = await addDoc(collection(db, "orders"), docData);

  return docRef.id;
};

export const actualizarStock = async (items) => {
  const itemsIds = items.map((item) => item.itemId);

  const db = getFirestore();
  const q = query(collection(db, "products"), where("id", "in", itemsIds));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (docu) => {
    const firebaseProductData = docu.data();

    // obtener la cantidad a descontar
    const item = items.find((item) => item.itemId == firebaseProductData.id);
    const qtyToDiscount = item.itemQty;

    // actualizar el stock
    const productReference = doc(db, "products", docu.id);

    await updateDoc(productReference, {
      stock: firebaseProductData.stock - qtyToDiscount,
    });
  });
};
