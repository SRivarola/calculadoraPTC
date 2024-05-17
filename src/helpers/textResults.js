export const resultadoFCS = (total) => {
    if(total >= 10) {
        return 'FCS muy probable'
    }
    if (total === 9) {
        return 'FCS improbable'
    }
    if (total <= 8) {
        return 'FCS muy improbable'
    }
}

export const bodyResultWa = ({tg3_885, tg3_1770, tgPrevio, secundarios, pancreatitis, abdominal, historia, respuesta, edad}, total) =>{
    return `
    Resultados Score FCS:\n
   
    - TG en ayuno en 3 mediciones consecutivas >885mg/dl: ${Number(tg3_885) === 5 ? 'SI' : 'NO'}\n
    - TG en ayuno al menos una vez ≥1770mg/dl: ${Number(tg3_1770) === 1 ? 'SI' : 'NO'}\n
    - TG previo al menos una vez: ${Number(tgPrevio) === 0 ? 'NO' : 'SI'}\n
    - Ausencia de factores secundarios: ${Number(secundarios) === 0 ? 'NO' : 'SI'}\n
    - Historia de pancreatitis: ${Number(pancreatitis) === 0 ? 'NO' : 'SI'}\n
    - Dolor abdominal recurrente sin causa conocida: ${Number(abdominal) === 0 ? 'NO' : 'SI'}\n
    - Sin antecedente de Hiperlipemia Familiar Combinada: ${Number(historia) === 0 ? 'NO' : 'SI'}\n
    - Ausencia de respuesta al tratamiento hipolipemiante: ${Number(respuesta) === 0 ? 'NO' : 'SI'}\n
    - Edad de inicio de síntomas: ${Number(edad) === 1 ? '< 40 años' : ''}${Number(edad) === 2 ? '< 20 años' : ''}${Number(edad) === 3 ? '< 10 años' : ''}${Number(edad) === 0 ? '> 40 años' : ''}\n
    \n
    ${total >= 10 ? '*FCS muy probable*' : ''}${total === 9 ? '*FCS improbable*' : ''}${total <= 8 ? '*FCS muy improbable*' : ''}
    `
}

export const bodyResultEmail = ({tg3_885, tg3_1770, tgPrevio, secundarios, pancreatitis, abdominal, historia, respuesta, edad}, total) =>{
    return `
    Resultados%20Score%20FCS:%0A
    -%20TG%20en%20ayuno%20en%203%20mediciones%20consecutivas%20>885mg/dl:%20${Number(tg3_885) === 0 ? 'NO' : 'SI'}%0A
    -%20TG%20en%20ayuno%20al%20menos%20una%20vez%20≥1770mg/dl:%20${Number(tg3_1770) === 0 ? 'NO' : 'SI'}%0A
    -%20TG%20previo%20al%20menos%20una%20vez:%20${Number(tgPrevio) === 0 ? 'NO' : 'SI'}%0A
    -%20Ausencia%20de%20factores%20secundarios:%20${Number(secundarios) === 0 ? 'NO' : 'SI'}%0A
    -%20Historia de pancreatitis:%20${Number(pancreatitis) === 0 ? 'NO' : 'SI'}%0A
    -%20Dolor%20abdominal%20recurrente%20sin%20causa%20conocida:%20${Number(abdominal) === 0 ? 'NO' : 'SI'}%0A
    -%20Sin%20antecedente%20de%20Hiperlimia%20Familiar%20Combinada:%20${Number(historia) === 0 ? 'NO' : 'SI'}%0A
    -%20Ausencia%20de%20respuesta%20al%20tratamiento%20hipolipemiante:%20${Number(respuesta) === 0 ? 'NO' : 'SI'}%0A
    -%20Edad%20de%20inicio%20de%20síntomas:%20${Number(edad) === 1 ? '< 40 años' : ''}${Number(edad) === 2 ? '< 20 años' : ''}${Number(edad) === 3 ? '< 10 años' : ''}${Number(edad) === 0 ? '> 40 años' : ''}%0A
    %0A
    -%20${total >= 10 ? 'FCS%20muy%20probable' : ''}${total === 9 ? 'FCS%20improbable' : ''}${total <= 8 ? 'FCS%20muy%20improbable' : ''}%0A
    %0A
    %0A
    %0A
    `
}