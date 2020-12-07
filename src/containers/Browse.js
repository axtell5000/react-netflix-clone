import React, { useContext, useState, useEffect } from 'react'

import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './Profiles';

// component
import { Header, Loading } from '../components';

export function BrowseContainer({ slides }) {
  // state
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  // pulling firebase context
  const { firebase } = useContext(FirebaseContext);
  // built in method, to pull current user from firebase
  const user = firebase.auth().currentUser || {};

  // every time displayName changes, run this
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ?  (
    <>
      {loading ? (
        <Loading src={user.photoURL} />
      ) : (
        <Loading.ReleaseBody />
      )}
      <Header src="joker1"><p>Helo There</p></Header>
    </> 
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} /> 
  );
}