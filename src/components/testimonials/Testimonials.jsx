import React from 'react'
import './testimonials.scss';
export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Toure Aboubacar",
      title: "Senior Developer",
      img:
        "https://1fid.com/wp-content/uploads/2022/06/no-profile-picture-11-720x720.jpg",
      icon: "assets/twitter.png",
      desc:
        " I bring extensive experience and expertise in software development to the table. I have a proven track record of designing and building complex software solutions that align with business objectives.",
    },
    {
      id: 2,
      name: "KONATE Bakary",
      title: "CEO of BoukyTech",
      img:
        "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
      icon: "assets/youtube.png",
      desc:
        "I bring visionary leadership, technical expertise, and a passion for innovation to the helm. With a deep understanding of industry trends and emerging technologies, I steer the company towards delivering cutting-edge solutions that empower businesses to thrive in the digital age. ",
      featured: true,
    },
    {
      id: 3,
      name: "Keita Moctar",
      title: "Co-Founder of BoukyTech",
      img:
        "https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
      icon: "assets/linkedin.png",
      desc:
        "I am a visionary leader with a passion for innovation and technology. With a strong background in software development and a commitment to excellence, I co-established our company to create cutting-edge solutions that solve complex business challenges.",
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
