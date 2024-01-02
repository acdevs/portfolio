import '../assets/styles/Testimonials.css'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    return (
        <div className='testimonial'>
            <p className="testimonial-title">
                My&nbsp;<span>Testimonial</span>
            </p>
            <div className="testimonial-view">
                <TestimonialCard 
                    description='I recently had to jump on 10+ different calls across eight different countries to find the right owner.'
                    name='Evie Spears'
                    position='Full Stack Developer'
                />
                <TestimonialCard 
                    description='I recently had to jump on 10+ different calls across eight different countries to find the right owner.'
                    name='Evie Spears'
                    position='Full Stack Developer'
                />
                <TestimonialCard 
                    description='I recently had to jump on 10+ different calls across eight different countries to find the right owner.'
                    name='Evie Spears'
                    position='Full Stack Developer'
                />
            </div>
        </div>
    )
}

export default Testimonials