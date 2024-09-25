import React from 'react'

function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            className='rounded-md'
                            src="src\assets\public\images\about.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Learn Editing with Karan Pujari!
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Editing involves making changes to a document, text, or other content to improve clarity, accuracy, or overall quality. This can include correcting grammar and spelling errors, rephrasing sentences for better readability, adjusting formatting, and ensuring the content meets specific requirements or standards. The goal of editing is to refine and enhance the content so it effectively communicates the intended message to the audience.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Editing is crucial in various fields, from writing and publishing to software development and web design, as it ensures the final product is clear, accurate, and professional.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About