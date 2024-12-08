import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Business from '../assets/Business.webm';
import Creative from '../assets/Creative.webm';
import Personal from '../assets/Personal.webm';
import StartUp from '../assets/StartUp.webm';
import Shopping from '../assets/shopping.png';
import TextONE from './TextONE';
const SlidertextONE = () => {
    return (
        // <!--   carosul slider   -->
        <div class="carousel w-full">
            {/* <!-- slider   1  --> */}
            <div id="slide1" class="carousel-item relative w-full">
                {/* <!-- carosul slider content --> */}
                <div class="md:flex justify-between items-center lg:px-24 md:px-20 px-12 py-20">

                    {/* <!-- tow divs one for content and one for img --> */}
                    <div class="md:flex-1 text-center md:text-left">
                        <h3 class="font-extrabold text-4xl md:text-4xl lg:text-5xl  mb-3">Raise funds
                            <TextONE></TextONE>
                        </h3>
                        {/*                             */}
                    </div>

                    <div class="md:flex-1 mt-8">
                        <img
                            src={Shopping}
                            class="w-full" />
                    </div>
                </div>

                {/* <!-- slider button --> */}
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-0 mx-0">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>

            {/* <!-- slider   2 --> */}
            <div id="slide2" class="carousel-item relative w-full">
                {/* <!-- carosul slider content --> */}
                <div class="md:flex justify-between items-center lg:px-24 md:px-20 px-12 py-20">

                    {/* <!-- tow divs one for content and one for img --> */}
                    <div class="md:flex-1 mt-8">
                        <img
                            src={Shopping}
                            class="w-full" />
                    </div>
                    <div class="md:flex-1 text-right md:text-left">
                        <h3 class="font-extrabold text-4xl md:text-4xl lg:text-5xl  mb-3">Raise funds <TextONE></TextONE></h3>

                    </div>


                </div>

                {/* <!-- slider button --> */}
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-0 mx-0">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>

            {/* <!-- slider   3 --> */}
            <div id="slide3" class="carousel-item relative w-full">
                {/* <!-- carosul slider content --> */}
                <div class="md:flex justify-between items-center lg:px-24 md:px-20 px-12 py-20">

                    {/* <!-- tow divs one for content and one for img --> */}
                    <div class="md:flex-1 text-center md:text-left">
                        <h3 class="font-extrabold text-4xl md:text-4xl lg:text-5xl  mb-3">Raise funds for your creative ideas</h3>

                    </div>

                    <div class="md:flex-1 mt-8">
                        <img
                            src={Shopping}
                            class="w-full" />
                    </div>
                </div>

                {/* <!-- slider button --> */}
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-0 mx-0">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>

            {/* <!--  slider 4 --> */}
            <div id="slide4" class="carousel-item relative w-full">
                {/* <!-- carosul slider content --> */}
                <div class="md:flex justify-between items-center lg:px-24 md:px-20 px-12 py-20">

                    {/* <!-- tow divs one for content and one for img --> */}
                    <div class="md:flex-1 mt-8">
                        <img
                            src={Shopping}
                            class="w-full" />
                    </div>
                    <div class="md:flex-1 text-center md:text-left">
                        <h3 class="font-extrabold text-4xl md:text-4xl lg:text-5xl  mb-3">Raise funds <TextONE></TextONE></h3>

                    </div>


                </div>

                {/* <!-- slider button --> */}
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between px-0 mx-0">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default SlidertextONE;
