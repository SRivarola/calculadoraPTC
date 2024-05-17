import { useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import DocuPDF from './DocuPDF'
import { resultadoFCS } from '../helpers/textResults'
import { ImWhatsapp } from "react-icons/im"
import { GrMail } from "react-icons/gr"
import { BsFiletypePdf } from "react-icons/bs"
import { bodyResultWa, bodyResultEmail } from '../helpers/textResults'
import ReactWhatsapp from 'react-whatsapp'

const SendButtons = ({data, total, resetForm}) => {
    
    const [esValido, setEsValido] = useState(false)
    const [pdfButton, setPdfButton] = useState(false)
    const [waNumber, setWaNumber] = useState('')

    const resetAllValues = () => {
        setWaNumber('')
        resetForm()
    }

    const enviarMail = () => {
        window.open(`mailto:?subject=Resultados%20FCS&body=${bodyResultEmail(data, total)}`)
    }

    useEffect(() => {
        setPdfButton(true)
    }, [])

    useEffect(() => {
        const {tg3_885, tg3_1770, tgPrevio, secundarios, pancreatitis, abdominal, historia, respuesta, edad} = data
        if (tg3_885 !== false &&
            tg3_1770 !== false &&
            tgPrevio !== false && 
            secundarios !== false && 
            pancreatitis !== false && 
            abdominal !== false && 
            historia !== false &&
            respuesta !== false &&
            edad !== false ) {
            setEsValido(true)
        } else {
            setEsValido(false)
        }
    }, [data]);

  return (
    <>
        {
          esValido ? (<>
            <div className='relative w-full flex flex-col sm:flex-row justify-between items-center gap-4 mt-12'>
                {
                    pdfButton && 
                    <PDFDownloadLink 
                        document={<DocuPDF data={data} total={total} probabilidad={resultadoFCS(total)} />}
                        fileName='Resultados Score FCS.pdf'
                        className='flex justify-center items-center h-[45px] w-full bg-[#722882] text-white font-semibold px-3 py-1 rounded-3xl shadow-md'
                    >
                        {
                        ({loading}) => 
                            loading ? (
                            'Cargando...'
                            ) : (
                            <button type='button' className='flex gap-3 tracking-widest'>
                                DESCARGAR
                                <BsFiletypePdf className='text-xl'/>
                            </button>
                            ) 
                        }
                    </PDFDownloadLink>
                }
                <button type='button' onClick={enviarMail} className='flex justify-center items-center gap-3 h-[45px] w-full bg-[#722882] text-white tracking-widest font-semibold px-3 py-1 rounded-3xl shadow-md outline-none focus:outline-none'>
                    ENVIAR 
                    <GrMail className='text-xl'/>
                </button>
            </div>
            <div className='relative w-full justify-between items-center gap-0 my-2 rounded-[35px] inputWhatsappContainer'>
                <input 
                    className='inputWhatsapp'
                    placeholder='ingrese el número de WhatsApp'
                    type='number'
                    value={waNumber}
                    onChange={(e) => setWaNumber(e.target.value)}
                />
                {
                    waNumber.length > 6 ? (
                        <ReactWhatsapp 
                            number={waNumber} 
                            message={bodyResultWa(data, total)} 
                            className='buttonWhatsapp'
                        >
                            ENVIAR 
                            <ImWhatsapp className='text-xl'/>
                        </ReactWhatsapp>
                    ) : (
                        <div className='buttonWhatsapp'>
                            CARGAR NUMERO 
                            <ImWhatsapp className='text-xl'/>
                        </div>
                    )
                }
            </div>
          </>) : (
            <div className='textoResultado w-full flex flex-col justify-center items-center gap-4 mt-6 font-semibold'>
                Para enviar los resultados se deben completar todos los campos
            </div>
          )
        }
        <button
            onClick={resetAllValues} 
            className='w-full h-[45px] rounded-3xl border border-[#7a3e8870] my-4 py-2 shadow-md font-semibold tracking-widest'
        >
            RESETEAR RESULTADOS
        </button>
    </>
  )
}
export default SendButtons