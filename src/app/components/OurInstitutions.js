import React from 'react';
import Link from 'next/link';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { MdPersonSearch } from 'react-icons/md';

export default function OurInstitutions() {
  return (
    <div className="w-full bg-[#fff9f2] py-10 mt-2">
      <div className="max-w-7xl drop-shadow-lg shadow-lg bg-white w-full mx-auto flex flex-col lg:flex-row gap-4 p-4">
        {/* OUR Institutions */}
        <div className="lg:w-1/2 w-full flex flex-col items-center">
          {/* Heading */}
          <div className="p-3 flex text-2xl md:text-3xl lg:text-4xl gap-2 md:gap-4 text-center justify-center border-b-2 border-blue-600 w-full text-[#354b87]">
            <HiOutlineBuildingLibrary /> Our Institutions
          </div>

          {/* Institutions Name */}
          <div className="w-full md:w-4/5 flex flex-col gap-2 pt-3">
            <div className="pb-2">
              <Link href="/ssitm" className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl hover:text-blue-600">
                Shivdan Singh Institute of Technology and Management
              </Link>
              <p>College Code: 007</p>
              <p>Approved by AICTE and affiliated to AKTU, Lucknow.</p>
            </div>
            <div className="w-full border border-blue-600" />

            <div className="pb-2">
              <p className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl">
                Saroj Institute of Technology and Management
              </p>
              <p>College Code: 123</p>
              <p>Approved by AICTE and affiliated to AKTU, Lucknow.</p>
            </div>
            <div className="w-full border border-blue-600" />

            <div className="pb-2">
              <p className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl">
                Saroj College of Law
              </p>
              {/* <p>College Code:</p> */}
              <p>Approved by Bar Council of India (BCI) and affiliated to AKTU, Lucknow.</p>
            </div>
            <div className="w-full border border-blue-600" />

            <div className="pb-2">
              <p className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl">
                Saroj College of Pharmacy
              </p>
              <p>College Code: 2031</p>
              <p>Approved by Pharmacy Council of India and affiliated to AKTU, Lucknow.</p>
            </div>
            <div className="w-full border border-blue-600" />

            <div className="pb-2">
              <p className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl">
                Saroj College of Engineering and Polytechnic
              </p>
              {/* <p>College Code:</p> */}
              <p>Approved by AICTE and affiliated to AKTU, Lucknow.</p>
            </div>
{/* 
             <div className="w-full border border-blue-600" />

            <div className="pb-2">
              <p className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl">
                Lucknow Institute of Pharmacy
              </p>
              <p>College Code:</p>
              <p>Approved by AICTE, PCI, UPBTE and affiliated to AKTU, Lucknow.</p>
            </div> */}
          </div>
        </div>

        {/* Placement Update */}
        <div className="lg:w-1/2 w-full flex flex-col items-center">
          <div className="p-3 flex text-2xl md:text-3xl lg:text-4xl gap-2 md:gap-4 text-center justify-center border-b-2 border-blue-600 w-full text-[#354b87]">
            <MdPersonSearch /> Placement Update
          </div>

          {/* Placement Company */}
          <div className="w-full md:w-4/5 flex flex-col gap-2 pt-3">
            <p>
              This is to inform you that{' '}
              <strong className="text-[#354b87] font-bold text-lg md:text-xl">
                TNV System Certification Pvt. Ltd.
              </strong>{' '}
              is visiting the SEG campus for{' '}
              <strong className="text-[#354b87] font-bold text-lg md:text-xl">
                BTech and MBA
              </strong>{' '}
              students.
            </p>
            <div className="w-full border border-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
