import React from "react";
import Web from "../images/web.png";
import Image from "next/image";


export default function ServicePage() {
  return (
    <div>
      <h1 className="pt-12 pb-12 font-bold text-2xl text-center underline underline-offset-4 bg-gray-100 decoration-black">
        Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2 py-2 pt-16">
        {/* Service Card 1: Web Development */}
        <div className="bg-gray-50 shadow-md ml-36 p-6 rounded-lg w-full md:w-4/5 mx-auto">
          <div className="flex items-center space-x-2">
            <Image
              src={Web} 
              alt="Web Development"
              className="w-16 h-16 object-cover "
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Web Development</h3>
              <p className="mt-2 text-gray-700">
                I can develop a responsive website using HTML, CSS, JavaScript, jQuery, Bootstrap, React, Node.js, PHP, MySQL, etc.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 2: Photoshop */}
        <div className="bg-gray-50 shadow-md  mr-36 p-6 rounded-lg w-full md:w-4/5 mx-auto">
          <div className="flex items-center space-x-2">
            <img
              src="/path/to/photoshop-image.jpg" // Replace with your actual image path
              alt="Photoshop"
              className="w-16 h-16 object-cover rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Photoshop</h3>
              <p className="mt-2 text-gray-700">
                I can edit photos using Adobe Photoshop. I can also design logos, banners, posters, etc. using Adobe Photoshop.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 3: Bug Fixing */}
        <div className="bg-gray-50 shadow-md ml-36 p-6 rounded-lg w-full md:w-4/5 mx-auto">
          <div className="flex items-center space-x-2">
            <img
              src="/path/to/bug-fixing-image.jpg" // Replace with your actual image path
              alt="Bug Fixing"
              className="w-16 h-16 object-cover rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Bug Fixing</h3>
              <p className="mt-2 text-gray-700">
                I can fix bugs in your website or software. I can also add new features to your website or software.
              </p>
            </div>
          </div>
        </div>

        {/* Service Card 4: Email Template */}
        <div className= "mr-36 bg-gray-50 shadow-md p-6 rounded-lg w-full md:w-4/5 mx-auto">
          <div className="flex items-center space-x-2">
            <img
              src="/path/to/email-template-image.jpg" // Replace with your actual image path
              alt="Email Template"
              className="w-16 h-16 object-cover rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Email Template</h3>
              <p className="mt-2 text-gray-700">
                I can design an email template for your business. I can also design a newsletter for your business or organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
