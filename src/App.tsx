import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
}

export default App;

export const serverClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
