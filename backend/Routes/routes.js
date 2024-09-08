import express from 'express';

import { assignPokemon, createBattle, getBattleById, getPokemonById, getPokemonName, joinBattle, makeMove, pokemonsByPlayerId, selectPokemons, sendTransaction, getBattleIdByStatus, forfeitBattle } from '../Controllers/backController.js';
import { signProtocol } from '../Controllers/signController.js';

const router = express.Router();

router.post('/create-battle', createBattle);
router.post('/assign-pokemon', assignPokemon);
router.post('/join-battle', joinBattle);
router.post('/make-move', makeMove);
router.post('/select-pokemons', selectPokemons);
router.post('/forfeit-battle', forfeitBattle);
router.get('/battle/:id', getBattleById);
router.get('/user/:id/pokemons', pokemonsByPlayerId);
router.get('/send', sendTransaction);
router.get('/pokemon/:id', getPokemonById);
router.get('/pokemon/:id/name', getPokemonName);
router.get('/get/:status', getBattleIdByStatus);
router.post('/schema', signProtocol);

export default router;