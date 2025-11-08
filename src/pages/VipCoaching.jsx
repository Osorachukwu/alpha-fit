import { TriangleAlert } from "lucide-react";
import React, { useState } from "react";

function VipCoaching() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        ageRange: "",
        contactNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };
    console.log(formData)

    return (
        <div className="text-white px-4 py-8">
            <div className="border border-white rounded-xl p-6 max-w-lg mx-auto shadow-md bg-brand-primary/80 backdrop-blur-sm">
                <h2 className="text-center text-2xl font-semibold mb-6">
                    Personal Information
                </h2>

                <form onSubmit={handleSubmit} >
                    {/* First Name */}
                    <div>
                        <label className="block mb-2 font-medium">What is your first name?</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Username"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="input validator w-full"
                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                            minLength="3" maxLength="30"
                            title="Only letters, numbers or dash"
                            required
                        />
                        <div className="validator-hint">
                            <span className="inline-flex gap-1 items-center border-red-400 border rounded-sm py-0 px-[2px]">
                                <TriangleAlert className="text-red-500 w-4" />
                                <p>Please fill out this field.</p>
                            </span>
                        </div>
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block mb-2 font-medium">What is your last name?</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                             className="input validator w-full"
                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                            minLength="3" maxLength="30"
                            title="Only letters, numbers or dash"
                            required
                        />
                        <div className="validator-hint">
                            <span className="inline-flex gap-1 items-center border-red-400 border rounded-sm py-0 px-[2px]">
                                <TriangleAlert className="text-red-500 w-4" />
                                <p>Please fill out this field.</p>
                            </span>
                        </div>
                    </div>

                    {/* Age Range */}
                    <div>
                        <label className="block mb-2 font-medium">Please select your age range</label>
                        <select
                            name="ageRange"
                            value={formData.ageRange}
                            onChange={handleChange}
                            className="select select-bordered w-full text-black"
                            required
                        >
                            <option value="" disabled>Pick an age range</option>
                            <option value="under18">Under 18</option>
                            <option value="18-24">18 - 24</option>
                            <option value="25-34">25 - 34</option>
                            <option value="35-44">35 - 44</option>
                            <option value="45+">45 and above</option>
                        </select>
                         {/* <div className="validator-hint">
                            <span className="inline-flex gap-1 items-center border-red-400 border rounded-sm py-0 px-[2px]">
                                <TriangleAlert className="text-red-500 w-4" />
                                <p>Please fill out this field.</p>
                            </span>
                        </div> */}
                    </div>

                    {/* Contact Number */}
                    <div>
                        <label className="block mb-2 font-medium">
                            What’s the best number for me to contact you on?
                        </label>

                        <div className="flex gap-3">
                            {/* Country Code Dropdown */}
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className="select select-bordered w-1/3 text-black"
                                required
                            >
                                <option value="" disabled>
                                    Code
                                </option>
                                <option value="+234">🇳🇬 +234 (Nigeria)</option>
                                <option value="+44">🇬🇧 +44 (UK)</option>
                                <option value="+1">🇺🇸 +1 (USA)</option>
                                <option value="+91">🇮🇳 +91 (India)</option>
                            </select>

                            {/* Phone Number Input */}
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="input input-bordered w-2/3 text-black"
                                placeholder="Enter phone number"
                                pattern="[0-9]{6,15}"
                                title="Enter a valid phone number (6–15 digits)"
                                required
                            />
                        </div>

                        <p className="text-xs mt-1 text-gray-300">
                            Please include your country code and valid phone number.
                        </p>
                    </div>


                    <button type="submit" className="btn btn-secondary w-full mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VipCoaching;