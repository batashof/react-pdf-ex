import './App.css';
import {MyDocument} from "./pdf-document";
import PDFViewer from "./pdf-viewer";
import React, {useState} from "react";
import {PdfForm} from "./pdf-form";
import {PDFDownloadLink} from "@react-pdf/renderer";

function App() {
    const [formData, setFormData] = useState();
    return (
        <div style={{display: "flex"}}>
            <PdfForm onSubmitForm={setFormData}/>
            <PDFDownloadLink document={<MyDocument data={formData}/>} fileName="somename.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : <button className='pdf-button'>Download now!</button>
                }
            </PDFDownloadLink>
            <PDFViewer>
                <MyDocument data={formData}/>
            </PDFViewer>
        </div>
    );
}

export default App;
