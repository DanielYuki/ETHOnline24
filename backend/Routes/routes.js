import express from 'express';

import { assignPokemon, createBattle, getBattleById, getBattleIdByStatus, getPokemonById, getPokemonName, joinBattle, makeMove, pokemonsByPlayerId, selectPokemons, sendTransaction } from '../Controllers/backController.js';
import { registerConverseWallet, retrieveFidFromConverseWallet } from '../Controllers/subscribeController.js';

const router = express.Router();

router.post('/create-battle', createBattle);
router.post('/assign-pokemon', assignPokemon);
router.post('/join-battle', joinBattle);
router.post('/make-move', makeMove);
router.post('/select-pokemons', selectPokemons);
router.post('/register-converse-user', registerConverseWallet);
router.get('/converse-user/:wallet', retrieveFidFromConverseWallet);
router.get('/battle/:id', getBattleById);
router.get('/user/:id/pokemons', pokemonsByPlayerId);
router.get('/send', sendTransaction);
router.get('/pokemon/:id', getPokemonById);
router.get('/pokemon/:id/name', getPokemonName);
router.get('/get/:status', getBattleIdByStatus);

export default router;