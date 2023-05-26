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

export const bodyResultWa = ({tg3, tgPrevio, secundarios, pancreatitis, abdominal, historia, respuesta, edad}, total) =>{
    return `
    Resultados FCS:\n
    ${
        Number(tg3) === 5 
        ? `- TG en ayuno en 3 mediciones consecutivas >880mg/dl: SI\n`
        : `- TG en ayuno al menos una vez ≥1770mg/dl: SI\n`
    }
    - TG previo al menos una vez: ${Number(tgPrevio) === 0 ? 'NO' : 'SI'}\n
    - Ausencia de factores secundarios: ${Number(secundarios) === 0 ? 'NO' : 'SI'}\n
    - Historia de pancreatitis: ${Number(pancreatitis) === 0 ? 'NO' : 'SI'}\n
    - Dolor abdominal recurrente sin causa conocida: ${Number(abdominal) === 0 ? 'NO' : 'SI'}\n
    - Ausencia de historia familiar de hiperlipemia familiar combinada: ${Number(historia) === 0 ? 'NO' : 'SI'}\n
    - Ausencia de respuesta al tratamiento hipolipemiante: ${Number(respuesta) === 0 ? 'NO' : 'SI'}\n
    - Edad de inicio de síntomas: ${Number(edad) === 1 ? '< 40 años' : ''}${Number(edad) === 2 ? '< 20 años' : ''}${Number(edad) === 3 ? '< 10 años' : ''}\n
    \n
    ${total >= 10 ? '*FCS muy probable*' : ''}${total === 9 ? '*FCS improbable*' : ''}${total <= 8 ? '*FCS muy improbable*' : ''}
    `
}

export const bodyResultEmail = ({tg3, tgPrevio, secundarios, pancreatitis, abdominal, historia, respuesta, edad}, total) =>{
    return `
    Resultados%20FCS:%0A
    ${
        Number(tg3) === 5 
        ? `-%20TG%20en%20ayuno%20en%203%20mediciones%20consecutivas%20>880mg/dl:%20SI%0A`
        : `-%20TG%20en%20ayuno%20al%20menos%20una%20vez%20≥1770mg/dl:%20SI%0A`
    }
    -%20TG%20previo%20al%20menos%20una%20vez:%20${Number(tgPrevio) === 0 ? 'NO' : 'SI'}%0A
    -%20Ausencia%20de%20factores%20secundarios:%20${Number(secundarios) === 0 ? 'NO' : 'SI'}%0A
    -%20Historia de pancreatitis:%20${Number(pancreatitis) === 0 ? 'NO' : 'SI'}%0A
    -%20Dolor%20abdominal%20recurrente%20sin%20causa%20conocida:%20${Number(abdominal) === 0 ? 'NO' : 'SI'}%0A
    -%20Ausencia%20de%20historia%20familiar%20de%20hiperlipemia%20familiar%20combinada:%20${Number(historia) === 0 ? 'NO' : 'SI'}%0A
    -%20Ausencia%20de%20respuesta%20al%20tratamiento%20hipolipemiante:%20${Number(respuesta) === 0 ? 'NO' : 'SI'}%0A
    -%20Edad%20de%20inicio%20de%20síntomas:%20${Number(edad) === 1 ? '< 40 años' : ''}${Number(edad) === 2 ? '< 20 años' : ''}${Number(edad) === 3 ? '< 10 años' : ''}%0A
    %0A
    -%20${total >= 10 ? 'FCS%20muy%20probable' : ''}${total === 9 ? 'FCS%20improbable' : ''}${total <= 8 ? 'FCS%20muy%20improbable' : ''}%0A
    %0A
    %0A
    %0A
    `
}