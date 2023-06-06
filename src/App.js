import { useEffect, useState } from 'react'
import InputEdadGroup from './components/InputEdadGroup'
import InputGroup from './components/InputGroup'
import InputAyunoGroup from './components/InputAyunoGroup'
import Resultado from './components/Resultado'
import SendButtons from './components/SendButtons'

const initialValues = {
  tg3: false,
  tgPrevio: false,
  secundarios: false,
  pancreatitis: false,
  abdominal: false,
  historia: false,
  respuesta: false,
  edad: false
}

export default function App() {

  const [data, setData] = useState(initialValues)
  const {tg3, tgPrevio, secundarios, pancreatitis, abdominal, historia, respuesta, edad} = data
  const [total, setTotal] = useState(tg3 + tgPrevio + secundarios + pancreatitis + abdominal + historia + respuesta + edad)

  const handleChange = (e) => {
    const inputName = e.target.name
    const inputValue = Number(e.target.value)
    setData({
      ...data,
      [inputName]: inputValue
    })
  }

  const resetForm = () => {
    setData(initialValues)
  }

  useEffect(() => {
    setTimeout(() => {
      setTotal(tg3 + tgPrevio + secundarios + pancreatitis + abdominal + historia + respuesta + edad)
    }, 100);

   
  }, [tg3, tgPrevio, secundarios, pancreatitis, abdominal, historia, respuesta, edad])
  
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-start justify-start p-3 md:py-4 md:px-5 text-sm bg-transparent">
        <div className='w-full flex justify-center z-50 px-3'>
          <div className='relative w-[100%] md:w-[85%] h-[80px] py-2 px-[3%] md:px-[5%] flex justify-center items-center gap-3 md:gap-5 rounded-lg text-white backgroundGradient'>
            <img src='./celula.jpg' alt='imagen de celula' className='relative rounded-full w-[45px] md:w-[65px]'/>
            <div>
              <h2 className='text-[0.8rem] md:text-xl font-semibold'>Triglicéridos mayores a 880 mg/dl*</h2>
              <p className='text-xs'>*Sin respuesta a terapia hipolipemiante convencional</p>
            </div>
          </div>
        </div>

        <form className='relative w-full rounded-lg border-2 border-[#982781] pt-14 mt-[-40px] bg-white'>
          <InputAyunoGroup onChange={handleChange} checked={data.tg3}/>
          <InputGroup
            label='TG previo <177 al menos una vez:'
            name='tgPrevio'
            value={-5}
            id='tgPrevio'
            onChange={handleChange}
            checked={data.tgPrevio}
          />
          <InputGroup
            label='Ausencia de factores secundarios:'
            span='*excepto embarazo y uso de etinilestradiol'
            name='secundarios'
            value={2}
            id='secundario'
            onChange={handleChange}
            checked={data.secundarios}
          />
          <InputGroup
            label='Historia de pancreatitis:'
            name='pancreatitis'
            id='pancreatitis'
            onChange={handleChange}
            checked={data.pancreatitis}
          />
          <InputGroup
            label='Dolor abdominal recurrente sin causa conocida:'
            name='abdominal'
            id='abdominal'
            onChange={handleChange}
            checked={data.abdominal}
          />
          <InputGroup
            label='Ausencia de historia familiar de hiperlipemia familiar combinada:'
            name='historia'
            id='historia'
            onChange={handleChange}
            checked={data.historia}
          />
          <InputGroup
            label='Ausencia de respuesta (disminución de TG <20%) al tratamiento hipolipemiante:'
            name='respuesta'
            id='respuesta'
            onChange={handleChange}
            checked={data.respuesta}
          />
          <InputEdadGroup onChange={handleChange} checked={data.edad} />
          <section className='mt-10 px-5 flex flex-col items-center w-full gap-2'>
            <Resultado total={total} />
            <SendButtons data={data} total={total} resetForm={resetForm} />
          </section>
        </form>
      </main>
    </>
  )
}
