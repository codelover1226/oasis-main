'use client'

import React from "react"

interface TableRow {
  residences: string;
  beds: string;
  ext: string;
  int: string;
  price: string;
  est: string;
  est_charge: string;
  image: string;
}

export default function available() {
  const TABLE_HEAD: String[] = ["Residence","BEDS/BATHS","SF INTERIOR","SF EXTERIOR","PRICE","ESTIMATED MONTHLY COMMON CHARGES","ESTIMATED MONTHLY REAL ESTATE TAXES", "FLOOR PLAN"];
  const TABLE_ROWS: TableRow[]  = [
    {
      residences: "3A",
      beds: '2/2',
      ext: "508",
      int: '138',
      price: "$750,000",
      est: "$562",
      est_charge: "#355",
      image: './img/plan/1.jpg'
    },
    {
      residences: "3A",
      beds: '2/2',
      ext: "508",
      int: '138',
      price: "$750,000",
      est: "$562",
      est_charge: "#355",
      image: './img/plan/1.jpg'
    },
    {
      residences: "3A",
      beds: '2/2',
      ext: "508",
      int: '138',
      price: "$750,000",
      est: "$562",
      est_charge: "#355",
      image: './img/plan/1.jpg'
    },
    {
      residences: "3A",
      beds: '2/2',
      ext: "508",
      int: '138',
      price: "$750,000",
      est: "$562",
      est_charge: "#355",
      image: './img/plan/1.jpg'
    },
    {
      residences: "3A",
      beds: '2/2',
      ext: "508",
      int: '138',
      price: "$750,000",
      est: "$562",
      est_charge: "#355",
      image: './img/plan/1.jpg'
    },
    {
      residences: "3A",
      beds: '2/2',
      ext: "508",
      int: '138',
      price: "$750,000",
      est: "$562",
      est_charge: "#355",
      image: './img/plan/1.jpg'
    },
    {
      residences: "3A",
      beds: '2/2',
      ext: "508",
      int: '138',
      price: "$750,000",
      est: "$562",
      est_charge: "#355",
      image: './img/plan/1.jpg'
    },
    {
      residences: "3A",
      beds: '2/2',
      ext: "508",
      int: '138',
      price: "$750,000",
      est: "$562",
      est_charge: "#355",
      image: './img/plan/1.jpg'
    },
  ];
  return(
    <>
    <div className="bg-main-bg w-full">
      <div className="bg-main-bg w-full">
        <div className="w-full h-[600px] bg-black opacity-70" style={{ backgroundImage: "url('/img/oasis_exterior1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="bg-black opacity-40 absolute top-0 left-0 right-0 h-[600px]">

        </div>
        <div className="relative h-[80px] w-full text-center items-center mb-0">
          <p className="relative text-white z-20 top-6 font-spartan sans-serif tracking-[2px]">Noble LIC 1st Place Winner <span><a className="underline cursor-pointer">2024 AIA Design Awards</a></span> </p>
          <div className="absolute top-0 right-0 bottom-0 left-0 opacity-80 bg-black"></div>      
        </div>
      </div>
      <div className="absolute top-[350px] left-0 right-0">
        <p className="font-ivy-mode text-5xl text-white text-center font-bold mx-6 sm:mx-auto">
          Available
        </p>
      </div>
      <div className="w-full max-w-[1440px] mx-auto hidden lg:block">
        <table className="w-full min-w-max table-auto text-left text-3xl ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
               <th key={head.toString()} className="border-b border-blue-gray-100 p-2 lg:w-[120px] xl:w-[160px]">
                <p
                color="blue-gray"
                className="font-bold uppercase text-red leading-none text-[16px] text-center"
                >
                {head}
                </p>
              </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ residences,beds, ext, int, price, est, est_charge, image }, index) => (
              <tr key={index} className="h-[80px]">
              <td className="px-4 text-center">
                <p className="blue-gray text-[14px] font-spartan">
                {residences}
                </p>
              </td>
              <td className="px-4 text-center">
                <p className="blue-gray text-[14px] font-spartan">
                {beds}
                </p>
              </td>
              <td className="px-4 text-center">
                <p className="blue-gray text-[14px] font-spartan">
                {int}
                </p>
              </td>
              <td className="px-4 text-center">
                <p className="blue-gray text-[14px] font-spartan">
                {ext}
                </p>
              </td>
              <td className="px-4 text-center">
                <p className="blue-gray text-[14px] font-spartan">
                {price}
                </p>
              </td>
              <td className="px-4 text-center">
                <p className="blue-gray text-[14px] font-spartan">
                {est}
                </p>
              </td>
              <td className="px-4 text-center">
                <p className="blue-gray text-[14px] font-spartan">
                {est_charge}
                </p>
              </td>
              <td className="px-4 text-center">
                <a className="relative font-semibold cursor-pointer uppercase font-spartan text-[12px]" href={image} target="blank"  >
                  View
                </a>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    </>
  )
}