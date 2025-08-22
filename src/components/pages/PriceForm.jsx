import React, { useState } from 'react';

function PriceForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    job: '',
    date: '',
    time: '',
  });
  const [popup, SetPopup] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     
    console.log(formData); 
    SetPopup(true);

    setTimeout(() => SetPopup(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      job: '',
      date: '',
      time: '',
    });
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-5 mb-4 font-bold text-2xl">
        Take the first step toward NEPRA compliance today.
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-4 col-span-4 gap-3 w-full max-w-4xl">
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="col-span-4 border border-gray-700 p-3"
          required
        />

        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="col-span-2 border border-gray-700 p-3"
          required
        />

        <input 
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="col-span-2 border border-gray-700 p-3"
          required
        />

        <input 
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company/organization"
          className="col-span-2 border border-gray-700 p-3"
          required
        />

        <input 
          type="text"
          name="job"
          value={formData.job}
          onChange={handleChange}
          placeholder="Job Title/Role"
          className="col-span-2 border border-gray-700 p-3"
          required
        />

        <label className="col-span-4 font-semibold p-1">
          What date and time work best for you to meet with our consultant?
        </label>

        <input 
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="col-span-2 border border-gray-700 p-3"
          required
        />

        <input 
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="col-span-2 border border-gray-700 p-3"
          required
        />

        <input 
          type="submit"
          value="Submit"
          className="col-span-4 bg-gradient-to-r from-blue-600 to-blue-950 text-center text-white text-lg p-1 rounded-xl hover:bg-blue-950 cursor-pointer"
        />
      </form>
    </div>
   {popup? <div className='flex fixed top-0 bottom-0 left-0 right-0 justify-center items-center z-50 bg-blue-950 text-white text-2xl w-48 shadow-2xl'>
      Submit Successfully!
    </div> :null}
    </>
  );
}

export default PriceForm;
