import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { useGraphQL } from '../../hooks';
import Input from './input';
import TextArea from './textarea';
import Map from '../map';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const ContactForm = () => {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  const { contact } = siteMetadata;
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email_address: '',
    phone_number: '',
    message: '',
  });

  const handleChange = e =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <form
      action="/success/"
      data-netlify="true"
      method="POST"
      name="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="bg-gray-100">
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="flex flex-col md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {contact.heading}
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  {contact.copy}
                </p>
                <div className="mt-auto">
                  <div className="flex">
                    {siteMetadata.facebook && (
                      <a
                        href={siteMetadata.facebook}
                        className="mt-12 ml-2 text-gray-400 first:ml-0 hover:text-gray-500"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                    {siteMetadata.instagram && (
                      <a
                        href={siteMetadata.instagram}
                        className="mt-12 ml-2 text-gray-400 first:ml-0 hover:text-gray-500"
                      >
                        <span className="sr-only">Instagram</span>
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="mt-3">
                    <dl>
                      <dt className="inline font-semibold">Phone: </dt>
                      <dd className="inline text-gray-500">
                        <a href={`tel:${siteMetadata.phone}`}>
                          {siteMetadata.phone}
                        </a>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="inline font-semibold">Address: </dt>
                      <dd className="inline text-gray-500">
                        {siteMetadata.address.line1}
                        <br />
                        {siteMetadata.address.line2}
                      </dd>
                    </dl>
                    <dl>
                      <dt className="inline font-semibold">Hours: </dt>
                      <dd className="inline text-gray-500">
                        {siteMetadata.hours}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-4 md:col-span-3">
                    <Input
                      label="First name"
                      name="first_name"
                      value={state.first_name}
                      required
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4 md:col-span-3">
                    <Input
                      label="Last name"
                      name="last_name"
                      value={state.last_name}
                      required
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4 md:col-span-3">
                    <Input
                      label="Phone number"
                      name="phone_number"
                      value={state.phone_number}
                      required
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4 md:col-span-3">
                    <Input
                      label="Email address"
                      name="email_address"
                      value={state.email_address}
                      required
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4 md:col-span-6">
                    <TextArea
                      label="Message"
                      name="message"
                      value={state.message}
                      required
                      handleChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
