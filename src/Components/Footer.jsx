import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaVimeoV } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <div>
            <div className="h-80">

            </div>
            <footer className="bg-[#072927] text-white py-10 px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">CrowdCube</h2>
                        <p className="text-sm text-gray-300 mb-4">
                            Our secure online donation platform allows you to make contributions quickly.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <FiPhone className="text-green-500 text-xl" />
                                <span className="text-sm text-gray-300">+163-3654-7896</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FiMail className="text-yellow-500 text-xl" />
                                <span className="text-sm text-gray-300">info@donat.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["About Us", "Our News", "Our Campaign", "Privacy Policy", "Contact Us"].map(
                                (link, index) => (
                                    <li key={index} className="text-sm text-gray-300 hover:text-yellow-500 transition-colors">
                                        <a href="#" className="flex items-center space-x-2">
                                            <span>➤</span>
                                            <span>{link}</span>
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Service</h3>
                        <ul className="space-y-2">
                            {[
                                "Give Donation",
                                "Education Support",
                                "Food Support",
                                "Health Support",
                                "Our Campaign",
                            ].map((service, index) => (
                                <li key={index} className="text-sm text-gray-300 hover:text-yellow-500 transition-colors">
                                    <a href="#" className="flex items-center space-x-2">
                                        <span>➤</span>
                                        <span>{service}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Subscribe to Our Newsletter. Regular inspection and feedback mechanisms.
                        </p>
                        <div className="flex items-center bg-[#072927] border border-gray-600 rounded-lg p-2 mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent text-sm text-gray-300 flex-grow focus:outline-none"
                            />
                            <button className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600">
                                <span>✉</span>
                            </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-300 hover:text-yellow-500">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-yellow-500">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-yellow-500">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-yellow-500">
                                <FaBehance />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-yellow-500">
                                <FaVimeoV />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
                    Copyright 2024{" "}
                    <span className="text-yellow-500 font-semibold">CrowdCube</span>. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
