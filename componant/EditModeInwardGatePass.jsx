const EditModeInwardGatePass = ({ selectedData, setUpdateMd,  }) => {
    console.log("EditModeInwardGatePass: ", selectedData);
     return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center border-b pb-4">
                    <h1 className="text-xl font-bold text-center">Update Data</h1>
                    <button
                         onClick={() => setUpdateMd(false)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                             >
                        Close
                    </button>
                </div>

                <div className="mt-4">
                    <form className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Date */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Date</label>
                                <input
                                     value={selectedData.date}
                                    type="date"
                                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* Vehicle No */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Vehicle No</label>
                                <input
                                    type="text"
                                     value={selectedData.vehicle_no}
                                    placeholder="Vehicle No"
                                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* Delivered By */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Delivered By</label>
                                <input
                                    type="text"
                                    value={selectedData.deliverd_by}
                                    placeholder="Delivered By"
                                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* Suppliers Name */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Suppliers Name</label>
                                <input
                                    type="text"
                                    placeholder="Suppliers Name"
                                    value={selectedData.supplier_name}
                                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* Raw Material */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Raw Material</label>
                                <input
                                    type="checkbox"
                                    checked={selectedData.raw_material_purchase}
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* Transfer */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Transfer</label>
                                <input
                                    type="checkbox"
                                    checked={selectedData.transfer}
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* Sales Return */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Sales Return</label>
                                <input
                                    type="checkbox"
                                    checked={selectedData.sales_return}
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* Transfer No */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Transfer No</label>
                                <input
                                    type="text"
                                    value={selectedData.transfer_no}
                                    placeholder="Transfer No"
                                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* PO No */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">PO No</label>
                                <input
                                    type="text"
                                    value={selectedData.po_no}
                                    placeholder="PO No"
                                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* GRN No */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">GRN No</label>
                                <input
                                    type="text"
                                    value={selectedData.grn_no}
                                    placeholder="GRN No"
                                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* MR No */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">MR No</label>
                                <input
                                    type="text"
                                    value={selectedData.mr_no}
                                    placeholder="MR No"
                                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* DCBIL No */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">DCBIL No</label>
                                <input
                                    type="text"
                                    value={selectedData.dcbil_no}
                                    placeholder="DCBIL No"
                                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* Fixed Assets */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Fixed Assets</label>
                                <input
                                    type="checkbox"
                                    checked={selectedData.fixed_assets_purchase}
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* Consumable Purchase */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Consumable Purchase</label>
                                <input
                                    type="checkbox"
                                    checked={selectedData.consumable_purchase}
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* Returnable */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Returnable</label>
                                <input
                                    type="checkbox"
                                    checked={selectedData.returnable}
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>

                            {/* Inward Code */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-semibold mb-1">Inward Code</label>
                                <input
                                    value={selectedData.inward_gate_pass_code}
                                    type="text"
                                    placeholder="Inward Code"
                                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6 flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-2 rounded shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default EditModeInwardGatePass;