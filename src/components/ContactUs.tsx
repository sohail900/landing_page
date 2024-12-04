import React, { useState } from 'react'

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { fullname, email, message } = formData

        const mailtoLink = `mailto:example@gmail.com?subject=Contact Form Submission from ${fullname}&body=Name: ${fullname}%0AEmail: ${email}%0AMessage: ${message}`
        window.location.href = mailtoLink
        setFormData({ fullname: '', email: '', message: '' })
    }

    return (
        <section
            className='mt-24 px-mainPadding max-sm:px-mobilePadding'
            id='about'
        >
            <h1 className='text-3xl font-semibold text-primary text-center'>
                Let's Get In Touch.
            </h1>
            <p className='text-center text-textColor/70 font-medium leading-snug mt-2'>
                Or just reach out manually to{' '}
                <span className='text-primary font-medium'>
                    example@gmail.com
                </span>
            </p>
            <form
                className='mt-16 w-[40%] mx-auto flex flex-col mb-5 max-md:w-[80%]'
                onSubmit={handleSubmit}
            >
                <label
                    htmlFor='fullname'
                    className='bg-primary/10 text-[0.9rem] w-fit px-2 text-primary rounded-2xl'
                >
                    Fullname
                </label>
                <input
                    type='text'
                    name='fullname'
                    value={formData.fullname}
                    onChange={handleChange}
                    className='mt-2 mb-4 py-2 px-4 border-2 rounded-xl'
                    placeholder='Enter your Fullname'
                    required
                />
                <label
                    htmlFor='email'
                    className='bg-primary/10 text-[0.9rem] w-fit px-2 text-primary rounded-2xl'
                >
                    Email
                </label>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='mt-2 mb-4 py-2 px-4 border-2 rounded-xl'
                    placeholder='Enter your Email'
                    required
                />
                <label
                    htmlFor='message'
                    className='bg-primary/10 text-[0.9rem] w-fit px-2 text-primary rounded-2xl'
                >
                    Message
                </label>
                <textarea
                    rows={4}
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Enter your Message'
                    className='mt-2 mb-4 py-2 px-4 border-2 rounded-2xl resize-y'
                    required
                ></textarea>
                <button
                    type='submit'
                    className='w-fit py-2 px-8 rounded-xl bg-black transition-all ease-linear text-white hover:opacity-75'
                >
                    Submit
                </button>
            </form>
        </section>
    )
}

export default ContactUs
