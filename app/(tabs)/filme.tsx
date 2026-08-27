import {View, StyleSheet, Image, Text} from 'react-native';
const filme = {
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlZg-SvVoMttL3uiP9NEehH8GbdPuhR88o842o2ynPg&s=10',
}

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: filme.imagem }}
                style={styles.filme}
                resizeMode="cover"/>
            <View style={styles.titulo}>
                <Text style={styles.tituloTexto}>Oppenheimer</Text>
            </View>
            <View style={styles.descricao}>
                <Text style={styles.descricaoTexto}>Lançado em 2023 e dirigido por Christopher Nolan, Oppenheimer é uma grandiosa cinebiografia dramática que acompanha a trajetória de J. Robert Oppenheimer, o físico teórico conhecido como o "pai da bomba atômica". O filme explora sua juventude e seus estudos na Europa, seu papel fundamental na introdução da física quântica nos Estados Unidos e a liderança do Projeto Manhattan — a instalação secreta em Los Alamos onde ele reuniu os maiores cientistas do mundo durante a Segunda Guerra Mundial para desenvolver a primeira arma nuclear antes da Alemanha nazista. A narrativa equilibra a tensão científica do histórico teste Trinity e o peso moral e a culpa gerados pelos devastadores bombardeios de Hiroshima e Nagasaki com os conflitos políticos do pós-guerra. A história é estruturada em torno de dois grandes julgamentos: a audiência de segurança de 1954, na qual Oppenheimer teve sua autorização cassada devido a antigas ligações com o comunismo durante o período do macarthismo, e a audiência de Lewis Strauss no Senado em 1959. Vencedor de 7 prêmios Oscar, incluindo Melhor Filme, Melhor Diretor para Christopher Nolan, Melhor Ator para Cillian Murphy e Melhor Ator Coadjuvante para Robert Downey Jr., o longa destaca-se por sua narrativa não linear, alternância entre cenas coloridas e em preto e branco, e uma imersiva trilha sonora composta por Ludwig Göransson.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#000",
    },
    filme:{
        width:'100%',
        height:400,
    },
    descricao:{
        margin: 10,
    },
    titulo:{
        margin: 10
    },
    tituloTexto:{
        color:'#fff',
        fontSize: 25,
    },
    descricaoTexto:{
        color:'#fff',
    },
});