const InputAyunoGroup = ({onChange, checked}) => {
  return (
    <div className='flex flex-col mx-4 py-2 gap-2 justify-between border-b border-[#982781]'>
        <div className="flex flex-col md:flex-row">
            <p className="font-semibold">TG en ayuno:</p>
        </div>
        <div className="flex justify-start items-center gap-5">
            <div className="w-full flex justify-between items-center cursor-pointer">
            <p className='font-semibold pl-3'>{'>885 mg/dl en 3 mediciones consecutivas'}</p>
            <div className="flex flex-col">
                <div className="flex gap-2 md:gap-4">
                    <div className="flex items-center gap-2">
                        <label className={`flex items-center gap-1 cursor-pointer ${checked.tg3_885 === 5 && 'font-semibold'}`} htmlFor='tg3_885'>
                            SI
                            <span className={`flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white border border-[#982781] labelPintado ${checked.tg3_885 === 5 ? ' after:opacity-100' : ' after:opacity-0'}`}></span>
                        </label>
                        <input
                            id='tg3_885'
                            type='radio'
                            name='tg3_885'
                            value={5}
                            onChange={onChange}
                            className="hidden"
                            checked={checked.tg3_885 === 5}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label className={`flex items-center gap-1 cursor-pointer  ${checked.tg3_885 === 0 ? 'font-semibold' : ''}`} htmlFor='tg3_8850'>
                            NO
                            <span className={`relative flex justify-center items-center w-[20px] h-[20px] bg-white rounded-full border border-[#982781] labelPintado ${checked.tg3_885 === 0 ? ' after:opacity-100' : ' after:opacity-0'}`}></span>
                        </label>
                        <input
                            id='tg3_8850'
                            type='radio'
                            name='tg3_885'
                            value={0}
                            onChange={onChange}
                            className="hidden"
                            checked={checked.tg3_885 === 0}
                        />
                    </div>
                </div>
            </div>
            </div>
        </div>
        {
            checked.tg3_885 === false && 
            <div className="w-[100%] font-semibold text-[11px] text-right text-red-600 italic pr-2 mt-[-8px]">
                *campo obligatorio
            </div>
        }
        <div className="flex justify-start items-center gap-5">
            <div className="w-full flex justify-between items-center cursor-pointer">
            <p className='font-semibold pl-3'>{'≥1770 mg/dl al menos una vez'}</p>
            <div className="flex flex-col">
                <div className="flex gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                    <label className={`flex items-center gap-1 cursor-pointer ${checked.tg3_1770 === 1 ? 'font-semibold' : ''}`} htmlFor='tg3_1770'>
                        SI
                        <span className={`flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white border border-[#982781] labelPintado ${checked.tg3_1770 === 1 ? ' after:opacity-100' : ' after:opacity-0'}`}></span>
                    </label>
                    <input
                        id='tg3_1770'
                        type='radio'
                        name='tg3_1770'
                        value={1}
                        onChange={onChange}
                        className="hidden"
                        checked={checked.tg3_1770 === 1}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label className={`flex items-center gap-1 cursor-pointer  ${checked.tg3_1770 === 0 ? 'font-semibold' : ''}`} htmlFor='tg3_17700'>
                    NO
                    <span className={`relative flex justify-center items-center w-[20px] h-[20px] bg-white rounded-full border border-[#982781] labelPintado ${checked.tg3_1770 === 0 ? 'after:opacity-100' : 'after:opacity-0'}`}></span>
                    </label>
                    <input
                    id='tg3_17700'
                    type='radio'
                    name='tg3_1770'
                    value={0}
                    onChange={onChange}
                    className="hidden"
                    checked={checked.tg3_1770 === 0}
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        {
            checked.tg3_1770 === false && 
            <div className="w-[100%] font-semibold text-[11px] text-right text-red-600 italic pr-2 mt-[-8px]">
                *campo obligatorio
            </div>
        }
    </div>
  )
}
export default InputAyunoGroup