import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function getItems (userId) {

    try {
        const items = [];
        const docRef = query(collection(db,'users',userId,'items'));
        const documents = await getDocs(docRef)

        if(!documents.empty)
        {
            documents.forEach((document) => {
                const item = {id: document.id,...document.data()}
                items.push(item)
            })

        }
        else 
        {
            return null

        }


    }
    catch (error) {
        console.error("error fetching items",error);
        return [];
    }
    
  
}

export async function addItem (userId,item) {

try {
    const itemsCollectionRef = collection(db,'users',userId,'items');
    const docRef = await addDoc(itemsCollectionRef,item);
    return docRef.id; 
}
catch (error) {
    console.error("error adding items", error);
    throw new Error("unable to add item");
}

}
``

async function handleDelete(itemId, userId) {
    try {
        const itemRef = doc(db, 'users', userId, 'items', itemId);
        await deleteDoc(itemRef);
    } catch (error) {
        console.error("error deleting item", error);
        throw new Error("Unable to delete item");
    }
}

