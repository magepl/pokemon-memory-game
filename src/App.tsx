import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Controls from './components/Controls/Controls';

function App() {
  return (
    <>
      <Header />
      <Controls />
      <main className="flex justify-center">
        <section className="grid gap-4 grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
}

export default App;
