import { useEffect, useState, useContext } from 'react';

import { FirebaseContext } from '../context/firebase';

// A custom hook to pull data from firebase
export default function useContent(target) {
  // some state and pulling firebase object from context
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => { // get data, then take a snapshot, then map over it
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  // dynamic property name [target]
  return { [target]: content };
}
