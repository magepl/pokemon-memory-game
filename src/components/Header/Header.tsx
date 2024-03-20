import logo from '../../assets/pokemon-logo.jpg';

export default function Header() {
  return (
    <>
      <div className="flex justify-center h-14">
        <img src={logo} alt="" className="h-14 place-content-center" />
      </div>
    </>
  );
}
