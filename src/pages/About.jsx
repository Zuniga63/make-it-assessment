import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/pages/About.scss';

export default function About() {
  const [user, setUser] = useState(null);
  const [userName] = useState('Zuniga63');

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = `https://api.github.com/users/${userName}`;
        const res = await axios.get(url);
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, [userName]);

  if (!user) return null;

  return (
    <div className="about">
      <div className="about__personal-info">
        <figure className="about__avatar">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="about__avatar__img"
          />
        </figure>

        <div className="about__container">
          <header className="about__header">
            <h1 className="about__title"> {user.name} </h1>
            <p className="about__subtitle-2">Web Developer</p>
          </header>

          <p className="about__contact">
            GitHub:{' '}
            <a
              href={`http://github.com/${user.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              {user.login}{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10px"
                height="10px"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </p>

          <div className="about__contact">
            Repositorios:{' '}
            <a
              href="https://github.com/Zuniga63?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              {user.public_repos}{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10px"
                height="10px"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div className="about__contact">
            Email:{' '}
            <a
              href="mailto:andres.zuniga.063@gmail.com"
              className="about__link"
            >
              andres.zuniga.063@gmail.com
            </a>
          </div>
        </div>

        <div className="about__container">
          <h2 className="about__subtitle">Descripción</h2>
          <p className="about__text">
            Viviendo entre la ciudad de Bucaramanga y Valledupar me apasiona la
            programación desde que me topé con ella en la universidad. En mi
            tiempo libre me gusta leer un buen libro, hacer deporte, sobre todo
            natación y pasar el rato con mis personas favoritas.
          </p>

          <p className="about__text">
            Las tres cosas que he aprendido en mi paso por Make it Real hasta el
            momento es poder identificar que además de las habilidades técnicas,
            son necesarias otras habilidades más humanas, como el trabajo en
            equipo, el sentido de responsabilidad y adaptabilidad. He aprendido
            nuevas técnicas para programar y afrontar problemas relacionados con
            el desarrollo y finalmente he aprendido a adaptarme a un nuevo
            esquema de trabajo.
          </p>
        </div>
      </div>
    </div>
  );
}
