import pokeball from '../../assets/Poke Ball.webp';

export default function Card() {
  return (
    <div className="border-2 flex rounded-xl h-40 w-32 transition ease-linear delay-150 hover:h-44 hover:w-36">
      <img
        className="object-contain content-center justify-center"
        src={pokeball}
        alt="pokeball"
      />
    </div>
  );
}
