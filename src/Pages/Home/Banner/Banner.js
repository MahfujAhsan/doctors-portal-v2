import React from 'react';
import ChairImage from "../../../assets/images/chair.png";

const Banner = () => {
    return (
        <React.Fragment>
            <section className="mt-[65px]">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse lg:gap-[50px] bg-[url('/src/assets/images/bg.png')] bg-contain bg-no-repeat bg-center">
                        <img src={ChairImage} className="rounded-lg w-11/12 shadow-2xl" alt='chairImage'/>
                        <div>
                            <h1 className="text-5xl font-bold font-pacifico leading-[65px]">
                                Your New Smile
                                <br />
                                Starts Here
                                </h1>
                            <p className="py-8 font-caveat text-[30px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="bg-gradient-to-r from-neutral to-primary font-bold text-secondary font-pacifico border-none text-[22px] px-[45px] py-[15px] rounded-[8px]">Get Appointment</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Banner;