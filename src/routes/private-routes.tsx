import { Navigate, Route, Routes } from 'react-router-dom';

import { Character } from 'pages/character/Character';
import { FightPlay } from 'pages/fight-play/FightPlay';
import Home from 'pages/home/home';
import { MainMenu } from 'pages/mainMenu/MainMenu';
import Refer from 'pages/reward/refer';
import { StartingFight } from 'pages/starting-fight/StartingFight';

function PrivateRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainMenu />} />
      <Route path='character' element={<Character />} />
      <Route path='starting-fight' element={<StartingFight />} />
      <Route path='fight' element={<FightPlay />} />
      <Route path='reward' element={<Refer />} />
      <Route path='/home' element={<Home />} />

      <Route path='*' element={<Navigate to='/error/404' />} />
    </Routes>
  );
}

export { PrivateRoutes };
