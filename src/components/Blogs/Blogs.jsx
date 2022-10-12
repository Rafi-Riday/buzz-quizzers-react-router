import React from 'react';

const Blogs = () => {
    return (
        <section className="w-full p-6 pb-0">
            <h1 className="my-5 text-xl md:text-3xl font-semibold text-center">Frequently Asked Questions</h1>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
                <div className="collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div
                        className="collapse-title text-dracula_color font-bold border-2 border-white rounded-lg rounded-b-none peer-checked:bg-[#506ec080]">
                        Question
                    </div>
                    <div
                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-white rounded-lg rounded-t-none">
                        Answer
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div
                        className="collapse-title text-dracula_color font-bold border-2 border-white rounded-lg rounded-b-none peer-checked:bg-[#506ec080]">
                        Question
                    </div>
                    <div
                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-white rounded-lg rounded-t-none">
                        Answer
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div
                        className="collapse-title text-dracula_color font-bold border-2 border-white rounded-lg rounded-b-none peer-checked:bg-[#506ec080]">
                        Question
                    </div>
                    <div
                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-white rounded-lg rounded-t-none">
                        Answer
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;