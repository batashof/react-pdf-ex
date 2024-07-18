import './App.css';
import {MyDocument} from "./pdf-document";
import PDFViewer from "./pdf-viewer";
import React, {useState} from "react";
import {PdfForm} from "./pdf-form";

function App() {
    const [formData, setFormData] = useState();
    return (
        <div style={{display: "flex"}}>
            <PdfForm onSubmitForm={setFormData}/>
            <PDFViewer>
                <MyDocument data={formData}/>
            </PDFViewer>
        </div>
    );
}

export default App;
