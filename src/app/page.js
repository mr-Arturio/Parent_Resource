"use client";

import React, { useEffect, useState } from "react";
import { getSheetData } from "../actions/getSheetData";
import RenderSheetDataTable from "../components/RenderSheetDataTable";
import { Header } from "../components/Header";
import ContactForm from "../components/ContactForm";

function Home() {
  const [sheetData, setSheetData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSheetData();
      setSheetData(response.props.sheetData);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      {/* Top Content Area - Always present */}
      <div className=" max-w-screen-2xl w-11/12 p-4">
        <Header />
      </div>

      <main className="max-w-screen-2xl flex-1  w-11/12">
        {" "}
        <RenderSheetDataTable sheetData={sheetData} />
          </main>
      {/* Bottom Content Area - Always present */}
      <div className="max-w-screen-2xl w-11/12 p-4">
        <h2 className="text-2xl font-bold">Need Help?</h2>
      <ContactForm />
      </div>
    </div>
  );
}

export default Home;
