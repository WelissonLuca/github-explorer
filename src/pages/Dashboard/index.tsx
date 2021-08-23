import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Form, Repositories, Title } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/62263143?v=4" alt="Welisson" />

          <div>
            <strong>goBarber - api</strong>
            <p>Gostack repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/62263143?v=4" alt="Welisson" />

          <div>
            <strong>goBarber - api</strong>
            <p>Gostack repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/62263143?v=4" alt="Welisson" />

          <div>
            <strong>goBarber - api</strong>
            <p>Gostack repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
