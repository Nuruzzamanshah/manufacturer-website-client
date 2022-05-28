import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from './../Loading';
import { toast } from 'react-toastify';
const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const {data: services, isLoading} = useQuery('services', () => fetch('https://arcane-stream-26784.herokuapp.com/purchase').then(res => res.json()))
    
    const imageStoragekey = 'daa88ee479efe8fa9f286b47f14ff900';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStoragekey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const product = {
                    name: data.name,
                    email: data.email,
                    product: data.product,
                    img: img

                }
                fetch('https://arcane-stream-26784.herokuapp.com/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res =>res.json())
        .then(inserted =>{
            if(inserted.insertedId){
                toast.success('Product added succesfully')
                reset();
            }
            else{
                toast.error('Failed To add the product')
            }
        })
            }
        })
        
        
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>add a New product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                    </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        
                    </label>
                    </div>


                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product</span>
                    </label>
                    <select {...register('product')} class="select input-bordered w-full max-w-xs">
                        {
                            services.map(service=><option
                            key={service._id}
                            value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                    </div>
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                    </form>
        </div>
    );
};

export default AddProduct;