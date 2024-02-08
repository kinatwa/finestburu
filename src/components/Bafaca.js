// React import
import React from 'react';

// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faLightbulb, faBookOpen } from '@fortawesome/free-solid-svg-icons';

// Your custom imports (These are placeholders based on your initial code snippet)
import Baca1 from '../components/Myimages/finest.png';
import Baca2 from '../components/Myimages/trade2.png';
import Image from 'next/image';
import Link from 'next/link';

function Bafaca() {
  return (
    <div className="md:mt-20">
      <div className="md:relative flex md:flex-row md:justify-evenly flex-col mt-20 md:-mt-20 md:mb-20 bg-white md:bg-transparent">
        {/* BANACA 1 */}
        <div className="md:bg-blue-900 bg-white -mt-64 md:mt-0 justify-center items-center rounded-full md:w-5/6 md:h-60 p-3 flex flex-row justify-evenly opacity-100 md:shadow-md border-gray-400">
          <div className='flex flex-col md:flex-row p-10 relative'>
            {/* Box 1 - Excellence */}
            <div className='h-28 w-48 rounded-md md:bg-white bg-blue-900 md:m-10 m-5 relative group'>
              <div className='absolute top-[-10px] left-[-10px] h-24 w-44 rounded-md md:bg-white bg-yellow-700 opacity-90 shadow-md flex items-center justify-center flex-col group-hover:bg-blue-100 transition duration-300 ease-in-out'>
                <FontAwesomeIcon icon={faAward} className="text-blue-900 text-3xl"/>
                <span className="text-sm mt-2 font-semibold">Excellence</span>
              </div>
            </div>
            
            {/* Box 2 - Innovation */}
            <div className='h-28 w-48 rounded-md md:bg-white bg-blue-900 md:m-10 m-5 relative group'>
              <div className='absolute top-[-10px] left-[-10px] h-24 w-44 rounded-md md:bg-white bg-yellow-700 opacity-90 shadow-md flex items-center justify-center flex-col group-hover:bg-blue-100 transition duration-300 ease-in-out'>
                <FontAwesomeIcon icon={faLightbulb} className="text-blue-900 text-3xl"/>
                <span className="text-sm mt-2 font-semibold">Innovation</span>
              </div>
            </div>
            
            {/* Box 3 - Education */}
            <div className='h-28 w-48 rounded-md md:bg-white bg-blue-900 md:m-10 m-5 relative group'>
              <div className='absolute top-[-10px] left-[-10px] h-24 w-44 rounded-md md:bg-white bg-yellow-700 opacity-90 shadow-md flex items-center justify-center flex-col group-hover:bg-blue-100 transition duration-300 ease-in-out'>
                <FontAwesomeIcon icon={faBookOpen} className="text-blue-900 text-3xl"/>
                <span className="text-sm mt-2 font-semibold">Education</span>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
}

export default Bafaca;
