import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {  featuredPortfolio,
          webPortfolio,
          mobilePortfolio,
          designPortfolio,
          contentPortfolio} from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState("features");
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'features',
      title: 'Features'
    },
    {
      id: 'web',
      title: 'Web App'
    },
    {
      id:'mobile',
      title: 'Mobile App'
    },
    {
      id: 'design',
      title: 'Design'
    },
    {
      id : 'content',
      title: 'Content',
    }
  ]

  useEffect(()=> {

    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }

  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portofolio</h1>
      <ul>
       {list.map((item, id) => {
         return <PortfolioList
         key={id}
         id={item.id}
         title= {item.title}
         active ={selected === item.id}
         setSelected= {setSelected} />
       })}
      </ul>
      <div className="container">
        {data.map((d, id)=>(
            <a href="#contact" style={{ textDecoration: "none"}} key={id}>
              <div  className="item">
                <img src={d.img} alt={d.title} />
                <h3>{d.title}</h3>
              </div>
            </a>
        ))}
      </div>
    </div>
  )
}
