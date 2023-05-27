import { resultadoFCS } from "../helpers/textResults"

const Resultado = ({total}) => {
  return (
    <div className={`w-[80%] md:w-[60%] p-1 text-white font-semibold text-lg rounded-xl ${total <= 8 && 'bg-green-800'} ${total === 9 && 'bg-yellow-300 text-[#161616]'} ${total >= 10 && 'bg-red-600'}`}>
        <p className='text-center'>El resultado es: {total}</p>
        <p className='text-center' >{resultadoFCS(total)}</p>
    </div>
  )
}

export default Resultado