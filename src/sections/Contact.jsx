import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {


    const formRef = useRef()

    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        try {
            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICEID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
                {
                    from_name: form.name,
                    to_name: 'Danny',
                    from_email: form.email,
                    to_email: 'danny.zhou49@gmail.com',
                    message: form.message
                },
                import.meta.env.VITE_APP_EMAILJS_OPTIONS,
            )

            setLoading(false)
            alert("Thanks! I'll get back to you as soon as possible 😃.")
            setForm({
                name: '',
                email: '',
                message: ''
            })
        } catch (error) {
            setLoading(false)
            console.error('EmailJS error:', error.text);
            console.log(error)
            alert("Ahh, something went wrong. Please try again.")
        }


    }


    return (
        <section className={"c-space my-20"} id={"contact"}>
            <div className={"relative min-h-screen flex items-center justify-center flex-col"}>
                <img src="/assets/terminal.png" alt="terminal background" className={"absolute inset=0 min-h-screen"}/>
                <div className={"contact-container"}>
                    <h3 className={"head-text"}>Let's talk</h3>
                    <p className={"text-lg text-white-600 mt-3"}>Whether it's a project collaboration, a career opportunity, or just a chat, I'd love to hear from you. Don't hesitate to reach out!</p>
                    <form ref={formRef} onSubmit={handleSubmit} className={"mt-12 flex flex-col space-y-7"}>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className={"field-input"}
                                placeholder={"LeBron James"}
                            />
                        </label>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className={"field-input"}
                                placeholder={"lebronjames@gmail.com"}
                            />
                        </label>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className={"field-input"}
                                placeholder={"Hi, I wanna give you a job..."}
                            />
                        </label>

                        <button className={"field-btn"} type={"submit"} disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className={"field-btn_arrow"}/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
