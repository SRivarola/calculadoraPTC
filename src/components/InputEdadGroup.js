const InputEdadGroup = ({onChange, checked}) => {
  return (
    <div className='flex flex-col mx-4 py-2 gap-2 justify-between border-b border-[#982781]'>
        <div className="flex flex-col md:flex-row">
            <p className="font-semibold">Edad de inicio de síntomas:</p>
        </div>
        <div className="flex justify-end items-center gap-5">
            <label className="w-full flex justify-end items-center gap-2 cursor-pointer" htmlFor='edad1'>
                <p className={`${checked === 1 ? 'font-semibold' : ''}`}>{'< 40 años'}</p>
                <span className={`flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white border border-[#982781] labelPintado ${checked === 1 ? ' after:opacity-100' : ' after:opacity-0'}`}></span>
            </label>
            <input
                id='edad1'
                type='radio' 
                name='edad'
                value={1}
                onChange={onChange}
                checked={checked === 1}
                className="hidden"
            />
        </div>
        <div className="flex justify-end items-center gap-5">
            <label className="w-full flex justify-end items-center gap-2 cursor-pointer" htmlFor='edad2' >
                <p className={`${checked === 2 ? 'font-semibold' : ''}`}>{'< 20 años'}</p>
                <span className={`flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white border border-[#982781] labelPintado ${checked === 2 ? ' after:opacity-100' : ' after:opacity-0'}`}></span>
            </label>
            <input
                id='edad2'
                type='radio' 
                name='edad'
                value={2}
                onChange={onChange}
                checked={checked === 2}
                className="hidden"
            />
        </div>
        <div className="flex justify-end items-center gap-5">
            <label className="w-full flex justify-end items-center gap-2 cursor-pointer" htmlFor='edad3' >
                <p className={`${checked === 3 ? 'font-semibold' : ''}`}>{'< 10 años'}</p>
                <span className={`flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white border border-[#982781] labelPintado ${checked === 3 ? ' after:opacity-100' : ' after:opacity-0'}`}></span>
            </label>
            <input
                id='edad3'
                type='radio' 
                name='edad'
                value={3}
                onChange={onChange}
                checked={checked === 3}
                className="hidden"
            />
        </div>
    </div>
  )
}
export default InputEdadGroup