import React from 'react'

const RegForm = ({ service }) => {
    return (

        <>
            <div class="flex justify-center items-center w-screen h-full bg-yellow-300">

                <div class="container mx-auto my-4 px-4 lg:px-20">
                    <form action="">
                        <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div class="flex flex-col">
                                <h1 class="font-bold uppercase text-3xl">Register</h1>
                                <h1 class="  text-lg">Seleted Service : <span className='font-semibold'>{service}</span></h1>
                            </div>
                            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="First Name*"  required/>
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Last Name*"  required/>
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Business Name*"  required/>
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Business Type*" />
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="email" placeholder="Email*" required/>
                                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="mobile" placeholder="Phone*"  required/>
                            </div>
                            <div class="my-4">
                                <textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
                            </div>
                            <div class="my-2 w-1/2 lg:w-1/4">
                                <button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                        focus:outline-none focus:shadow-outline" type='submit' onSubmit={(e)=>{e.preventDefault()}}>
                                    Send Message
                                </button>
                            </div>
                        </div></form>

                    <div
                        class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
                        <div class="flex flex-col text-white">
                            <h1 class="font-bold uppercase text-3xl my-4">Drop in our office</h1>
                            <p class="text-gray-400">If you have any query before registration , contact us
                            </p>

                            <div class="flex my-4 w-2/3 lg:w-1/2">
                                <div class="flex flex-col">
                                    <i class="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div class="flex flex-col">
                                    <h2 class="text-2xl">Call Us</h2>
                                    <p class="text-gray-400">Tel: +919505772881</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default RegForm