import React from 'react'
import './testimonials.scss';
export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Toure Aboubacar",
      title: "Senior Developer",
      img:
        "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "KONATE Bakary",
      title: "CEO of BoukyTech",
      img:
        "assets/man6.jpg",
      icon: "assets/youtube.png",
      desc:
        "Ingénieur en informatique avec plus de trois ans d’expérience, j’interviens pour tous vos besoins d’analyses, " +
          "de conceptions et de mise en œuvre de logiciels, d’application, Web ou mobile.",
      featured: true,
    },
    {
      id: 3,
      name: "Keita Moctar",
      title: "Co-Founder of BoukyTech",
      img:
        "https://1fid.com/wp-content/uploads/2022/06/no-profile-picture-11-720x720.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
        <div className="container">
      {data.map((d) =>(
          <div  key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={d.img} className="user" alt={d.title} />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h3>{d.title}</h3>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}
