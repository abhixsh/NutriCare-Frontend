import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ id, title, description, prepTime, serves, imgSrc }) => {
    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="rounded-xl overflow-hidden shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-amber-50">
                <img src={imgSrc} alt="Meal image" className="object-cover w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-65" />
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                    <h4 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h4>
                    <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-sans antialiased font-normal leading-relaxed text-gray-700">
                        {description}
                    </p>

                    <div className="pt-2">
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-sans antialiased font-normal leading-relaxed text-inherit">
                            {prepTime} - easy prep - {serves} serves
                        </p>

                        <div className="mt-4">
                            <Link to={'/recipe/'+id}>
                                <button
                                    className="w-full sm:w-auto select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gray-900 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button"
                                >
                                    VIEW RECIPE
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;