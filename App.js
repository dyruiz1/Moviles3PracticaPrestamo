// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
// import { TextInput } from 'react-native-web';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text> Simulador de Credito</Text>
      </View>

      <View style={styles.columnContainer}>

        <View style={styles.columna}>
          <View style={styles.row}>
            <Text>Nombre</Text>
            <TextInput  style={{borderBottom:'solid 1px',width:200}} placeholder='' />
          </View>
          <View style={styles.row}>
            <Text>Monto prestamo</Text>
            <TextInput style={{borderBottom:'solid 1px',width:200}} placeholder='' />
          </View>
          <View style={styles.row}>
            <Text>Numero cuotas</Text>
            <TextInput style={{borderBottom:'solid 1px',width:200}} placeholder='' />
          </View>
          <View style={styles.row}>
            <Text>valor cuota</Text>
            <TextInput style={{borderBottom:'solid 1px',width:200}} placeholder='' />
          </View>
        </View>
          
        <View style={styles.columna}>
          <View style={styles.row}>
            <Text>Fecha</Text>
            <TextInput style={{borderBottom:'solid 1px',width:200}} placeholder='' />
          </View>
          <View style={styles.row}>
            <Text> Tipo prestamo</Text>
            <TextInput style={{borderBottom:'solid 1px',width:200}} placeholder='' />
          </View>
          <View style={styles.row}>
            <Text> Total Deuda</Text>
            <TextInput style={{borderBottom:'solid 1px',width:200}} placeholder='' />
          </View>
        </View>

        <View style={[styles.columna, styles.columnaBotones]}>
          <TouchableOpacity style={[styles.boton, {backgroundColor: "gray"}]}>
            <Text style={{color:'white', fontWeight:'bold', borderRadius:'15'}}>Calcular/guardar</Text>       
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.boton, {backgroundColor: "blue"}]}>
            <Text style={{color:'white', fontWeight:'bold', borderRadius:'15'}}>Buscar</Text>       
          </TouchableOpacity>

          <TouchableOpacity style={[styles.boton, {backgroundColor: "black"}]}>
            <Text style={{color:'white', fontWeight:'bold', borderRadius:'15'}}>Limpiar</Text>       
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: '20px',
    flex: 1,
  },
  header: {
    backgroundColor: '#2196F3',
    textAlign: 'center'
  },
  columnContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: '40px',
    backgroundColor: '#ccc',
    gap: '30px',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  columna: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnaBotones:{
    justifyContent: 'center',
  },
  boton: {
    padding: 10,
    borderRadius:10,
    marginLeft:10,
    marginTop:20
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    marginTop: '30px',
  },
  inputStyle: {
    // borderWidth:1,
    padding:5,
    textAlign:"center",
    justifyContent: 'space-between',
    
           
  }
});

