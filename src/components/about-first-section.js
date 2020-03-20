import React from 'react';
import { useGraphQL } from '../hooks';

export default function AboutFirstSection() {
  const { aboutJson } = useGraphQL();
  return (
    <div className="bg-gray-50">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-screen-xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none">
            <h2 className="text-lg font-semibold leading-6 tracking-wider uppercase text-brand-600">
              About
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
              Meet the Quickii team
            </p>
            <p className="mt-2 text-xl leading-7 text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              sequi unde repudiandae natus.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-12 mt-8 lg:bg-gray-900 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-50 h-3/4" />
          <div className="relative z-10 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5">
              {aboutJson.team.map(teamMember => (
                <div className="mt-4 overflow-hidden rounded-lg shadow-lg">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div className="flex items-center">
                      <div className="inline-flex flex-shrink-0 border-2 border-white rounded-full">
                        <img
                          className="w-32 h-32 border-4 rounded-full border-brand-600"
                          src={teamMember.image}
                          alt={teamMember.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-2xl font-medium leading-7 text-gray-900">
                          {teamMember.name}
                        </div>
                        <div className="text-base font-medium font-semibold leading-7 uppercase text-brand-600">
                          {teamMember.position}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-8 bg-gray-100 sm:p-10 sm:pb-6">
                    <p className="mt-5 text-lg leading-7 text-gray-600 first:mt-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
