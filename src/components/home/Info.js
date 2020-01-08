import React from 'react'
import {Link} from 'gatsby'


import Title from '../globals/Title'
export default function Info() {
    return (
       <section className="py-5">
           <div className="container">
               <Title title="Our Story" /> 
               <div className="row">
                   <div className="col-10 col-sm-8 mx-auto text-center">
                       <p className="lead text-muted mb-5">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ea nisi adipisci, suscipit modi odit, dolorem soluta culpa odio distinctio blanditiis sapiente neque ut aperiam magnam laborum? Dolor velit odit molestias ipsa officia delectus ducimus labore nobis eligendi. Dolorum ad deserunt excepturi, velit impedit eaque. Cum inventore, veniam provident ab distinctio alias blanditiis ipsum fugiat ipsam corporis cumque odit, expedita animi totam dolorem, reprehenderit tenetur doloremque a natus est. Rem temporibus, ea illum nulla, aperiam voluptates esse sed, consequatur id voluptas delectus eos vero repudiandae ad quos quidem iusto dolorum quo veritatis. Sit blanditiis iste dicta illo aut. Reprehenderit, quos?
                        </p>
                        <Link to='/collection'>
                            <button className="btn btn-orange text-uppercase">About Pa  </button>
                        </Link>
                    </div>
                </div>
            </div>

       </section>
    )
}
