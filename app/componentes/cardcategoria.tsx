import {View, StyleSheet, FlatList, Image, Pressable, Text, Modal} from 'react-native';
import {useRouter} from 'expo-router';
import {useState} from 'react';
import dadosdosfilmes from '../componentes/dadosdosfilmes';

type Categoria = ReturnType<typeof dadosdosfilmes>['categorias'][number];

export default function CardCategoria({item}: {item: Categoria}) {
  const router = useRouter();
  const [filmeSelecionado, setFilmeSelecionado] = useState<{id: string; titulo: string; imagem: string} | null>(null);
 
    return (
        <View style={styles.corFundo}>
            <View>
              {renderCategoria(item, setFilmeSelecionado)}
            </View>
            <Modal
              visible={filmeSelecionado !== null}
              transparent
              animationType="fade"
              onRequestClose={() => setFilmeSelecionado(null)}
            >
              <View style={styles.modalFundo}>
                <View style={styles.modalCaixa}>
                  <Text style={styles.modalTitulo}>{filmeSelecionado?.titulo}</Text>
                  <Pressable
                    style={styles.botaoVer}
                    onPress={() => {
                      setFilmeSelecionado(null);
                      router.push({
                        pathname: '/componentes/filmes/[id]',
                        params: {
                          id: filmeSelecionado?.id ?? '',
                          titulo: filmeSelecionado?.titulo ?? '',
                          imagem: filmeSelecionado?.imagem ?? '',
                        },
                      });
                    }}
                  >
                    <Text style={styles.botaoTexto}>Ver filme</Text>
                  </Pressable>
                  <Pressable
                    style={styles.botaoFechar}
                    onPress={() => setFilmeSelecionado(null)}
                  >
                    <Text style={styles.botaoTexto}>Fechar</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
        </View>
    );
}
 
function renderCategoria(item:any, onFilmePress: (filme: {id: string; titulo: string; imagem: string}) => void){
  return(
    <View style={styles.categorias}>
    <Text style={styles.tituloCategoria}>{item.titulo}</Text>
    <FlatList
      data={item.filmes}
      keyExtractor={filme=>filme.id}
      horizontal={true}
      contentContainerStyle={{paddingBottom:40}}
      renderItem={({item})=>(
          <Pressable onPress={() => onFilmePress(item)}>
            <Image
            source={{uri:item.imagem}}
            style={styles.filme}
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
      },
      tituloCategoria:{
       color:'white',
       fontSize:18,
       fontWeight:'600',
       marginBottom:8
      },
      modalFundo:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'rgba(0,0,0,0.65)'
      },
      modalCaixa:{
       width:280,
       padding:24,
       borderRadius:8,
       backgroundColor:'#242424',
       alignItems:'center'
      },
      modalTitulo:{
       color:'white',
       fontSize:20,
       marginBottom:20
      },
      botaoVer:{
       width:'100%',
       padding:12,
       borderRadius:6,
       backgroundColor:'#007AFF',
       alignItems:'center',
       marginBottom:10
      },
      botaoFechar:{
       width:'100%',
       padding:12,
       borderRadius:6,
       backgroundColor:'#555',
       alignItems:'center'
      },
      botaoTexto:{
       color:'white',
       fontWeight:'600'
      }
});