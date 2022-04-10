import CardPokemon from "./CardPokemon"

const iterador = (props1) =>{
    console.log(props1)

    function iterar (props1){
        for(let i = 0; i>=0 && i<150 ; i++ ){
            let poke = props1[1];
            <CardPokemon pokemon1 = {[poke]}/>
        }
    }
    return (
        <>
        
        </>
    )
}
export default iterador;