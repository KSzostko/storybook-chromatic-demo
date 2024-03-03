import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PhotosList } from './components/PhotosLIst/PhotosList.tsx';
import './App.css';

export const queryClient = new QueryClient;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <PhotosList />
      </main>
    </QueryClientProvider>
  );
}

export default App
