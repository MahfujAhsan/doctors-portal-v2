import React from 'react';
import ShehabulIslam from "../../../assets/images/shehabul-islam.jpg";
import AlaminKhan from "../../../assets/images/Al-amin_Khan.png";
import TusharKhan from "../../../assets/images/tushar-khan.png";
import Doctor from './Doctor';

const Doctors = () => {

    const doctorsData = [
        {
            id: 1,
            name: 'Shehabul Islam',
            specialistic: 'DevLogy',
            phone: '(+880) 017XX-XXX',
            avatar: ShehabulIslam,
        },
        {
            id: 2,
            name: 'Al-amin Khan',
            specialistic: 'Pluginology',
            phone: '(+880) 017XX-XXX',
            avatar: AlaminKhan,
        },
        {
            id: 3,
            name: 'Tushar Khan',
            specialistic: 'Reactology',
            phone: '(+880) 017XX-XXX',
            avatar: TusharKhan,
        },
    ]

    return (
        <React.Fragment>
            <section className='mt-[100px]'>
                <h2 className='text-[38px] font-pacifico font-bold text-center'>Our Innovation Teams</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[60px] mb-[85px]'>
                    {
                        doctorsData.map((doctor) => <Doctor key={doctor.id} doctorInfo={doctor}></Doctor>)
                    }
                </div>
            </section>
        </React.Fragment>
    );
};

export default Doctors;