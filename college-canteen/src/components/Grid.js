import React, { Suspense, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import urlContext from '../context/api_url/urlContext';
// import Card from './Card'
import LazyCard from './lazy/Card'
import "./css/Grid.css";
import { actionCreaters } from '../state';
import LoadingGrid from './lazy/LoadingGrid';
// import InfiniteScroll from 'react-infinite-scroll-component';
const Card = React.lazy(() => import("./Card.js"));

// const host="http://127.0.0.1:5000";

export default function Grid() {

  const host = useContext(urlContext);
  const [foodItem, setFoodItem] = useState([]);
  const theme = useSelector(state => state.theme);
  const login = useSelector(state => state.login);
  const dispatch = useDispatch()
  
  //infinite scroll
  const fetchingData = useRef(false);
  const hasMore = useRef(true);
  // const page = useRef(1);

  const lastCard = document.querySelector('.loading');
  // console.log(lastCard);
  const observer = new IntersectionObserver((entries) => {
    // console.log('is intersecting ',entries[0].isIntersecting)
    if (entries[0].isIntersecting && !fetchingData.current && hasMore.current){
      // console.log('fetch more called, fetching data : ', foodItem.length)
      fetchMoreData();
    }

  });

  if (lastCard != null) {
    observer.observe(lastCard);
  }

  const fetchMoreData = () => {
    fetchingData.current=true;
    // console.log("fetching more data... ", fetchingData.current);
    console.log(foodItem.length)
    const pageno=foodItem.length/3;
    const url = `${host}/api/fooditem/getFood?page=${pageno+1}&size=${3}`;
    // page.current++;
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('setfooditem: ',foodItem)
        console.log('data ', data)
        if(data && data.length==0){
          hasMore = false.current;
        }
        // console.log("fetched more data... ", fetchingData.current);
        
        setTimeout(() => {
          setFoodItem([...foodItem, ...data]);
          console.log('settimeout: ',foodItem)
          fetchingData.current=false;
          // console.log("after timout ", fetchingData.current);
        }, 10);
        //set localcart
        // console.log(foodItem)

      });
  }

  const [loading, setLoading] = useState(true);

  //get food items

  // useEffect(() => {

  //   let url = `${host}/api/fooditem/getFood?page=${1}&size=${3}`;

  //   fetch(url)
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setFoodItem(data);
  //       setLoading(false);

  //       //set localcart
  //       console.log('useeffect: ',foodItem)

  //     });


  //     //infinite scroll
  //     setTimeout(() => {
  //       fetchingData.current=false;
  //     }, 100);

  // }, [host])

  useMemo(() => {
    console.log("hello");
    
    let url = `${host}/api/fooditem/getFood?page=${1}&size=${3}`;

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setFoodItem(data);
        setLoading(false);

        //set localcart
        console.log('useMemo: ',foodItem)

      });
  }, [])

  useEffect(() => {
    console.log('useeffect ',foodItem)
  },[foodItem])

  return (
    <div className='grid-container' style={{
      backgroundColor: theme ? "rgb(100,100,100)" : "white",
      color: theme ? "white" : "black",
    }}>

      {/* <InfiniteScroll
        dataLength={20}
        next={()=>console.log("hello")}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        
        {
        foodItem.map((element) => (
          <div key={element._id}>
            <Suspense fallback={<LazyCard />}>
              <Card
                key={element._id}
                num={element._id}
                imgurl="https://picsum.photos/60"
                foodName={element.name}
                price={element.price}
                dsc={element.dsc}
              />
            </Suspense>
          </div>
        ))
      }

      </InfiniteScroll> */}

      {
        foodItem.map((element) => (
          <div className='card' key={element._id}>
            <Suspense fallback={<LazyCard />}>
              <Card
                key={element._id}
                num={element._id}
                imgurl="https://picsum.photos/60"
                foodName={element.name}
                price={element.price}
                dsc={element.dsc}
              />
            </Suspense>
          </div>
        ))
      }

      <footer className='loading'>loading more...</footer>

      {/* {loading ? <LoadingGrid /> : null} */}
    </div>
  )
}
