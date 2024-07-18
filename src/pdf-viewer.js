import React, { useEffect, useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
import { pdf } from '@react-pdf/renderer'
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ children }) => {
    const [pdfUrl, setPdfUrl] = useState(null)

    useEffect(() => {
        const child = React.Children.only(children)

        pdf(child).toBlob().then(blob => {
            setPdfUrl(URL.createObjectURL(blob))
        })
    }, [children])

    return (
        <Document file={pdfUrl}>
            <Page renderMode='canvas' pageNumber={1} />
        </Document>
    )
}

export default PDFViewer