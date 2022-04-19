import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../firebase';
import { useGlobalContext } from './GlobalContext';

const LikedContext = createContext(null);

function useLikedContext() {
  return useContext(LikedContext);
}

function LikedContextProvider({ children }) {
  const { user } = useGlobalContext();
  const [likesDoc, setLikesDoc] = useState([]);
  const [collectionDoc, setCollectionDoc] = useState([]);
  const [errLikes, setErrLikes] = useState(null);
  const [errCollection, setErrColl] = useState(null);
  let [update, setUpdate] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoad(true);
      try {
        let likDocs = await getDocs(collection(db, 'users', user.uid, 'likes'));
        let collDocs = await getDocs(
          collection(db, 'users', user.uid, 'collections')
        );
        let modlikDocs = [];
        likDocs.docs.forEach((el) => {
          modlikDocs.push({ ...el.data(), id: el.id });
        });
        let modcollDocs = [];
        collDocs.docs.forEach((el) => {
          modcollDocs.push({ ...el.data(), id: el.id });
        });
        setLikesDoc([...modlikDocs]);
        setUpdate(false);
        setCollectionDoc([...modcollDocs]);
      } catch (err) {
        console.log(err.message);
      }
    }
    user && getData().then((_) => setLoad(false));
  }, [user, update]);

  async function likesFunc(obj, id) {
    if (user) {
      try {
        errLikes && setErr(null);
        await setDoc(doc(db, 'users', user.uid, 'likes', id), {
          ...obj,
        });
      } catch (err) {
        setErrLikes(err.message);
      }
    }
  }
  async function removeLiked(id) {
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'likes', id));
    } catch (err) {
      setErrLikes(err.message);
    }
  }
  async function collectFunc(obj, id) {
    if (user) {
      try {
        errCollection && setErr(null);
        await setDoc(doc(db, 'users', user.uid, 'collections', id), {
          ...obj,
        });
      } catch (err) {
        setErrColl(err.message);
      }
    }
  }
  async function removeCollection(id) {
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'collections', id));
    } catch (err) {
      setErrColl(err.message);
    }
  }
  const value = {
    likesFunc,
    removeLiked,
    removeCollection,
    collectFunc,
    errLikes,
    likesDoc,
    setUpdate,
    collectionDoc,
    errCollection,
    load,
  };
  return (
    <LikedContext.Provider value={value}>{children}</LikedContext.Provider>
  );
}

export { LikedContextProvider, useLikedContext };
