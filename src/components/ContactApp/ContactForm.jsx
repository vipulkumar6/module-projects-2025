import React from 'react'

const ContactForm = () => {

    const [data, setData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        e.preventDefault()
        setData({
            ...data,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        setData({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    }
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
        >
            <form action="" onSubmit={handleSubmit}>


                <div className='input-group'>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input value={data.name} onChange={handleChange} type="text" name="name" id="name" placeholder='enter name' />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input value={data.email} onChange={handleChange} type="email" name="email" id="name" placeholder='enter name' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm
