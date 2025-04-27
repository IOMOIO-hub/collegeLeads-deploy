import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, deleteDoc, collection, doc, getDoc, getDocs, query, where, setDoc } from 'firebase/firestore'

import { firebaseConfig } from './config.js'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const createDocument = async (collection_name, document) => {
    try {
        const doc = await addDoc(collection(db, collection_name), document)
        console.log(`doc ${doc.id} has been created in ${collection_name}`)
        return doc.id
    } catch (e) {
        console.error("Error adding document", e)
    }
}

export const getDocument = async (collection_name, id) => {
    try {
        const document = await getDoc(doc(db, collection_name, id))
        return document.data() || null
    } catch (e) {
        console.error("Error getting document", e)
    }
}

export const getDocumentsByField = async (collection_name, field, value) => {
    try {
        const querySnapshot = await getDocs(query(collection(db, collection_name), where(field, "==", value)))
        let documents = []
        querySnapshot.forEach(doc => documents.push({ id: doc.id, ...doc.data() }))
        return documents
    } catch (e) {
        console.error("Error getting document", e)
        return []
    }
}

export const getAllIdsFromCollection = async (collection_name) => {
    try {
        const querySnapshot = await getDocs(collection(db, collection_name))
        let result = []
        querySnapshot.forEach(doc => result.push(doc.id))
        return result
    } catch (e) {
        console.error("Error getting documents", e)
    }
}

export const loadDocuments = async (collection_name) => {
    try {
        const querySnapshot = await getDocs(collection(db, collection_name))
        return querySnapshot.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (e) {
        console.error("Error getting documents", e)
    }
}

export const updateDocument = async (collection_name, id, value) => {
    await setDoc(doc(db, collection_name, id), value)
}

export const deleteDocument = async (collection_name, id) => {
    await deleteDoc(doc(db, collection_name, id))
}
