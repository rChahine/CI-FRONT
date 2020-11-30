import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import axios from 'axios';
import UsersDetails from '../src/components/UsersDetails';
import UsersResume from '../src/components/UsersResume';

const server = setupServer(
  rest.get('/mockserver', (req, res, ctx) => {
    return res(ctx.json([]));
  }),
  rest.get('/notEmptyServer', (req, res, ctx) => {
    return res(
      ctx.json([
        [
          {
            server: '127.0.0.1:2345',
            users: [
              {
                account: {
                  id: 42,
                  username: 'Bartlett',
                },
                currentStatus: 'ACTIVE',
              },
            ],
          },
        ],
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('check empty data UsersDetails', async () => {
  axios
    .get('/mockserver')
    .then(async (data) => {
      render(<UsersDetails data={data} />);
      await waitFor(() => screen.getByRole('tdody'));
      expect(screen.getByRole('tdody')).toHaveTextContent('');
    })
    .catch(async (_) => {
      render(<UsersDetails data={[]} />);
      await waitFor(() => screen.getByRole('tdody'));
      expect(screen.getByRole('tdody')).toHaveTextContent('');
    });
});

test('check NOT empty data UsersDetails', async () => {
  axios
    .get('/notEmptyServer')
    .then(async (data) => {
      render(<UsersDetails data={data} />);
      await waitFor(() => screen.getByRole('tdody'));
      expect(screen.getByRole('tdody')).toHaveTextContent(`
        <tr>
        <td>127.0.0.1:2345</td>
        <td>42</td>
        <td>Bartlett</td>
        <td>ACTIVE</td>
        </tr>
      `);
    })
    .catch(async (_) => {
      render(<UsersDetails data={[]} />);
      await waitFor(() => screen.getByRole('tdody'));
      expect(screen.getByRole('tdody')).toHaveTextContent('');
    });
});

test('check NOT empty data ChatRoomResume', async () => {
  axios
    .get('/notEmptyServer')
    .then(async (data) => {
      render(<UsersResume data={data} />);
      await waitFor(() => screen.getByRole('card-text'));
      expect(screen.getByRole('.card-text')).toHaveTextContent(`
            There is 1 actives users.
            <br />
            <small>On servers : </small>          
            <p>127.0.0.1:2345</p>
        `);
    })
    .catch(async (_) => {
      render(<UsersResume data={[]} />);
      await waitFor(() => screen.getByRole('card-text'));
      expect(screen.getByRole('.card-text')).toHaveTextContent(`
            There is 0 actives users.
            <br />
            <small>On servers : </small>          
        `);
    });
});

test('check empty data ChatRoomResume', async () => {
  axios
    .get('/mockserver')
    .then(async (data) => {
      render(<UsersResume data={data} />);
      await waitFor(() => screen.getByRole('card-text'));
      expect(screen.getByRole('.card-text')).toHaveTextContent(`
          There is 0 actives users.
          <br />
          <small>On servers : </small>       
        `);
    })
    .catch(async (_) => {
      render(<UsersResume data={[]} />);
      await waitFor(() => screen.getByRole('card-text'));
      expect(screen.getByRole('.card-text')).toHaveTextContent(`
            There is 0 actives users.
            <br />
            <small>On servers : </small>          
        `);
    });
});
