import {View, StyleSheet, Image, Text} from 'react-native';
import {Stack, useLocalSearchParams} from 'expo-router';

const filme = {
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlZg-SvVoMttL3uiP9NEehH8GbdPuhR88o842o2ynPg&s=10',
}

const descricoes: Record<string, string> = {
    Oppenheimer: 'A cinebiografia de J. Robert Oppenheimer acompanha sua liderança no Projeto Manhattan e os conflitos morais e políticos após a criação da bomba atômica.',
    'Duna 2': 'Paul Atreides une-se a Chani e aos Fremen em uma jornada de vingança e destino pelo deserto de Arrakis.',
    Barbie: 'Barbie deixa seu mundo perfeito e descobre a realidade enquanto questiona sua identidade e seu lugar no mundo.',
    'Poor Things': 'Uma jovem reanimada por um cientista embarca em uma viagem de descoberta, liberdade e experiências pelo mundo.',
    Saltburn: 'Um estudante fascinado por um colega rico passa um verão na propriedade de sua família, onde desejos e segredos vêm à tona.',
    'John Wick 4': 'John Wick enfrenta novos inimigos e uma organização poderosa em sua busca definitiva por liberdade.',
    'Missão Impossível': 'Ethan Hunt e sua equipe correm contra o tempo para impedir que uma ameaça global caia nas mãos erradas.',
    'Top Gun': 'Um piloto talentoso retorna à escola Top Gun para treinar uma nova geração e enfrentar uma missão arriscada.',
    'Mad Max': 'Em um futuro devastado, sobreviventes atravessam um deserto hostil em busca de segurança e esperança.',
    Superbad: 'Dois amigos tentam aproveitar a última grande festa do colégio antes de seguirem caminhos diferentes.',
    'The Grand Budapest': 'Um concierge lendário e seu protegido vivem aventuras extravagantes em um hotel europeu durante a guerra.',
    'Knives Out': 'Um detetive investiga a morte de um escritor e descobre que todos os membros da família escondem algo.',
    'Free Solo': 'O escalador Alex Honnold prepara-se para realizar uma escalada solo inédita em uma das maiores paredes do mundo.',
    'The Social Dilemma': 'Especialistas revelam como as redes sociais influenciam o comportamento, a privacidade e a sociedade.',
    'My Octopus Teacher': 'Um cineasta cria uma relação especial com um polvo e aprende novas formas de conexão com a natureza.',
    Hereditary: 'Após uma perda familiar, uma família começa a descobrir segredos perturbadores ligados ao seu passado.',
    Midsommar: 'Um grupo de amigos viaja para um festival isolado e encontra rituais cada vez mais assustadores.',
    'Get Out': 'Um jovem visita a família da namorada e percebe que há algo profundamente estranho por trás da recepção amigável.',
};

export default function FilmePorId() {
    const {id, titulo, imagem} = useLocalSearchParams<{id: string; titulo?: string; imagem?: string}>();
    const nomeFilme = titulo || id || 'Oppenheimer';
    const imagemFilme = imagem || filme.imagem;

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: '',
                    headerStyle: {backgroundColor: '#000'},
                    headerTintColor: '#fff',
                    headerBackButtonDisplayMode: 'minimal',
                }}
            />
            <View style={styles.container}>
                <Image
                    source={{ uri: imagemFilme }}
                    style={styles.filme}
                    resizeMode="cover"/>
                <View style={styles.titulo}>
                    <Text style={styles.tituloTexto}>{nomeFilme}</Text>
                </View>
                <View style={styles.descricao}>
                    <Text style={styles.descricaoTexto}>{descricoes[nomeFilme] || 'Conheça a história e os personagens deste filme.'}</Text>
                </View>
            </View>
        </>
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