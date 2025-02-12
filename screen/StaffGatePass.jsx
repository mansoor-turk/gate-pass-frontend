import axios from "axios";
import { useState } from "react";
import Layout from "../componant/Layout";



const StaffGatePass = () => {
    const [state, setState] = useState({

        date: "",
        dept: "",
        name: "",
        code: "",
        official: false,
        personal: false,
        time_Out: "",
        expected_time_in: "",
        purposeofvisit: "",
        location: "",
        staff: "",
        hod: "",
        received_by: "",

    });


    function buttonClick() {

        if (!state.date || !state.dept || !state.name || !state.code ||
            !state.time_Out || !state.expected_time_in || !state.purposeofvisit ||
            !state.location || !state.staff || !state.hod || !state.received_by) {
            alert("All fields are required!");
            return;
        }
        const payload = {



            // date	,
            // department,
            // name,
            // code,
            // is_official,
            // is_personal,
            // time_out,
            // expected_time_in,
            // purpose_ofoffichial_visit,
            // location_of_visit,
            // staff,
            // hod,
            // recived_by



            date: state.date,
            department: state.dept,
            name: state.name,
            code: state.code,
            is_official: state.official ? 1: 0,
            is_personal: state.official? 0: 1,
            time_out: state.time_Out,
            expected_time_in: state.expected_time_in,
            purpose_ofoffichial_visit: state.purposeofvisit,
            location_of_visit: state.location,
            staff: state.staff,
            hod: state.hod,
            recived_by: state.received_by,

        }

        axios.post("http://localhost:5500/add-data-staff", payload).then((response) => {
            console.log(response.data);


            setState({
                date: "",
                dept: "",
                name: "",
                code: "",
                official: false,
                personal: false,
                time_Out: "",
                expected_time_in: "",
                purposeofvisit: "",
                location: "",
                staff: "",
                hod: "",
                received_by: "",
            })
            alert(" Data Added Successfully ");


        })

            .catch((error) => {
                console.log(error);
            });


    }





    console.log(state);

    console.log("State", state);


    return (

        <div className="staff , w-screen" >

            <Layout>

                <div className="flex justify-center items-center  bg-gray-50">
                    <div className="bg-gray-100 border border-black w-[700px] p-6 rounded-lg shadow-lg">
                        <h1 className="text-center font-bold text-3xl mb-6">STAFF GATE PASS</h1>
                        <div className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* DATE */}
                                <div className="flex flex-col">
                                    <label htmlFor="date" className="font-bold">DATE :</label>
                                    <input id="date	" type="date"
                                        value={state.date}
                                        onChange={(e) => setState({ ...state, date: e.target.value })}


                                        className="border-b border-gray-400 focus:border-blue-500 outline-none p-2" />
                                </div>

                                {/* DEPT */}
                                <div className="flex flex-col">
                                    <label htmlFor="dept" className="font-bold">DEPT:</label>
                                    <input id="dept" type="text"
                                        value={state.dept}
                                        onChange={(e) => setState({ ...state, dept: e.target.value })}

                                        className="border-b border-gray-400 focus:border-blue-500 outline-none p-2" />
                                </div>
                                {/* NAME */}
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="font-bold">NAME :</label>
                                    <input id="name" type="text"
                                        onChange={(e) => setState({ ...state, name: e.target.value })}
                                        value={state.name}
                                        className="border-b border-gray-400 focus:border-blue-500 outline-none p-2" />
                                </div>
                                {/* CODE */}
                                <div className="flex flex-col">
                                    <label htmlFor="code" className="font-bold">CODE :</label>
                                    <input id="code" type="text"
                                        value={state.code}
                                        onChange={(w) => setState({ ...state, code: w.target.value })}

                                        className="border-b border-gray-400 focus:border-blue-500 outline-none p-2" />
                                </div>
                            </div>

                            {/* start */}
                            <div>
                                {/* radio box handling  */}
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2">
                                        <input name="yes" id="yes" type="radio"
                                            //  value={state.official}
                                            checked={state.official}
                                            onChange={(e) => setState({ ...state, official: true })}

                                            className="w-4 h-4" />
                                        <label htmlFor="official" className="text-gray-700">Official</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input name="yes" id="yes"
                                            // value={state.personal}
                                            checked={state.official == false}
                                            onChange={(e) => setState({ ...state, official: false })}
                                            type="radio" className="w-4 h-4" />
                                        <label htmlFor="official" className="text-gray-700">Personal</label>
                                    </div>
                                </div>

                            </div>

                            {/* end  */}



                            {/* Time Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="time-out" className="font-bold">Time Out:</label>
                                    <input id="time-out"
                                        value={state.time_Out}
                                        type="time"
                                        onChange={(e) => setState({ ...state, time_Out: e.target.value })}
                                        className="border-b border-gray-400 focus:border-blue-500 outline-none p-2" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="expected-time-in" className="font-bold">Expected Time In:</label>
                                    <input id="expected-time-in" type="time"
                                        value={state.expected_time_in}
                                        onChange={(e) => setState({ ...state, expected_time_in: e.target.value })}
                                        className="border-b border-gray-400 focus:border-blue-500 outline-none p-2" />
                                </div>
                            </div>
                            {/* Purpose & Location */}
                            <div className="flex flex-col">
                                <label htmlFor="purpose" className="font-bold">Purpose of Official Visit:</label>
                                <textarea id="purpose"
                                    value={state.purposeofvisit}
                                    onChange={(e) => setState({ ...state, purposeofvisit: e.target.value })}

                                    className="border-b border-gray-400 focus:border-blue-500 outline-none p-2"></textarea>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="location" className="font-bold">Location of Visit:</label>
                                <input id="location"
                                    value={state.location}
                                    onChange={(e) => setState({ ...state, location: e.target.value })}
                                    type="text" className="border-b border-gray-400 focus:border-blue-500 outline-none p-2" />
                            </div>
                            {/* Signatures */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="staff" className="font-bold">Staff:</label>
                                    <input id="staff" type="text"
                                        onChange={(e) => setState({ ...state, staff: e.target.value })}
                                        value={state.staff}
                                        className="border-b border-gray-400 focus:border-blue-500 outline-none p-2" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="hod" className="font-bold">HOD:</label>
                                    <input id="hod" type="text"
                                        value={state.hod}
                                        onChange={(e) => setState({ ...state, hod: e.target.value })}
                                        className="border-b border-gray-400 focus:border-blue-500 outline-none p-2" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="received-by" className="font-bold">Received By:</label>
                                    <input id="received-by" type="text"
                                        onChange={(e) => setState({ ...state, received_by: e.target.value })}
                                        value={state.received_by}
                                        className="border-b border-gray-400 focus:border-blue-500 outline-none p-2" />
                                </div>





                            </div>
                        </div>




                        <div className="flex justify-center mt-4" >  <button
                            onClick={buttonClick}
                            style={{
                                backgroundColor: "white",

                                borderRadius: '3px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                hover: {
                                    backgroundColor: "#007bff",
                                    color: "white",
                                },
                                color: "black",
                                padding: "10px 20px",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            ADD DATA
                        </button>
                        </div>




                    </div>
                </div>


            </Layout>

        </div>

    );

}

export default StaffGatePass