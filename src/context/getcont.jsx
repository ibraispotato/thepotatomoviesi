
import React, { createContext, useContext, useEffect } from "react";
import { useState} from 'react';
export const Context = createContext();
// eslint-disable-next-line react-hooks/rules-of-hooks
// const [addFavorites, setFavorites] = useState([])

export const GetCont = ({ children }) => {
    const [addFavorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites"))||[])
    const [addWishList,setWishList] = useState(JSON.parse(localStorage.getItem("wishlist"))||[])
    // console.log(addFavorites)
  useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(addFavorites))
  }, [addFavorites])
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(addWishList))
  },[addWishList])
    const addFav = (movie) => {
        if (addFavorites.indexOf(movie) !== -1) return
    
        setFavorites((prev) => [ ...prev, movie ])
      }
      const arr = addFavorites.map(f => f.id)
      // console.log()
      const removeFav = (movie) => {
        const arr = addFavorites.filter((item) => item.id !== movie)
        setFavorites(arr)
    }
    //////////////////////////////////////////////////////////////////////////////
    const addFavwishlist = (movie) => {
        if(addWishList.indexOf(movie) !== -1)return
        setWishList((prev) => [ ...prev, movie ])
    }
    const arrS = addWishList.map(f => f.id)
    // console.log()
    const removeWishList = (movie) => {
      const arrS = addWishList.filter((item) => item.id !== movie)
      setWishList(arrS)
  }
  
  //////////////////////////////////////////////////////////////////////////////
  const [addFavoritesShow, setFavoritesSHow] = useState(JSON.parse(localStorage.getItem("favoritess"))||[])
  const [addWishListShow,setWishListSHow] = useState(JSON.parse(localStorage.getItem("wishlists"))||[])
  // console.log(addFavoritesShow)
useEffect(() => {
    localStorage.setItem("favoritess", JSON.stringify(addFavoritesShow))
}, [addFavoritesShow])
useEffect(() => {
  localStorage.setItem("wishlists", JSON.stringify(addWishListShow))
},[addWishListShow])
  const addFavShow = (movie) => {
      if (addFavoritesShow.indexOf(movie) !== -1) return
  
      setFavoritesSHow((prev) => [ ...prev, movie ])
    }
    const arrShow = addFavoritesShow.map(f => f.id)
    // console.log()
    const removeFavShow = (movie) => {
      const arr = addFavoritesShow.filter((item) => item.id !== movie)
      setFavoritesSHow(arr)
  }
  //////////////////////////////////////////////////////////////////////////////
  const addFavwishlistShow = (movie) => {
      if(addWishListShow.indexOf(movie) !== -1)return
      setWishListSHow((prev) => [ ...prev, movie ])
  }
  const arrSShow = addWishListShow.map(f => f.id)
  // console.log()
  const removeWishListShow = (movie) => {
    const arrS = addWishListShow.filter((item) => item.id !== movie)
    setWishListSHow(arrS)
}

    return (
      <Context.Provider value={{
        addFavorites,setFavorites,addFav,arr,removeFav,addFavwishlist,
        removeWishList, arrS, addWishList, setWishList,
        addFavShow,arrShow,removeFavShow,setFavoritesSHow,addFavoritesShow,
        addFavwishlistShow,removeWishListShow,arrSShow,setWishListSHow,addWishListShow
      }}> 
        {children}
</Context.Provider>
    )
   
}

export const useStateContexts =() => useContext(Context)
