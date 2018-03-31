import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import Box from '../components/Box';

const StyledWrapper = Box.extend`
  max-width: 900px;
  margin: 0 auto;
`;

storiesOf('Theme/GlobalStyles', module)
  .add('mix1', () => (
    <StyledWrapper>
      <h1>{faker.lorem.sentence()}</h1>
      <p>
        {faker.lorem.sentences()} {faker.lorem.sentences()}{' '}
        {faker.lorem.sentences()}
      </p>
      <h2>{faker.lorem.sentence()}</h2>
      <p>
        {faker.lorem.sentences()} {faker.lorem.sentences()}{' '}
        {faker.lorem.sentences()}
      </p>
      <h3>{faker.lorem.sentence()}</h3>
      <ul>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
      </ul>
      <h4>{faker.lorem.sentence()}</h4>
      <ol>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
        <li>{faker.lorem.sentence()}</li>
      </ol>
      <h5>{faker.lorem.sentence()}</h5>
      <dl>
        <dt>{faker.lorem.sentence()}</dt>
        <dd>{faker.lorem.sentence()}</dd>
        <dt>{faker.lorem.sentence()}</dt>
        <dd>{faker.lorem.sentence()}</dd>
        <dt>{faker.lorem.sentence()}</dt>
        <dd>{faker.lorem.sentence()}</dd>
      </dl>
    </StyledWrapper>
  ))
  .add('mix2', () => (
    <StyledWrapper>
      <h1>{faker.lorem.sentence()}</h1>
      <pre>
        <code>
          &lt;!-- html comment --&gt; &lt;ul&gt; &lt;li&gt;This is a code
          example&lt;/li&gt; &lt;li&gt;Just one list&lt;/li&gt; &lt;li&gt;Enough
          for now&lt;/li&gt; &lt;/ul&gt;
        </code>
      </pre>
      <h2>{faker.lorem.sentences()}</h2>
      <p>
        Debitis ut delectus <strong>quibusdam</strong> voluptatem nesciunt.
        Nesciunt ex accusantium <em>exercitationem consequatur</em>. In placeat
        a nesciunt facilis.
      </p>
      <p>
        Magnam cum voluptas.{' '}
        <a href="https://jmlweb.es">
          Qui mollitia cupiditate eaque dignissimos
        </a>. Consectetur quidem est quos ut.
      </p>
      <hr />
      <h3>{faker.lorem.sentence()}</h3>
      <table>
        <thead>
          <tr>
            <th>Header content 1</th>
            <th>Header content 2</th>
            <th>Header content 3</th>
            <th>Header content 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Body content 1</td>
            <td>Body content 2</td>
            <td>Body content 3</td>
            <td>Body content 4</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Footer content 1</td>
            <td>Footer content 2</td>
            <td>Footer content 3</td>
            <td>Footer content 4</td>
          </tr>
        </tfoot>
      </table>
      <p>
        {faker.lorem.sentences()} {faker.lorem.sentences()}{' '}
      </p>
      <table>
        <thead>
          <tr>
            <th>Header content 1</th>
            <th>Header content 2</th>
            <th>Header content 3</th>
            <th>Header content 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Body content 1</td>
            <td>Body content 2</td>
            <td>Body content 3</td>
            <td>Body content 4</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Footer content 1</td>
            <td>Footer content 2</td>
            <td>Footer content 3</td>
            <td>Footer content 4</td>
          </tr>
        </tfoot>
      </table>
      <p>
        {faker.lorem.sentences()} {faker.lorem.sentences()}{' '}
      </p>
      <p>{faker.lorem.sentences()}</p>
    </StyledWrapper>
  ));
