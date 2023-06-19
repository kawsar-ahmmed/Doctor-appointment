import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        }
    ]
    return (
        <section className='container mx-auto'>
            <div className="content flex justify-between">
                <div className="info px-3">
                    <h4 className=' text-xs lg:text-xl  text-cyan-500 font-bold'>Testimonial</h4>
                    <h2 className=' text-2xl lg:text-3xl text-black'>What Our Patients Says</h2>
                </div>
                <div className="img">
                    <figure>
                        <img className=' w-20 lg:w-48' src={quote} alt="" />
                    </figure>
                </div>
            </div>
            <div className="review grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 px-4">
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review= {review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;