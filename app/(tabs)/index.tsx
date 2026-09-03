import {View, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import {useRouter} from 'expo-router';
import dadosdosfilmes from '../componentes/dadosdosfilmes';

const categorias = dadosdosfilmes().categorias;
export default function App() {
  const router = useRouter();
 
    return (
        <View style={styles.corFundo}>
            <FlatList
                        data={categorias}
                        keyExtractor={item => item.id}
            renderItem={({item}) => renderCategoria(item, () => router.push('/filmes'))}
                    />
        </View>
    );
}
 
function renderCategoria(item:any, onFilmePress: () => void){
  return(
    <View style={styles.categorias}>
    {item.titulo}
    <FlatList
      data={item.filmes}
      keyExtractor={filme=>filme.id}
      horizontal={true}
      contentContainerStyle={{paddingBottom:40}}
      renderItem={({item})=>(
          <Pressable onPress={onFilmePress}>
            <Image
            source={{uri:item.imagem}}
            style={[styles.filme]}
            />
          </Pressable>
        )}
      > </FlatList>
    
    </View>
  )
}
 
const styles = StyleSheet.create({
        categorias:{
        color:"white",
        backgroundColor: '#000000'
       },
       corFundo:{
        flex:1,
        backgroundColor:"black"
       },
       filme:{
        width:100,
        height:140,
        borderRadius:8,
        margin: 5,        
        justifyContent:'flex-end',
        padding:8
       },
       filmeTitulo:{
        color:'white',
        fontSize:12
       }
});