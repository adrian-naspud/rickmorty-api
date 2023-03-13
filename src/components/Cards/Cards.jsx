import React from 'react'
import s from "./style.module.css";

const Cards = ({ results }) => {

  let display; // solo declaro varible sin valor 

  if (results) {
    display = results.map(x => {
      let { id, name, image, status } = x // destructurar datos de cada personaje
      return (
        <div key={id} className={`${s.cardo} col-3 p-0 mb-4`} >



          <img src={image} alt="" className="img-fluid p-2" />
          <div className={`${s.contentT} content p-2`}>
            <div className='fs-4 fw-bold mb-4'>{name}</div>
            <div className="">
              <div className="fs-6">Status</div>

              {(() => {
                if (status === "Dead") {
                  return (
                    <div className={`${s.status} badge bg-danger`}
                    >
                      {status}
                    </div>
                  );
                } else if (status === "Alive") {
                  return (
                    <div className={`${s.status} badge bg-success`}
                    >
                      {status}
                    </div>
                  );
                } else {
                  return (
                    <div className={`${s.status} badge bg-secondary`}
                    >
                      {status}
                    </div>
                  );
                }
              })()}

            </div>
          </div>




        </div >
      )
    })
  } else {
    display = 'No CHaracters Found :/';
  }

  console.log(results)



  return <> {display} </>
}

export default Cards
