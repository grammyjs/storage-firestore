import type { CollectionReference } from '@google-cloud/firestore'

export function adapter<T>(collection: CollectionReference) {
    return {
        read: (key: string) =>
            collection
                .doc(key)
                .get()
                .then(d => d.data() as T | undefined),
        write: (key: string, value: T) => collection.doc(key).set(value),
        delete: (key: string) => collection.doc(key).delete(),
    }
}
