import React from "react";
import { Carousel } from "react-bootstrap";
import Marquee from "react-fast-marquee";

export default function Dasboard() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="https://www.bni.co.id/Portals/1/xNews/uploads/2022/12/16/Kv_web_banner_Kaliber_2022-01.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://www.bni.co.id/Portals/1/xNews/uploads/2022/12/16/Kv_web_banner_Kaliber_2022-01.jpg" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://www.bni.co.id/Portals/1/xNews/uploads/2022/12/16/Kv_web_banner_Kaliber_2022-01.jpg" alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <div>
              <img className="d-block w-100" src="https://awsimages.detik.net.id/api/wm/2020/07/04/hut-bni-3_169.jpeg?wid=54&w=650&v=1&t=jpeg" alt="First slide" />
            </div>
            <div>
              <img className="d-block w-100" src="https://ik.imagekit.io/tvlk/image/imageResource/2023/01/18/1674030449739-4e70295db864fd80bb3ef3670d1fcdd2.jpeg?tr=q-75" alt="First slide" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img className="d-block w-100 h-100" src="https://pbs.twimg.com/media/Eo_esTJU0AA2Nmi.jpg:large" alt="First slide" />
            </div>
            <div style={{ height: "79px" }}>
              <img src="https://www.bni.co.id/Portals/1/DNNGalleryPro/uploads/2022/6/20/SushiTei-Grup.png" width={200} />
              <img src="https://www.bni.co.id/Portals/1/DNNGalleryPro/uploads/2022/6/20/Traveloka.png" width={200} />
              <img src="https://www.bni.co.id/Portals/1/DNNGalleryPro/uploads/2017/5/10/cr-pdam.jpg" width={200} />
              <img src="https://www.bni.co.id/Portals/1/DNNGalleryPro/uploads/2017/5/22/CR_telkomsel.png" width={180} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
