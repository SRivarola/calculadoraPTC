import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'

const DocuPDF = ({data, total}) => {
    console.log(data)
  return (
    <Document>
      <Page size={"A4"}>
        <View style={styles.body}>
          <Text style={styles.title}>Resultados Score FCS:</Text>
          <View style={styles.container}>
            <View style={styles.row}>
              <Text>
                {"TG en ayuno >885mg/dl en 3 mediciones consecutivas:"}
              </Text>
              <Text>{data.tg3_885 === 5 ? "SI" : "NO"}</Text>
            </View>
            <View style={styles.row}>
              <Text>{"TG en ayuno >1770mg/dl al menos una vez:"}</Text>
              <Text>{data.tg3_1770 === 1 ? "SI" : "NO"}</Text>
            </View>
            <View style={styles.row}>
              <Text>TG previo al menos una vez:</Text>
              <Text>{data.tgPrevio === 0 ? "NO" : "SI"}</Text>
            </View>
            <View style={styles.row}>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text>Ausencia de factores secundarios:</Text>
                <Text style={{ fontSize: "9px" }}>
                  *(excepto embarazo y uso de etinilestradiol)
                </Text>
              </View>
              <Text>{data.secundarios === 0 ? "NO" : "SI"}</Text>
            </View>
            <View style={styles.row}>
              <Text>Historia de pancreatitis:</Text>
              <Text>{data.pancreatitis === 0 ? "NO" : "SI"}</Text>
            </View>
            <View style={styles.row}>
              <Text>Dolor abdominal recurrente sin causa conocida:</Text>
              <Text>{data.abdominal === 0 ? "NO" : "SI"}</Text>
            </View>
            <View style={styles.row}>
              <Text>Sin antecedente de Hiperlipemia Familiar Combinada:</Text>
              <Text>{data.historia === 0 ? "NO" : "SI"}</Text>
            </View>
            <View style={styles.row}>
              <Text>
                {
                  "Ausencia de respuesta (disminución de TG <20%) al tratamiento hipolipemiante:"
                }
              </Text>
              <Text>{data.respuesta === 0 ? "NO" : "SI"}</Text>
            </View>
            <View style={styles.row}>
              <Text>Edad de inicio de síntomas:</Text>
              <View
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                {data.edad === 0 && <Text>{"> 40 años"}</Text>}
                {data.edad === 1 && <Text>{"< 40 años"}</Text>}
                {data.edad === 2 && <Text>{"< 20 años"}</Text>}
                {data.edad === 3 && <Text>{"< 30 años"}</Text>}
              </View>
            </View>
            <View style={{ display: "flex", justifyContent: "flex-end" }}>
              <Text style={styles.textTotal}>TOTAL: {total}</Text>
            </View>
            <View style={{ display: "flex", justifyContent: "flex-end" }}>
              <Text style={styles.textResult}>
                {total >= 10 && "FCS muy probable"}
                {total === 9 && "FCS improbable"}
                {total <= 8 && "FCS muy improbable"}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
    body: {
        display: 'flex', 
        flexDirection: 'column', 
        width: '100%', 
        backgroundColor: '#fff', 
        padding: '20px'
    },
    title: {
        fontSize: '16px', 
        marginVertical: '30px'
    },
    container: {
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        fontSize: '12px', 
        gap: '20px'
    },
    row: {
        width: '100%',
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        borderBottom: '1px solid gray'
    },
    textTotal: {
        fontWeight: 'bold', 
        textAlign: 'right',
    },
    textResult: {
        fontWeight: 'bold', 
        textAlign: 'right',
        fontSize: '16px'
    },
})

export default DocuPDF