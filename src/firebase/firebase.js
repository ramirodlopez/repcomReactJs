import { getFirestore, collection, getDocs } from 'firebase/firestore'

export const getProducts = () => {

    const db = getFirestore()
    const ref = collection(db, "products")
    const products = getDocs(ref)
        .then((snapShot) =>
            snapShot.docs.map((doc) => doc.data())
        )

    return products
}

