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
                    description="In a global collaboration spanning eight countries, they emerged as the go-to Full Stack Developer. Their ability to navigate complex challenges and streamline communication is unparalleled"
                    name='Evie Spears'
                    position='Full Stack Developer'
                    image='./images/testimonial-1.jpg'
                />
                <TestimonialCard 
                    description="They tackle coding challenges with finesse, delivering efficient solutions. Their adaptability and commitment to excellence make them an invaluable asset."
                    name='Adriana Green'
                    position='Software Engineer'
                    image='./images/testimonial-2.jpg'
                />
                <TestimonialCard 
                    description="They orchestrates seamless front-end to back-end integration, ensuring project success. Ready to bring innovation and expertise to your team."
                    name='John Doe'
                    position='DevOps Engineer'
                    image='./images/testimonial-3.jpg'
                />
            </div>
        </div>
    )
}

export default Testimonials