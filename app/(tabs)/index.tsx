import { Background } from '@react-navigation/elements';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import Filme from './filme';

const categorias = [
  {
    id: "1",
    titulo: "Atual",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#1a1a2e", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg" },
      { id: "1b", titulo: "Duna 2", cor: "#16213e", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "1c", titulo: "Barbie", cor: "#0f3460", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "1d", titulo: "Poor Things", cor: "#533483", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "1e", titulo: "Saltburn", cor: "#2b2d42", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "2b", titulo: "Missão Impossível", cor: "#162447", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "2c", titulo: "Top Gun", cor: "#1f4068", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "2d", titulo: "Mad Max", cor: "#1b262c", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#2d132c", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "3b", titulo: "The Grand Budapest", cor: "#1c3334", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "3c", titulo: "Knives Out", cor: "#2c003e", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
    ],
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#0d0d0d", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "4b", titulo: "The Social Dilemma", cor: "#001011", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#002b36", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#200122", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "5b", titulo: "Midsommar", cor: "#190a05", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
      { id: "5c", titulo: "Get Out", cor: "#0a0a0a", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg"  },
    ],
  }
];


export default function App() {
    return (
        <View style={styles.corFundo}>
            <FlatList
                        data={categorias}
                        keyExtractor={item => item.id}
                        renderItem={renderCategoria}
                    />
        </View>
    );
}


function renderCategoria({item}:{item:any}){
  return(
    <View style={styles.categorias}>
    {item.titulo}
    <FlatList
      data={item.filmes}
      keyExtractor={filme=>filme.id}
      horizontal={true}
      contentContainerStyle={{paddingBottom:40}}
      renderItem={({item})=>(
          <Image
          source={{uri:item.imagem}}
          style={[styles.filme]}
          >             
          </Image>
          
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
