import React from 'react';

const ContactUs = () => {
    return (
        <div style={{ backgroundColor: '#FBD062' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-5 align">
                        <h2><b> Let us handle your <br /> project, professionally </b></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum molestias et architecto eligendi ea, recusandae doloribus reiciendis nobis, culpa at laudantium unde, nesciunt perspiciatis repudiandae maiores ratione eos quos.</p>
                    </div>
                    <div className="col-md-6 offset-md-1 mt-5" id="footer">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="name" className="form-control" placeholder="Your name/company's name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="subject" name="subject" placeholder="Your message" style={{ height: "200px", width: "100%" }}></textarea>
                            </div>
                            <button style={{ backgroundColor: "#111430" }} type="submit" className="btn btn-dark btnLogin mx-auto w-25 mb-5">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;