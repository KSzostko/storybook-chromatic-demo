import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PhotosList } from './components/PhotosLIst/PhotosList.tsx';
import './App.css';

const client = new QueryClient;

function App() {
  return (
    <QueryClientProvider client={client}>
      <main>
        <PhotosList />
      </main>
    </QueryClientProvider>
  );
}

export default App
