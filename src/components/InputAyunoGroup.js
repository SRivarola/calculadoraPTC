const InputAyunoGroup = ({onChange, checked}) => {
  return (
    <div className='flex flex-col mx-4 py-2 gap-2 justify-between border-b border-[#982781]'>
        <div className="flex flex-col md:flex-row">
            <p className="font-semibold">TG en ayuno:</p>
        </div>
        <div className="flex justify-start items-center gap-5">
            <label className="w-full flex justify-end items-center gap-2 cursor-pointer" htmlFor="1">
                <p className={`${checked === 5 ? 'font-semibold' : ''}`}>{'>880 mg/dl en 3 mediciones consecutivas'}</p>
                <span className={`flex justify-center items-center w-[20px] h-[20px] bg-white rounded-full border border-[#982781] labelPintado ${checked === 5 ? ' after:opacity-100' : ' after:opacity-0'}`}></span>
            </label>
            <input
                id="1"
                type='radio' 
                name='tg3'
                value={5}
                onChange={onChange}
                checked={checked === 5}
                className="hidden"
            />
        </div>
        <div className="flex justify-start items-center gap-5">
            <label className="w-full flex justify-end items-center gap-2 cursor-pointer" htmlFor="2">
                <p className={`${checked === 1 ? 'font-semibold' : ''}`}>{'≥1770 mg/dl al menos una vez'}</p>
                <span className={`flex justify-center items-center w-[20px] h-[20px] bg-white rounded-full border border-[#982781] labelPintado ${checked === 1 ? ' after:opacity-100' : ' after:opacity-0'}`}></span>    
            </label>
            <input
                id="2"
                type='radio' 
                name='tg3'
                value={1}
                onChange={onChange}
                checked={checked === 1}
                className="hidden"
            />
        </div>
    </div>
  )
}
export default InputAyunoGroup