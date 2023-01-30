import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner/Spinner';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-v2-server.vercel.app/appointmentSpecialty');
            const data = res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    fetch('https://doctors-portal-v2-server.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            toast.success(`${data?.name} is Added Successfully`);
                            navigate('/dashboard/manage-doctors');
                        })
                }
            })
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <h2 className='text-[32px] text-center'>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-8/12 mx-auto my-[10px]">
                    <label className="label">
                        <span className="label-text font-caveat text-[22px] font-bold text-primary mb-[5px]">Name:</span>
                    </label>
                    <input {...register("name", { required: "Name is Required*" })} type="text" className="input w-full shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico" />
                    {errors.name && <p className="font-caveat text-[20px] mt-[15px] font-bold text-error">{errors.name.message}</p>}
                </div>

                <div className="form-control w-8/12 mx-auto my-[10px]">
                    <label className="label">
                        <span className="label-text font-caveat text-[22px] font-bold text-primary mb-[5px]">Email:</span>
                    </label>
                    <input {...register("email", { required: "Email is Required*" })} type="text" className="input w-full shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico" />
                    {errors.email && <p className="font-caveat text-[20px] mt-[15px] font-bold text-error">{errors.email.message}</p>}
                </div>

                <div className="form-control w-8/12 mx-auto my-[10px]">
                    <label className="label">
                        <span className="label-text font-caveat text-[22px] font-bold text-primary mb-[5px]">Specialty:</span>
                    </label>

                    <select {...register("specialty")} className="input w-full shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico hover:cursor-pointer">
                        {
                            specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-8/12 mx-auto my-[10px]">
                    <label className="label">
                        <span className="label-text font-caveat text-[22px] font-bold text-primary mb-[5px]">Photo:</span>
                    </label>
                    <input {...register("image", { required: "Photo is Required*" })} type="file" className="input w-full shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico" />
                    {errors.email && <p className="font-caveat text-[20px] mt-[15px] font-bold text-error">{errors.email.message}</p>}
                </div>

                <div className="form-control w-8/12 mx-auto my-[10px]">
                    <input type="submit" className="btn bg-gradient-to-r from-neutral to-primary w-8/12 mx-auto font-caveat font-bold text-[22px] text-white mt-[5px]" value="Add Doctor" />
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;