import React, { useContext } from 'react';
import { Dialog } from '@reach/dialog';

import SiteContext from '../context/site-context';

export default function SignUp() {
  const { isSignUpOpen, setSignUpOpen } = useContext(SiteContext);
  return (
    <Dialog
      isOpen={isSignUpOpen}
      onDismiss={() => setSignUpOpen(false)}
      aria-label="I have no idea"
    >
      <div
        className={`fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center ${
          isSignUpOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`fixed inset-0 transition-opacity ${
            isSignUpOpen
              ? 'opacity-100 ease-out duration-300 pointer-events-auto'
              : 'opacity-0 ease-in duration-200 pointer-events-none'
          }`}
        >
          <button
            onClick={() => setSignUpOpen(false)}
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-gray-500 opacity-75"
          />
        </div>

        <div
          className={`px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full sm:p-6 ${
            isSignUpOpen
              ? 'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100 pointer-events-auto'
              : 'ease-in duration-200 opacity-0 translate-y-4 sm:scale-95 pointer-events-none'
          }`}
        >
          <div className="sm:flex sm:items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-brand-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-brand-600"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Purchase skydiving package
              </h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  Please enter your credit card details below to pay for your
                  skydiving experience. Your electronic ticket will be emailed
                  to you as soon as we receive payment.
                </p>
              </div>
            </div>
          </div>
          <fieldset className="mt-6">
            <legend className="text-base font-medium leading-6 text-gray-900">
              Select package
            </legend>
            <p className="text-sm leading-5 text-gray-500">
              Please select the package you would like to book.
            </p>
            <div className="mt-4">
              <label
                htmlFor="single_tandem_package"
                className="flex items-center mt-4 first:mt-0"
              >
                <input
                  id="single_tandem_package"
                  name="package"
                  type="checkbox"
                  className="w-4 h-4 transition duration-150 ease-in-out text-brand-600 form-checkbox"
                />
                <span className="block ml-3 text-sm font-medium leading-5 text-gray-700">
                  Single Tandem price $350
                </span>
              </label>
              <label
                htmlFor="double_tandem_package"
                className="flex items-center mt-4 first:mt-0"
              >
                <input
                  id="double_tandem_package"
                  name="package"
                  type="checkbox"
                  className="w-4 h-4 transition duration-150 ease-in-out text-brand-600 form-checkbox"
                />
                <span className="block ml-3 text-sm font-medium leading-5 text-gray-700">
                  Double Tandem Price (groups of two) $299 per person
                </span>
              </label>
              <label
                htmlFor="photo_video_package"
                className="flex items-center mt-4 first:mt-0"
              >
                <input
                  id="photo_video_package"
                  name="package"
                  type="checkbox"
                  className="w-4 h-4 transition duration-150 ease-in-out text-brand-600 form-checkbox"
                />
                <span className="block ml-3 text-sm font-medium leading-5 text-gray-700">
                  Photo &amp; Video package $95
                </span>
              </label>
            </div>
          </fieldset>
          <fieldset className="mt-6">
            <legend className="block text-sm font-medium leading-5 text-gray-700">
              Card Details
            </legend>
            <div className="mt-1 bg-white rounded-md shadow-sm">
              <div>
                <input
                  aria-label="Card number"
                  className="relative block w-full transition duration-150 ease-in-out bg-transparent rounded-none form-input rounded-t-md focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Card number"
                />
              </div>
              <div className="flex -mt-px">
                <div className="flex-1 w-1/2 min-w-0">
                  <input
                    aria-label="Card expiration date"
                    className="relative block w-full transition duration-150 ease-in-out bg-transparent rounded-none form-input rounded-bl-md focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="MM / YY"
                  />
                </div>
                <div className="flex-1 min-w-0 -ml-px">
                  <input
                    aria-label="Card CVC"
                    className="relative block w-full transition duration-150 ease-in-out bg-transparent rounded-none form-input rounded-br-md focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="CVC"
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                onClick={() => setSignUpOpen(false)}
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-500 focus:outline-none focus:border-brand-700 focus:shadow-outline sm:text-sm sm:leading-5"
              >
                Book now
              </button>
            </span>
            <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                onClick={() => setSignUpOpen(false)}
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5"
              >
                Cancel
              </button>
            </span>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
