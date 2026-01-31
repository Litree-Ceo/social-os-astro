import { db } from '../../firebase/client';
import { collection, addDoc } from "firebase/firestore";

export async function get({ params, request }) {
    try {
        const docRef = await addDoc(collection(db, "network-status"), {
            status: "stable",
            timestamp: new Date()
        });
        return new Response(JSON.stringify({ id: docRef.id }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (e) {
        console.error("Error adding document: ", e);
        return new Response(JSON.stringify({ error: e.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}