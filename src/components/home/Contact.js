import React from 'react';
import Title from '../globals/Title'
const Contact = () => {
    return(
        <section className="contact py-5">
            <Title title="Contact us"/>
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/devls@yahoo.com" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="john smith"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" className="form-control" name="email" id="email" placeholder="john @mail.fr" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea 
                            name="description" id="description" className="form-control" rows="15"
                            placeholder="your description here....">
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-orange btn-block mt-5">Submit</button>

                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact