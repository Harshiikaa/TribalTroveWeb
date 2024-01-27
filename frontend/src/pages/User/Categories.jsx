import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "../../assets/images/sewing.jpg",
      cateName: "Fashion",
    },
    {
      cateImg: "../../assets/images/ponchu.png",
      cateName: "Electronic",
    },
    {
      cateImg: "../assets/images/ponchu.png",
      cateName: "Cars",
    },
    {
      cateImg: "../assets/images/ponchu.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "../assets/images/ponchu.png",
      cateName: "Gifts",
    },
    {
      cateImg: "../assets/images/ponchu.png",
      cateName: "Music",
    },
    {
      cateImg: "../assets/images/ponchu.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "../assets/images/ponchu.png",
      cateName: "Pets",
    },
    {
      cateImg: "../assets/images/ponchu.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "../assets/images/ponchu.png",
      cateName: "Groceries",
    },
    {
      cateImg: "../assets/images/ponchu.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
