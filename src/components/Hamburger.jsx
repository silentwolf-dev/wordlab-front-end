import '../styles/hamburger.css'

function Hamburger({handleToggle}){
    return(
        <div className="bar" onClick={handleToggle}>
           <span className="line"></span>
           <span className="line"></span>
           <span className="line"></span>
        </div>
    )
}

export default Hamburger;
