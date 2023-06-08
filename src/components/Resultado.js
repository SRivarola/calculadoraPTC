import { resultadoFCS } from "../helpers/textResults"

const Resultado = ({total}) => {
  return (
    <div className={`w-[100%] md:w-[60%] p-1 font-semibold text-lg rounded-[50px] ${total <= 8 && 'bg-[#028D84] text-white'} ${total === 9 && 'bg-[#ffcd5f] text-black'} ${total >= 10 && 'bg-[#a91d2a] text-white'}`}>
        <p className='text-center tracking-wider'>El resultado es: {total}</p>
        <p className='text-center tracking-wider' >{resultadoFCS(total)}</p>
    </div>
  )
}

export default Resultado