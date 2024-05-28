import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/pokeInfo.css';

const PokeInfo = () => {

    const params = useParams();

    const [pokemon, getPokemon] = useFetch();

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
        getPokemon(url);
    }, []);


    console.log(pokemon);

    const obj = {
        width: '50%',
    }
    return (
        <>
            <header className='pokeinfo__header'>
                <img src="../../assets/pokemon_logo.png" alt="" />
            </header>
            <section className='pokeinfo'>
                <div className={`pokeinfo__container pokeinfo-${pokemon?.types[0].type.name}`}>
                    <div className={`decoration decoration-${pokemon?.types[0].type.name}`}></div>
                    <figure className='pokeinfo__fig'>
                        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
                    </figure>
                    <div className='pokeinfo__description'>
                        <span className='pokeinfo__number'># {pokemon?.id}</span>
                        <h2 className={`pokename pokename-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
                        <ul className='pokeinfo__data'>
                            <li><span className='data__title'>weight: </span><span className='data__content'>{pokemon?.weight}</span></li>
                            <li><span className='data__title'>height: </span><span className='data__content'>{pokemon?.height}</span></li>
                        </ul>
                        <div className='pokeinfo__content'>
                            <article className='content__type'>
                                <h3 className='pokeinfo__title'>type</h3>
                                <ul>
                                    {
                                        pokemon?.types.map((type, index) => (
                                            <li className={`type type--${pokemon?.types[index].type.name}`} key={type.type.url}>{type.type.name}</li>
                                        ))
                                    }
                                </ul>
                            </article>
                            <article className='content__type'>
                                <h3 className='pokeinfo__title'>skills</h3>
                                <ul>
                                    {
                                        pokemon?.abilities.map(skill => (
                                            <li className='pokeinfo__skill' key={skill.ability.url}>{skill.ability.name}</li>
                                        ))
                                    }
                                </ul>
                            </article>
                        </div>
                        <h2 className='pokeinfo__title'>Stats</h2>
                        <ul className='pokeinfo__stats'>
                            {
                                pokemon?.stats.map(stat => (
                                    <li key={stat.stat.url}><span>{stat.stat.name}</span><span>{stat.base_stat}/150</span><div className='stats__bar'><div style={{ width: `${(stat.base_stat / 150) * 100}%` }} className={`stats__prog decoration-${pokemon?.types[0].type.name}`}></div></div></li>
                                ))
                            }
                        </ul>
                    <div  className='pokeinfo__container2'>
                        <h2 className='pokeinfo__title'>Movements</h2>
                        <ul className='pokeinfo__moves'>
                            {
                                pokemon?.moves.map(move => (
                                    <li key={move.move.url}>{move.move.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            </>
    )
}

export default PokeInfo;
