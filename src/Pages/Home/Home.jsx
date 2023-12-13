import React from 'react';
import './home.css';
import { CategoryBarData, CarouselData, BestOf} from '../../Data';
import CategoryBar from '../../Components/CategoryBar/CategoryBar';
import BannerCarousel from '../../Components/BannerCarousel/BannerCarousel';
import ProductCarousel from '../../Components/ProductCaroucel/ProductCarousel';

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home-CategoryContainer'>
        <div className='Home-CategoryBar'>
          {
            CategoryBarData.map((item, index ) => (
              <CategoryBar key={index}  Imgsrc={item.imageSrc} CategoryName={item.category} />
            ))
          }
        </div>
      </div>
      <div className="Home-Container">
        <div className="Home-Carousel">
        <BannerCarousel data={CarouselData} />
        </div>
        <div className='Home-ProductCarousel'>
        <ProductCarousel BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Beauty,Food,Toys"
            Data={BestOf.Electronics} />

           <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Beauty,Food,Toys"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Winter Essentials"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Wedding & Gifting Specials"
            Data={BestOf.Electronics}
          />
        </div>
      </div>  
    </div>
  )
}

export default Home;
