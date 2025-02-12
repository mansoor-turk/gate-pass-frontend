// import React, { useState } from 'react';

const UpdateModal = ({ showModal, setShowModal, data, onUpdate }) => {
    // const [formData, setFormData] = useState(data);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onUpdate(formData);
    //     setShowModal(false);
    // };

    return (

      <>    </>

        // showModal && (
        //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        //         <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 max-h-[90vh] overflow-y-auto">
        //             <div className="flex justify-between items-center border-b pb-4">
        //                 <h1 className="text-xl font-bold">Update Item Details</h1>
        //                 <button
        //                     onClick={() => setShowModal(false)}
        //                     className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
        //                 >
        //                     Close
        //                 </button>
        //             </div>

        //             <form onSubmit={handleSubmit} className="mt-4">
        //                 <div className="grid grid-cols-2 gap-4">
        //                     <div>
        //                         <label className="block text-sm font-medium text-gray-700">Sno</label>
        //                         <input
        //                             type="text"
        //                             name="Sno"
        //                             value={"formData.Sno"}
        //                             onChange={handleChange}
        //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        //                         />
        //                     </div>
        //                     <div>
        //                         <label className="block text-sm font-medium text-gray-700">Date</label>
        //                         <input
        //                             type="date"
        //                             name="Date"
        //                             value={"formData.Date"}
        //                             onChange={handleChange}
        //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        //                         />
        //                     </div>
        //                     <div>
        //                         <label className="block text-sm font-medium text-gray-700">Vehicle No</label>
        //                         <input
        //                             type="text"
        //                             name="Vehicle No"
        //                             value={"formData.VehicleNo"}
        //                             onChange={handleChange}
        //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        //                         />
        //                     </div>
        //                     <div>
        //                         <label className="block text-sm font-medium text-gray-700">Delivered By</label>
        //                         <input
        //                             type="text"
        //                             name="Delivered By"
        //                             value={"formData.DeliveredBy"}
        //                             onChange={handleChange}
        //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        //                         />
        //                     </div>
        //                     <div>
        //                         <label className="block text-sm font-medium text-gray-700">Suppliers Name</label>
        //                         <input
        //                             type="text"
        //                             name="Suppliers Name"
        //                             value={"formData.SuppliersName"}
        //                             onChange={handleChange}
        //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        //                         />
        //                     </div>
        //                     <div>
        //                         <label className="block text-sm font-medium text-gray-700">Raw Material</label>
        //                         <input
        //                             type="text"
        //                             name="Raw Material"
        //                             value={"formData.RawMaterial"}
        //                             onChange={handleChange}
        //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        //                         />
        //                     </div>
        //                     {/* Add more fields as needed */}
        //                 </div>
        //                 <div className="mt-6">
        //                     <button
        //                         type="submit"
        //                         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        //                     >
        //                         Update
        //                     </button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // )
    );
};

export default UpdateModal;