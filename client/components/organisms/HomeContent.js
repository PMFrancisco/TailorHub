import {Card} from '../molecules/Card';
import {Footer} from '../organisms/Footer';

export const HomeContent = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <Card />
        <Footer />
    </div>
  );
};
