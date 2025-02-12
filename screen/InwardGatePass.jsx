 import axios from "axios";

import React, { useState } from "react";
import { generateUniqueId } from "../Utils/function";
import Layout from '../componant/Layout'




const InwardGatePass = () => {

  const [sno_array, setSno_array] = useState([]);
  const [item_code, setItem_array] = useState([]);
  const [description_array, setDescription_array] = useState([]);
  const [quantity_array, setQuantity_array] = useState([]);


  const [tableIndex, setTableIndex] = useState([1]);
  const [count, setCount] = useState([1, 2]);
  const [Raw_Material_Purchase, setraw_mt] = useState(false);

  console.log("raw material data ", Raw_Material_Purchase)
  const [state, setState] = useState({
    Sno: 0,
    Date: "",
    Time_in: "",
    Vehicle_No: "",
    Delivered_By: "",
    Suppliers_Name: "",

    PO_No: "",
    DCBIL_No: "",
    Consumable_Purchase: false,
    Sales_Return: false,
    GRN_No: "",
    MR_No: " ",
    Returnable: false,
    Transfer: false,
    Transfer_No: "",
    Fixed_Assets_Purchase: false,
    Status: "0",
    Created_by: 0,
    Updated_by: 0,


  });

  const data_tabel = () => {
    setSno_array((prev) => [...prev, prev.length + 1]);
    setItem_array((prev) => [...prev, `Item ${prev.length + 1}`]); // Add a default item value.
    setDescription_array((prev) => [
      ...prev,
      `Description ${prev.length + 1}`,
    ]); // Add a default description value.
    setQuantity_array((prev) => [...prev, prev.length + 1]); // Add a default quantity value.
  };
  function db_ap() {

    const id = generateUniqueId()
    console.log("uniqueid", id);



    
    if (!state.Date) {
      alert("Date is required");
      return;
    }
    if (!state.Time_in) {
      alert("Time_in is required");
      return;
    }

    if (!state.Vehicle_No) {
      alert("Vehicle_No is required");
      return;
    }

    if (!state.Delivered_By) {
      alert("Delivered_By is required");
      return;
    }

    if (!state.Suppliers_Name) {
      alert("Suppliers_Name is required");
      return;
    }




    if (!state.Transfer) {
      alert(" transfer is required");
      return;
    }

    if (!state.Sales_Return) {
      alert("Sales Return is required");
      return;
    }

    if (!state.Transfer_No) {
      alert("Transfer No is required");
      return;
    }


    if (!state.PO_No) {
      alert("PO No is required");
      return;
    }

    if (!state.GRN_No) {
      alert("GRN No is required");
      return;
    }


    if (!state.MR_No) {
      alert(" MR No is required");
      return;
    }


    if (!state.DCBIL_No) {
      alert(" DCBIL No is required");
      return;
    }




    if (!state.Fixed_Assets_Purchase) {
      alert(" fixed assets purchase is required");
      return;
    }



    if (!state.Consumable_Purchase) {
      alert(" consumable purchase is required");
      return;
    }

    SAVE_INTO_DB(id)

    // if(! state.Status){
    //   alert(" STATUS is required");  
    //   return;
    // }



    // if(! state.Created_by){
    //   alert(" Created by is required");  
    //   return;
    // }



    // if(! state.Updated_by){
    //   alert(" Updated by  is required");  
    //   return;
    // }

    item_code.map((data, index) => {
      console.log("this is data", data);
    })

    if (!state.Returnable) {
      alert(" Returnable is required");
      return;
    }

    const payload = {

      // ya ha paylod or object bhi kha jata ha  ya 

      date: state.Date,
      time_in: state.Time_in,
      vehicle_no: state.Vehicle_No,
      delivered_by: state.Delivered_By,
      supplier_name: state.Suppliers_Name,
      raw_material_purchase: Raw_Material_Purchase,
      transfer: state.Transfer,
      sales_return: state.Sales_Return,
      transfer_no: state.Transfer_No,
      po_no: state.PO_No,
      grn_no: state.GRN_No,
      mr_no: state.MR_No,
      dcbil_no: state.DCBIL_No,
      fixed_assets_purchase: state.Fixed_Assets_Purchase,
      consumable_purchase: state.Consumable_Purchase,
      status: state.Status,
      created_at: new Date().toISOString(),
      created_by: state.Created_by,
      updated_by: state.Updated_by,
      updated_at: new Date().toISOString(),
      returnable: state.Returnable,
      inward_gate_pass_code: id,


    }

   


    axios.post("http://localhost:5500/insert-inward-gatepass", payload).then((response) => {
      console.log("this is response", response);

      setraw_mt(false)
      setState({
        Sno: 0,
        Date: "",
        Time_in: "",
        Vehicle_No: "",
        Delivered_By: "",
        Suppliers_Name: "",

        PO_No: "",
        DCBIL_No: "",
        Consumable_Purchase: false,
        Sales_Return: false,
        GRN_No: "",
        MR_No: " ",
        Returnable: false,
        Transfer: false,
        Transfer_No: "",
        Fixed_Assets_Purchase: false,
        Status: "0",
       
        Created_by: 0,
        Updated_by: 0,


      })

      // Reset state to initial values

    }).catch((error) => {
      console.error(error);
    })
    // YA MIS TAKE HA GIS KO DICK  KR  ACHE TARA SA GALTI KA IDEA HO TA HA 
    // axios.post("http://localhost:5500/post-inward-detials", payload2, payload3, payload4).then((response) => {
    //   console.log("this is response", response);
    //   alert("Data Inserted Successfully");

    //   window.location.reload();
    // }).catch((error) => {
    //   console.error(error);

    // })
  }
  function SAVE_INTO_DB(id) {
    // Create an array of promises from the API calls
    const payloadPromises = item_code.map((code, index) => {
      const payload = {
        item_code: code,
        description: description_array[index],
        quantity: quantity_array[index],
        inward_gate_pass_code: id,
      };
      return axios.post("http://localhost:5500/post-inward-detials", payload)
        .then((response) => {
          console.log(`Uploaded item ${index + 1}:`, response.data);
          return response;
        });
    });

    // Wait for all API calls to finish
    Promise.all(payloadPromises)
      .then((responses) => {
        // All items have been successfully uploaded; now clear the state.
        setItem_array([]);
        setDescription_array([]);
        setQuantity_array([]);

      })
      .catch((error) => {
        console.error("Error uploading items:", error.message);
      });
  }
 
  console.log("State", state);
 
  return (
    <div className="App , w-screen " >   
     <Layout>
      <div  className="w-[90%]">
      <div
        className="form"
        style={{
          backgroundColor: "lightyellow",
          border: "1px solid black",
          height: "auto",
          margin: "auto",
          padding: "20px",
          marginTop: "10px",
          borderRadius: "8px",
        }}
      >
        <h1 className="text-center text-2xl">Inward Gate Pass</h1>

        <div className="flex flex-col gap-6 p-4">
          <div key={1} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
{/* id = 11 */}
<div className="flex flex-col ">
  <label htmlFor="number-S.no" className="text-sm text-left">
    S.no:
  </label>
  <input
    id={`Sno`}
    name="Sno"
    type="number"
    value={"00047"}
    disabled
    placeholder={`Sno`}
    className="border-b border-gray-300 focus:border-blue-500 outline-none p-2"
  />
</div>

{/* id = 12 */}

<div className="flex flex-col">
  <label htmlFor="date" className="text-sm text-left">
    Date
  </label>

  <input
    id={`12`}
    type="date"
    value={state.Date} // State ko value assign kiya
    onChange={(e) => {
      setState((prevState) => ({
        ...prevState,
        Date: e.target.value, // Date state update ki
      }));
    }}
    // placeholder={`Input two`}
    className="border-b border-gray-300 focus:border-blue-500 outline-none p-2"
  />
</div>

{/* id = 13 */}
<div className="flex flex-col">
  <label htmlFor="time-in" className="text-sm text-left">
    Time in
  </label>

  <input
    id={"13"}
    type="time"
    value={state.Time_in} // State ko value assign kiya
    onChange={(e) => {
      setState((prevState) => ({
        ...prevState,
        Time_in: e.target.value,
      }));
    }}
    placeholder={`Enter time in`}
    className="border-b border-gray-300 focus:border-blue-500 outline-none p-2"
  />
</div>

{/* id =14 */}

<div className="flex flex-col">
  <label htmlFor="vehicle-no" className="text-sm text-left">
    Vehicle No:
  </label>

  <input
    id={`14`}
    type="text"
    value={state.Vehicle_No}
    onChange={(e) => {
      setState((prevState) => ({
        ...prevState,
        Vehicle_No: e.target.value,
      }));
    }}
    placeholder={`Vechile Number`}
    className="border-b border-gray-300 focus:border-blue-500 outline-none p-2"
  />
</div>

{/* id = 15 */}

<div className="flex flex-col">
  <label htmlFor="delivered-by" className="text-sm text-left">
    Delivered By:
  </label>
  <input
    id={`15`}
    type="text"
    value={state.Delivered_By}
    onChange={(e) => {
      setState((prevState) => ({
        ...prevState,
        Delivered_By: e.target.value,
      }));
    }}
    placeholder={`Delivered by`}
    className="border-b border-gray-300 focus:border-blue-500 outline-none p-2"
  />
</div>
{/* id =16 */}

<div className="flex flex-col">
  <label htmlFor="supplier-name" className="text-sm text-left">
    Supplier Name:
  </label>

  <input
    id={`16`}
    type="text"
    value={state.Suppliers_Name}
    onChange={(e) => {
      setState((prevState) => ({
        ...prevState,
        Suppliers_Name: e.target.value,
      }));
    }}
    placeholder={`Supplier Name`}
    className="border-b border-gray-300 focus:border-blue-500 outline-none p-2"
  />
</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 p-4">
          {/* <!-- Row 1 --> */}
          <div className="col-span-3 flex items-center gap-2">
<input
  id="checkbox-raw-material"
  checked={Raw_Material_Purchase}
  // value={Raw_Material_Purchase}
  onChange={(e) => {
    setraw_mt((prev) => !prev)
  }}
  type="checkbox"
  className="w-4 h-4
  border-gray-300 rounded focus:ring-blue-500"
/>
<label htmlFor="checkbox-raw-material" className="text-sm">
  Raw Material Purchase
</label>
          </div>

          <div className="col-span-3">
<label htmlFor="po-no" className="text-sm text-left ">
  P/O No:
</label>
<input
  id="po-no"
  type="text"
  value={state.PO_No}
  onChange={(e) => {
    setState((prevState) => ({
      ...prevState,
      PO_No: e.target.value,
    }));
  }}
  placeholder="P/O No."
  className="w-full border-2 border-black rounded-md p-2 
focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          </div>

          <div className="col-span-3">
<label htmlFor="dcbil-no" className="text-sm text-left">
  D.C.B.I.L No:
</label>
<input
  id="dcbil-no"
  value={state.DCBIL_No}
  onChange={(e) => {
    setState((prevState) => ({
      ...prevState,
      DCBIL_No: e.target.value,
      'oilo': ''
    }));
  }}
  type="text"
  placeholder="D.C.B.I.L No."
  className="w-full border-2 border-black rounded-md p-2 
focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          </div>
          <div className="col-span-3 flex items-center gap-2">
<input
  id="checkbox-consumable"
  // value={state.Consumable_Purchase}
  checked={state.Consumable_Purchase}

  onChange={(e) => {
    setState((prevState) => ({
      ...prevState,
      Consumable_Purchase: !state.Consumable_Purchase,
    }));
  }}
  type="checkbox"
  className="w-4 h-4 border-gray-300 rounded
 focus:ring-blue-500"
/>
<label htmlFor="checkbox-consumable" className="text-sm">
  Consumable Purchase:
</label>
          </div>

          {/* <!-- Row 2 --> */}
          <div className="col-span-3 flex items-center gap-2">
<input
  id="checkbox-sales-return"
  // value={state.Sales_Return}
  checked= {state.Sales_Return}
  onChange={(e) => {
    setState((prevState) => ({
      ...prevState,
      Sales_Return: !state.Sales_Return

    }));
  }}
  type="checkbox"
  className="w-4 h-4 border-gray-300 rounded
  focus:ring-blue-500"
/>
<label htmlFor="checkbox-sales-return" className="text-sm">
  Sales Return:
</label>
          </div>
          <div className="col-span-3">
<label htmlFor="grn-no" className="text-sm text-left ">
  GRN No:
</label>
<input
  id="grn-no"
  type="text"

  value={state.GRN_No}
  onChange={(e) => {
    setState((prevState) => ({
      ...prevState,
      GRN_No: e.target.value,
    }));
  }}
  placeholder="GRN No."
  className="w-full border-2 border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          </div>
          <div className="col-span-3">
<label htmlFor="mr-no" className="text-sm text-left ">
  M.R No:
</label>
<input
  id="mr-no"
  type="text"
  value={state.MR_No}
  onChange={(e) => {
    setState((prevState) => ({
      ...prevState,
      MR_No: e.target.value,
    }));
  }}
  placeholder="M.R No."
  className="w-full border-2 border-black rounded-md p-2 
 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          </div>
          <div className="col-span-3 flex items-center gap-2">
<input
  id="checkbox-retrmable"
  type="checkbox"
  // value={state.Returnable}
    checked={state.Returnable}
  onChange={(e) => {
    setState((prevState) => ({
      ...prevState,
      Returnable: !state.Returnable
    }));
  }}
  className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
/>
<label htmlFor="checkbox-retrmable" className="text-sm">
  Returnable:
</label>
          </div>

          {/* <!-- Row 3 --> */}
          <div className="col-span-3 flex items-center gap-2">
<input
  id="checkbox-transfer"
  type="checkbox"
  // value={state.Transfer}
  checked={state.Transfer}
  onChange={(e) => {
    setState((prevState) => ({
      ...prevState,
      Transfer: !state.Transfer
    }));
  }}
  className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
/>
<label htmlFor="checkbox-transfer" className="text-sm">
  Transfer:
</label>
          </div>
          <div className="col-span-3">
<label htmlFor="transfer-no" className="text-sm text-left ">
  Transfer No:
</label>
<input
  id="transfer-no"
  type = "text"
  value={state.Transfer_No}
  placeholder="Transfer No:"
  onChange={(e) => {
    setState((prevState) => ({
      ...prevState,
      Transfer_No: e.target.value,
    }));
  }}
  className="w-full border-2 border-black rounded-md p-2 focus:outline-none 
  focus:ring-2 focus:ring-blue-500"
/>
          </div>

          <div className="col-span-6 flex items-center gap-2">
<input
  id="checkbox-fixed-assets"
  type="checkbox"
  // value={state.Fixed_Assets_Purchase}
  checked={state.Fixed_Assets_Purchase}
  onChange={(e) => {
    setState((prevState) => ({
      ...prevState,
      Fixed_Assets_Purchase: !state.Fixed_Assets_Purchase
    }));
  }}
  className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
/>
<label htmlFor="checkbox-fixed-assets" className="text-sm">
  Fixed Assets Purchase:
</label>
          </div>
        </div>



        <div style={styles.flexContainer}>
          {/* <h2 style={{ textAlign: "center" }}>Two-Column Table</h2> */}

          {/* table start  */}


          <table
style={{
  width: "100%", borderCollapse: "collapse", marginTop: "20px",
}}
          >
<thead>
  <tr>

    <th style={styles.headerCell}>S.No</th>
    <th style={styles.headerCell}>Item Code </th>
    <th style={styles.headerCell}>Description</th>
    <th style={styles.headerCell}>Quantity</th>

  </tr>
</thead>
<tbody>
  {count.map((_, index) => (
    <tr key={index}>
      <td className="w-10" style={styles.cell}>
        <input
          value={sno_array[index] || ""}
          type="text"
          disabled
          placeholder={index + 1}
          style={styles.input}
        />
      </td>
      <td className="w-20" style={styles.cell}>
        <input
          value={item_code[index] || ""}
          onChange={(e) => {
const updatedItems = [...item_code];

updatedItems[index] = e.target.value;
setItem_array(updatedItems);
console.log("updatedItems", updatedItems)

          }}
          type="text"
          placeholder="Enter item"
          style={styles.input}
        />
      </td>
      <td className="width-50" style={styles.cell}>
        <input
          value={description_array[index] || ""}
          onChange={(e) => {
const updatedDescriptions = [...description_array];

updatedDescriptions[index] = e.target.value;
setDescription_array(updatedDescriptions);
console.log("updatedDescriptions", updatedDescriptions)
          }}
          type="text"
          placeholder="Enter description"
          style={styles.input}
        />
      </td>
      <td className="w-20" style={styles.cell}>
        <input
          value={quantity_array[index] || ""}
          onChange={(e) => {
const updatedQuantities = [...quantity_array];
updatedQuantities[index] = e.target.value;
setQuantity_array(updatedQuantities);

console.log("updatedQuantities", updatedQuantities)
          }}
          type="text"
          placeholder="Enter quantity"
          style={styles.input}
        />
      </td>
    </tr>
  ))}
</tbody>
          </table>


          {/* table end */}


          {/* Button at the bottom */}
          {/* Button positioned bottom-right */}
          <div
style={{
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "10px",
}}
          >
<button
  onClick={() => setCount([...count, count.length + 1])}
  style={{
    backgroundColor: "white",

    borderRadius: '3px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

    color: "black",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  }}
>
  Add Row
</button>
          </div>
        </div>



        <button
          onClick={db_ap}
          style={{
backgroundColor: "white",

borderRadius: '3px',
boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

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
    </Layout>
    </div>
    
  );
};

const styles = {
  headerCell: {
    border: "1px solid #000",
    padding: "10px",
    backgroundColor: "#f2f2f2",
    textAlign: "left",
  },
  cell: {
    border: "1px solid #000",
    padding: "10px",
  },
  input: {
    width: "100%",
    padding: "5px",
    border: "none",
    boxSizing: "border-box",
  },
};

export default InwardGatePass;
