import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box';

function App() {
  const [count, setCount] = useState(
    [
      {
        photo: "bg-[url('../public/1.jpg')]",
        itemNo: 1,
        move: ["r", "d"]
      },
      {
        photo: "bg-[url('../public/2.jpg')]",
        itemNo: 2,
        move: ["r", "l", "d"]
      },
      {
        photo: "bg-[url('../public/3.jpg')]",
        itemNo: 3,
        move: ["l", "d"]
      },
      {
        photo: "bg-[url('../public/4.jpg')]",
        itemNo: 4,
        move: ["r", "u", "d"]
      },
      {
        photo: "bg-[url('../public/5.jpg')]",
        itemNo: 5,
        move: ["r", "l", "u", "d"]
      },
      {
        photo: "bg-[url('../public/6.jpg')]",
        itemNo: 6,
        move: ["l", "u", "d"]
      },
      {
        photo: "bg-[url('../public/7.jpg')]",
        itemNo: 7,
        move: ["r", "u"]
      },
      {
        photo: "bg-[url('../public/8.jpg')]",
        itemNo: 8,
        move: ["r", "l", "u"]
      },
      {
        photo: "bg-[url('../public/9.jpg')]",
        itemNo: 9,
        move: ["l", "u"]
      }
    ]
  );
  const [currentMove, setCurrentMove] = useState([
    {
      photo: "",
      itemNo: 1,
      move: ["r", "l", "u", "d"]
    }
  ]);
  const arr = [1, 2, 3];
  function handler(value: number, itemNo: number) {
    const x = count.slice(0, 5);
    count[5].itemNo = 5;
    console.log("🚀 ~ file: App.tsx:67 ~ handler ~ x:", x)
    console.log(value, itemNo);

  }


  return (
    <>
      <h1>Vite + vue</h1>
      <div className="flex justify-center items-center">
        {
          <div className='flex w-[1000px] flex-wrap'>
            {count.map((data) => <Box value={data} setItem={(value: number, itemNo: number) => handler(value, itemNo)} />)}
          </div>
        }
      </div>
    </>
  )
}

export default App
