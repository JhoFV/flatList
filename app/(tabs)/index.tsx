import {useState} from 'react';
import {View, StyleSheet, FlatList, Text, TextInput, Pressable} from 'react-native';
import dadosdosfilmes from '../componentes/dadosdosfilmes';
import CardCategoria from '../componentes/cardcategoria';
 
const categorias = dadosdosfilmes().categorias;
 
export default function App() {
    const [busca, setBusca] = useState('');
    const [buscaAplicada, setBuscaAplicada] = useState('');
    const termoBusca = buscaAplicada.trim().toLocaleLowerCase();
    const categoriasExibidas = termoBusca
        ? categorias
            .map(categoria => ({
                ...categoria,
                filmes: categoria.filmes.filter(filme =>
                    filme.titulo.toLocaleLowerCase().includes(termoBusca)
                ),
            }))
            .filter(categoria => categoria.filmes.length > 0)
        : categorias;

    const pesquisar = () => setBuscaAplicada(busca);

    return (
        <View style={styles.corFundo}>
            <View style={styles.areaPesquisa}>
                <TextInput
                    value={busca}
                    onChangeText={setBusca}
                    onSubmitEditing={pesquisar}
                    placeholder="Pesquisar filmes"
                    placeholderTextColor="#999"
                    style={styles.caixaPesquisa}
                    autoCapitalize="none"
                    returnKeyType="search"
                />
                <Pressable style={styles.botaoBuscar} onPress={pesquisar}>
                    <Text style={styles.textoBotao}>Buscar</Text>
                </Pressable>
            </View>
            <FlatList
                        data={categoriasExibidas}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <CardCategoria item={item} />}
                        ListEmptyComponent={
                            <Text style={styles.semResultados}>Nenhum filme encontrado.</Text>
                        }
                    />
        </View>
    );
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
             areaPesquisa:{
                flexDirection:'row',
                alignItems:'center',
                margin:16,
                gap:8
             },
        caixaPesquisa:{
                 flex:1,
         paddingHorizontal:16,
         height:46,
         borderRadius:8,
         backgroundColor:'#242424',
         color:'white',
         fontSize:16
        },
        botaoBuscar:{
         height:46,
         paddingHorizontal:16,
         borderRadius:8,
         backgroundColor:'#007AFF',
         justifyContent:'center',
         alignItems:'center'
        },
        textoBotao:{
         color:'#fff',
         fontWeight:'600'
        },
        semResultados:{
         color:'#fff',
         textAlign:'center',
         marginTop:32,
         fontSize:16
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