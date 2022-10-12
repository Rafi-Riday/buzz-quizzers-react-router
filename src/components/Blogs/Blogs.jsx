import React from 'react';
import HeaderText from '../HeaderText/HeaderText';

const Blogs = () => {
    return (
        <section className="w-full p-6">
            <div className='mb-6 flex justify-center'>
                <HeaderText text={<span className='text-2xl'>Frequently Asked Questions</span>} />
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
                <div className="collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div
                        className="collapse-title text-dracula_color font-bold border-2 border-white rounded-lg rounded-b-none">
                        Purpose of <span className='text-blue-300'>React</span> <span className='text-orange-300'>Router</span>
                    </div>
                    <div
                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-white rounded-lg rounded-t-none">
                        <span className='text-blue-300'>React</span> <span className='text-orange-300'>Router</span> is a standard library for routing in <span className='text-blue-300'>React</span>. It enables the navigation among views of various components in a <span className='text-blue-300'>React</span> Application, allows changing the browser URL, and keeps the UI in sync with the URL. With many Hooks and Features, <span className='text-blue-300'>React</span> <span className='text-orange-300'>Router</span> has made creating single page application so easy.
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div
                        className="collapse-title text-dracula_color font-bold border-2 border-white rounded-lg rounded-b-none">
                        How does <span className='text-orange-300'>Context API</span> works
                    </div>
                    <div
                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-white rounded-lg rounded-t-none">
                        <span className='text-orange-300'>Context API</span> is a (kind of) new feature added in version 16.3 of <span className='text-blue-300'>React</span> that allows one to share state across the entire app (or part of it) lightly and with ease.
                        <br />
                        <br />
                        The <span className='text-blue-300'>React</span> <span className='text-orange-300'>Context API</span> is a way for a <span className='text-blue-300'>React</span> app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div
                        className="collapse-title text-dracula_color font-bold border-2 border-white rounded-lg rounded-b-none">
                        <span className='text-orange-300'>useRef Hook in <span className='text-blue-300'>React</span></span>
                    </div>
                    <div
                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-white rounded-lg rounded-t-none">
                        The <span className='text-orange-300'>useRef Hook</span> allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        <br />
                        <br />
                        <span className='text-orange-300'>useRef</span> returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;