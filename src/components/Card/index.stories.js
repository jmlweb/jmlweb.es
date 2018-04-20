import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import Card from './';
import Box from '../Box';

storiesOf('Components/Card', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <Box display="flex" justifyContent="center">
      {story()}
    </Box>
  ))
  .add('main', () => (
    <Card
      title="Creación de sitios estáticos con Gatsby.js, Contentful y Netlify. Parte 1"
      to="/"
      permalink="/"
      image={
        boolean('image', true)
          ? 'https://images.ctfassets.net/fo9twyrwpveg/57y2X3HMoMGmc4SGQY6O6u/b007db78962ffd750416744b0dfc7655/GatsbyJSxContentful_Khaled.png'
          : undefined
      }
    >
      {boolean('children', true) && (
        <div>
          <p>
            En esta serie de artículos, basados a su vez{' '}
            <a
              href="https://www.gatsbyjs.org/blog/2017-12-06-gatsby-plus-contentful-plus-netlify/"
              title="Gatsby + Contentful + Netlify (and Algolia)"
            >
              en este otro
            </a>, contaré los pasos que he seguido para montar mi web personal,
            dotarla de contenido y alojarla. Todo esto, no solo de forma
            gratuita, si no también con un rendimiento excelente.
          </p>
          <h2>¿Qué son GatsbyJS, Netlify y Contentful?</h2>
          <ul>
            <li>
              <strong>GatsbyJS:</strong> Es un generador de contenido estático,
              basado en React y con soporte para multitud de formatos de entrada
              de contenido (API Wordpress, ficheros Markdown, Drupal, Medium,
              MongoDB y el que más nos interesa: <strong>Contentful</strong>).
              Las ventajas de un generador de contenido estático es que producen
              sitios livianos, debido a que almacenan todo el contenido en
              formato de texto plano, en los propios ficheros del sistema, y por
              lo tanto no necesitan base de datos.{' '}
            </li>
            <li>
              <strong>Contentful:</strong> Nos permite gestionar nuestro
              contenido dinámico de una forma sencilla, con un panel de
              administración en el que se pueden definir: tipos de contenido
              (tags, artículos, recetas...), los campos de cada tipo (campo
              título de tipo texto, longitud, etc) y por supuesto el contenido
              en sí. Lo más interesante es que proporciona una API muy sencilla
              de usar, a la que llamaremos desde nuestra aplicación, que
              obtendrá esta información, la procesará y la transformará en
              ficheros de texto plano para que puedan ser incorporados a la
              estructura de rutas.
            </li>
            <li>
              <strong>Netlify:</strong> Es una plataforma de integración
              continua que nos permite vincular nuestro repositorio, de tal
              forma que al actualizar la rama que definamos, el servidor realice
              el proceso de "build" y se actualice de forma automática. También
              ofrece "extras" como conexión SSL, etc. Lo más interesante de todo
              es que es gratuita para proyectos tanto personales como
              comerciales.
            </li>
          </ul>
        </div>
      )}
    </Card>
  ));
