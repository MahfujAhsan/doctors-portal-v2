import React from 'react';
import chairImage from "../../../assets/images/chair.png";

const Banner = () => {
    return (
        <React.Fragment>
            <section>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chairImage} className="rounded-lg shadow-2xl" alt='chairImage'/>
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary  bg-gradient-to-r from-[#1b4d89] to-[#BAD8E0]">Get Appointment</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Banner;