const InputGroup = ({ label, id, span, name, value = 1, onChange, checked }) => {
  return (
    <div className='flex mx-4 py-2 justify-between border-b border-[#982781]'>
        <label className="flex flex-col">
            <p className="font-semibold">{label}</p>
            <span className="text-xs md:text-sm">{span}</span>
        </label>
        <div className="flex flex-col">
          <div className="flex gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <label className={`flex items-center gap-1 cursor-pointer ${checked === value ? 'font-semibold' : ''}`} htmlFor={id}>
                SI
                <span className={`flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white border border-[#982781] labelPintado ${checked === value ? ' after:opacity-100' : ' after:opacity-0'}`}></span>
              </label>
              <input
                id={id}
                type='radio'
                name={name}
                value={value}
                onChange={onChange}
                className="hidden"
                checked={checked === value}
              />
            </div>
            <div className="flex items-center gap-2">
              <label className={`flex items-center gap-1 cursor-pointer  ${checked === 0 ? 'font-semibold' : ''}`} htmlFor={id+'0'}>
                NO
                <span className={`relative flex justify-center items-center w-[20px] h-[20px] bg-white rounded-full border border-[#982781] labelPintado ${checked === 0 ? ' after:opacity-100' : ' after:opacity-0'}`}></span>
              </label>
              <input
                id={id+'0'}
                type='radio'
                name={name}
                value={0}
                onChange={onChange}
                className="hidden"
                checked={checked === 0}
              />
            </div>
          </div>
          <div className="w-[100%] font-semibold text-[11px] text-red-600 italic">
            {
              checked === false && '*campo obligatorio'
            }
          </div>
        </div>
    </div>
  )
}
export default InputGroup