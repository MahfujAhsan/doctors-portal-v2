import React from 'react';
import Quotation from "../../../assets/icons/quote.svg";
import JhonDoe from "../../../assets/images/people1.png";
import OliviaSmith from "../../../assets/images/people2.png";
import EmmaSmith from "../../../assets/images/people3.png";
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            id: 1,
            name: "John Doe",
            review: "In one word, Their service and hospitality are really great.",
            location: "Miami",
            image: JhonDoe,
        },
        {
            id: 2,
            name: "Olivia Smith",
            review: "To be very honest, their service and maintainability are really good.",
            location: "Jackson Height",
            image: OliviaSmith,
        },
        {
            id: 3,
            name: "Emma Smith",
            review: "Happy to connect with 'Doctors Portal', they are recommendable.",
            location: "Los Angeles",
            image: EmmaSmith,
        }
    ]

    return (
        <React.Fragment>
            <section>
                <div className='flex justify-between items-center mt-[120px]'>
                    <div>
                        <h4 className='font-caveat text-[22px] font-bold text-primary'>TESTIMONIAL</h4>
                        <h2 className='font-pacifico text-[38px] font-bold my-[10px] text-error'>What's Our Patients <br /> Says</h2>
                    </div>
                    <figure>
                        <img className='w-6/12 ml-auto' src={Quotation} alt="QuotationIcon" />
                    </figure>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[45px] mb-[85px]'>
                    {
                        reviews.map((review) => <Review key={review.id} reviewInfo={review}></Review>)
                    }
                </div>
            </section>
        </React.Fragment>
    );
};

export default Testimonial;