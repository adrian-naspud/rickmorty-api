import s from "./style.module.css"

const Logo = ({ image }) => (

  <div className={s.nav_left}>
    <img src={image} alt="logo" className={s.img} />
  </div>

)


export default Logo;
