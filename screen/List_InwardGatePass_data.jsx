import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../componant/Layout";
import UpdateModal from "../componant/UpdateModal";
import EditModeInwardGatePass from "../componant/EditModeInwardGatePass";



const List_inwardgatepass_data = () => {
  const [showData, setShowData] = useState(false);
  const [detailData, setDetailData] = useState([]);
  const [inwardata, setInwarddata] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [updatemd, setUpdateMd] = useState(false);



  useEffect(() => {
    axios
      .get("http://localhost:5500/get-inward-gatepass")
      .then((response) => {
        setInwarddata(response.data.data);
      });
  }, []);

  const showDetail = (mt) => {
    axios
      .get(`http://localhost:5500/get-table-row/${mt?.inward_gate_pass_code}`)
      .then((response) => {
        setDetailData(response.data.data);
        setShowData(true);
      })
      .catch((err) => {
        console.log("error is :", err);
      });
  };
  const editMode = (mt) => {
    setUpdateMd(true);
    setSelectedData(mt);

    console.log("edit mode", mt);
  }

  return (
    <div className="App w-screen backdrop-blur-sm">
      <Layout>
        <div
          className="bg-gray-50 min-h-screen p-8 backdrop-blur-sm"
          onClick={() => setShowData(false)}
        >
          <div className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden backdrop-blur-sm">
            {/* Heading */}
            <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-600 p-6">
              <h1 className="text-3xl font-bold text-white">
                Inward Gatepass Data
              </h1>
            </div>

            {/* Modal for Item Details */}
            {showData && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 max-h-[400px] overflow-y-auto">
                  <div className="flex justify-between items-center border-b pb-4">
                    <h1 className="text-xl font-bold">Item Details</h1>
                    <button
                      onClick={() => setShowData(false)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                    >
                      Close
                    </button>
                  </div>

                  <div className="mt-4">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                            Item Code
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                            Authorized By
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                            Description
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                            Prepared By
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                            Quantity
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                            Received By
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {detailData?.map((data, index) => (
                          <tr key={index} className="hover:bg-gray-50 transition duration-150">
                            <td className="px-6 py-4 text-sm text-gray-900">{data?.item_code}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{data?.authorized_by}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{data?.description}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{data?.prepared_by}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{data?.quantity}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{data?.received_by}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Modal for Update */}


            {updatemd && (
              <EditModeInwardGatePass
                selectedData={selectedData}
                setUpdateMd={setUpdateMd}
                
              />
            )}




            {/* Table */}
            <div className="overflow-x-auto h-[40rem]">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Sno
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Date
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Vehicle No
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Delivered By
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Suppliers Name
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Raw Material
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Transfer
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Sales Return
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Transfer No
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      PO No
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      GRN No
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      MR No
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      DCBIL No
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Fixed Assets
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Consumable Purchase
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Status
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Returnable
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Inward Code
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Created At
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Created By
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Updated By
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Updated At
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {inwardata?.map((mt, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition duration-150 ease-in-out cursor-pointer"
                      onClick={() => showDetail(mt)}>
                      <td className="py-4 px-6 text-sm text-gray-900">{index + 1}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.date}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.vehicle_no}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.delivered_by}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.supplier_name}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.raw_material_purchase}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.transfer}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.sales_return}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.transfer_no}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.po_no}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.grn_no}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.mr_no}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.dcbil_no}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.fixed_assets_purchase}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.consumable_purchase}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.status}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.returnable}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.inward_gate_pass_code}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.created_at}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.created_by}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.updated_by}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">{mt?.updated_at}</td>
                      <td className="py-4 px-6 text-sm text-gray-900 flex gap-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300" onClick={() => { editMode(mt) }}>
                          Edit
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300" onClick={() => { setUpdateMd(true); }}    >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default List_inwardgatepass_data;