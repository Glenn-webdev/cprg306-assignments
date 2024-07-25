import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function getItems (userId) {

    try {
        const items = [];
        const itemsCollectionRef = collection(db,'users',userId,'items');
        const itemQuery = (itemsCollectionRef);
        const queryDbItems = await getDocs(itemQuery);

        queryDbItems.forEach((doc)=> {
            items.push({id:doc.id,...doc.data()});
        });
        return items;

    }
    catch (error) {
        console.error("error fetching items",error);
        return [];
    }
    
  
}

export async function addItem (userId,item) {

}


export async function handleDelete() {
    const itemId = ""
}