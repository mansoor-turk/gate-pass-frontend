import axios from 'axios';
import { Result } from 'postcss';
import React, { useEffect } from 'react';
import { useState } from "react";
import Layout from '../componant/Layout';

const List_staff_data = () => {

    const [staffdata, setStaffdata] = useState([0])


    // ya mistake ha or is sa learn kr na hai

    // useEffect(() => {

    //     axios.get('http://localhost:5500/get-data-staff')
    //         .then((response) => {

    //             setStaffdata(response.data)
    //             console.log("staff data ", staffdata); // prints the data received from the API
    //             // Now you can use the data in your component
    //         }).catch((error) => {
    //             console.error(error);
    //         });

    // }
    // ), []


    useEffect(() => {
        axios.get('http://localhost:5500/get-data-staff')
            .then((response) => {
                setStaffdata(response.data.data)
            })

        // staffdata.map((value) => {
        //     console.log("value is ", value)
        // })



    }, [])

    console.log("value is ", staffdata)


    return (
        <div className='APP , w-screen'  >

            <Layout >
                <div className="bg-gray-50 min-h-screen p-8">




                    <div className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <h1 className="text-3xl font-bold text-center text-gray-800 py-6 bg-gradient-to-r
                         bg-yellow-300 bg-yellow-100 text-white">
                            Staff Gatepass Data
                        </h1>
                        <div className="overflow-scroll  h-[40rem] ">

                            <table className=" min-w-full bg-white">
                                <thead className="bg-gray-100">
                                    <tr>

                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            S.no
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Date
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Department
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Name
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Code
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Official
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Personal
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Time Out
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Expected Time In
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Purpose
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Location
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Staff
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            HOD
                                        </th>
                                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                            Received By
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    {staffdata?.map((beta, index) => <tr className="hover:bg-gray-50 transition duration-150 ease-in-out">
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{index + 1}</td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{beta?.date}</td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{beta?.department}</td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{beta?.name}</td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{beta?.code}</td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200"> {beta?.is_official} </td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200"> {beta?.is_personal}  </td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{beta?.time_out}</td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{beta?.expected_time_in}</td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{beta?.purpose_ofoffichial_visit}</td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{beta?.location_of_visit}</td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{beta?.staff}</td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{beta?.hod}</td>
                                        <td className="py-4 px-6 text-sm text-gray-900 border-b border-gray-200">{beta?.recived_by}</td>
                                    </tr>)}

                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>


            </Layout >

        </div>

    );
};

export default List_staff_data;