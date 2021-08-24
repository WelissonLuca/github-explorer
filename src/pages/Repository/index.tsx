import React from 'react';
import { FiChevronRight, FiChevronsLeft } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './style';

interface RepositoryParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars.githubusercontent.com/u/62263143?v=4" alt="Welisson" />
          <div>
            <strong>Welisson/WelissonLuca</strong>
            <p>Readme para meu perfil</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>818</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>818</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>818</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/repositories/">
          <div>
            <strong>aaaaaaaa</strong>
            <p>aa</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
