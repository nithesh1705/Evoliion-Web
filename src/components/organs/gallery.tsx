import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import galleryImg1 from '../../assets/gallery/GalleryImg1.jpg';
import galleryImg2 from '../../assets/gallery/GalleryImg2.jpg';
import galleryImg3 from '../../assets/gallery/GalleryImg3.jpg';
import galleryImg4 from '../../assets/gallery/GalleryImg4.jpg';
import galleryImg5 from '../../assets/gallery/GalleryImg5.jpg';
import galleryImg6 from '../../assets/gallery/GalleryImg6.jpg';
import galleryImg7 from '../../assets/gallery/GalleryImg7.jpg';

const GallerySlider = () => {
    // const activate = (e: React.MouseEvent) => {
    //   const slider = document.querySelector('.slider');
    //   const items = document.querySelectorAll('.item');
  
    //   e.target && (e.target as HTMLElement).matches('.next') && slider?.append(items[0]);
    //   e.target && (e.target as HTMLElement).matches('.prev') && slider?.prepend(items[items.length - 1]);
    // };
    const activate = (direction: 'prev' | 'next') => {
        const slider = document.querySelector('.slider');
        const items = document.querySelectorAll('.item');
    
        if (slider && items.length > 0) {
          if (direction === 'next') {
            slider.append(items[0]);
          } else if (direction === 'prev') {
            slider.prepend(items[items.length - 1]);
          }
        }
      };

  return (
    <main>
      <style>{`

        .topPosition {
            height: 700px;
        }

        main {
          position: relative;
          width: 100%;
          height: 100%;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
        }

        .item {
          width: 200px;
          height: 300px;
          list-style-type: none;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          background-position: center;
          background-size: cover;
          border-radius: 20px;
          box-shadow: 0 20px 30px rgba(255, 255, 255, 0.3) inset;
          transition: transform 0.1s, left 0.75s, top 0.75s, width 0.75s, height 0.75s;
        }

        .item:nth-child(1),
        .item:nth-child(2) {
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          transform: none;
          border-radius: 0;
          box-shadow: none;
          opacity: 1;
        }

        .item:nth-child(3) {
          left: 70%;
        }

        .item:nth-child(n+4) {
          left: calc(50% + (n - 3) * 220px);
          opacity: 0;
        }

        .content {
          width: min(30vw, 400px);
          position: absolute;
          top: 50%;
          left: 3rem;
          transform: translateY(-50%);
          font: 400 0.85rem helvetica, sans-serif;
          color: white;
          text-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
          opacity: 0;
          display: none;
        }

        .content .title {
          font-family: "arial-black";
          text-transform: uppercase;
        }

        .content .description {
          line-height: 1.7;
          margin: 1rem 0 1.5rem;
          font-size: 0.8rem;
        }

        .content button {
          width: fit-content;
          background-color: rgba(0, 0, 0, 0.1);
          color: white;
          border: 2px solid white;
          border-radius: 0.25rem;
          padding: 0.75rem;
          cursor: pointer;
        }

        .item:nth-of-type(2) .content {
          display: block;
          animation: show 0.75s ease-in-out 0.3s forwards;
        }

        @keyframes show {
          0% {
            filter: blur(5px);
            transform: translateY(calc(-50% + 75px));
          }
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }

        .nav {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          user-select: none;
          display: flex;
        }

        .nav .btn {
          background-color: rgba(255, 255, 255, 0.5);
          color: rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          cursor: pointer;
        }

        .nav .btn:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }

        @media (width > 650px) and (width < 900px) {
          .content .title {
            font-size: 1rem;
          }
          .content .description {
            font-size: 0.7rem;
          }
          .content button {
            font-size: 0.7rem;
          }

          .item {
            width: 160px;
            height: 270px;

            &:nth-child(3) {
              left: 70%;
            }
            &:nth-child(n+4) {
              left: calc(50% + (n - 2) * 170px);
            }
          }
        }

        @media (width < 650px) {
          .content .title {
            font-size: 0.9rem;
          }
          .content .description {
            font-size: 0.65rem;
          }
          .content button {
            font-size: 0.7rem;
          }

          .item {
            width: 130px;
            height: 220px;

            &:nth-child(3) {
              left: 50%;
            }
            &:nth-child(n+4) {
              left: calc(50% + (n - 2) * 140px);
            }
          }
        }
      `}</style>
        <div className="topPosition"></div>
      <ul className='slider'>
      <li className='item' style={{ backgroundImage: `url(${galleryImg1})` }}>
          {/* <div className='content'>
            <h2 className='title'>"NISHANTH SUBRAMANIAN E"</h2>
            <p className='description'> 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.  </p>
          </div> */}
        </li>
        <li className='item' style={{ backgroundImage: `url(${galleryImg2})` }}>
          {/* <div className='content'>
            <h2 className='title'>"NITHESH M"</h2>
            <p className='description'> 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.  </p>
          </div> */}
        </li>
        <li className='item' style={{ backgroundImage: `url(${galleryImg3})` }}>
          {/* <div className='content'>
            <h2 className='title'>"MITHELESH R"</h2>
            <p className='description'> 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.  </p>
          </div> */}
        </li>
        <li className='item' style={{ backgroundImage: `url(${galleryImg4})` }}>
          {/* <div className='content'>
            <h2 className='title'>"JEEVA"</h2>
            <p className='description'>
              4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
          </div> */}
        </li>
        <li className='item' style={{ backgroundImage: `url(${galleryImg5})` }}>
          {/* <div className='content'>
            <h2 className='title'>"RAAGUL S"</h2>
            <p className='description'>
              5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
          </div> */}
        </li>
        <li className='item' style={{ backgroundImage: `url(${galleryImg6})` }}>
          {/* <div className='content'>
            <h2 className='title'>"HARIHARAN"</h2>
            <p className='description'> 6 Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim.  </p>
          </div> */}
        </li>
        <li className='item' style={{ backgroundImage: `url(${galleryImg7})` }}>
          {/* <div className='content'>
            <h2 className='title'>"NISHANTH SUBRAMANIAN E"</h2>
            <p className='description'> 7 Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim.  </p>
          </div> */}
        </li>
      </ul>
      <nav className='nav'>
        <ArrowCircleLeft
          size={20}
          className='btn prev w-8 h-8 border rounded-full border-white-500 flex items-center justify-center text-pink-500 hover:text-green-500 hover:border-blue-500'
          name="arrow-back-outline"
          onClick={() => activate('prev')}
        />
        <span style={{ margin: '0 0.5rem' }}></span>
        <ArrowCircleRight
          size={20}
          className='btn next w-8 h-8 border rounded-full border-white-500 flex items-center justify-center text-pink-500 hover:text-green-500 hover:border-blue-500'
          name="arrow-forward-outline"
          onClick={() => activate('next')}
        />
      </nav>
    </main>
  );
};

export default GallerySlider;
