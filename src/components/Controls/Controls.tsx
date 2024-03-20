export default function Controls() {
  const handleStart = () => {
    console.log('clicked');
  };

  return (
    <section className="flex justify-center my-4">
      <button onClick={handleStart} className="bg-red-600 rounded-xl py-2 px-4">
        New Game
      </button>
    </section>
  );
}
