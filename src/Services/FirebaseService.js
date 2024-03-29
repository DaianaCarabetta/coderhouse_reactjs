import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, getDocs, query, where, addDoc } from 'firebase/firestore/lite';

const config = {
  apiKey: "AIzaSyC84IM8TUTl5X44PI9VVUfhfOXYuUER7xw",
  authDomain: "coderhouse-ecommerce-a485e.firebaseapp.com",
  projectId: "coderhouse-ecommerce-a485e",
  storageBucket: "coderhouse-ecommerce-a485e.appspot.com",
  messagingSenderId: "975057588792",
  appId: "1:975057588792:web:a1baa3d9671fd08919cccd"
};

const app = initializeApp(config);
const db = getFirestore(app);

async function list(col, queryFilterArray = null) {
    const selectedCollection = collection(db, col);
    let result = [];
    if (queryFilterArray){
        const queries = [];
        for(let queryFilter of queryFilterArray) {
            queries.push(where(queryFilter.field, queryFilter.condition, queryFilter.value)) 
        }
        const queryFilter = query(selectedCollection, ...queries);
        result = await getDocs(queryFilter);
    }else{
        result = await getDocs(selectedCollection);
    } 

    return result.docs.map(doc => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data };
    });
}

async function get(col, id) {
    const selectedDoc = doc(db, col, id);
    const item = await getDoc(selectedDoc);
    return { id, ...item.data() };
}
async function create(col, data) {
    const selectedCollection = collection(db, col);
    const newRef = await addDoc(selectedCollection, data)
    return await get(col, newRef.id)
}

export { list, get, create };