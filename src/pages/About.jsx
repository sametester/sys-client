import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import NavbarComponent from '../components/layouts/NavbarComponent';
import styles from '../Page.module.css';

function About() {
  const { role } = useContext(AuthContext);

  return (
    <>
      {role === 'guest' ? <NavbarComponent /> : <></>}
      <div className="mt-5 text-center">
        <h1>SYS</h1>
        <h3>See You Soon</h3>
      </div>
      <div className="d-flex justify-content-evenly mt-5">
        <div className={styles['flip-card']}>
          <div className={styles['flip-card-inner']}>
            <div className={styles['flip-card-front']}>
              <img
                src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643800979/See_You_Soon_fymgbr.jpg"
                alt="logo"
                width="400px"
                height="600px"
              />
            </div>
            <div className={styles['flip-card-back']}>
              <h1 className="p-5 ">SYS : Content Creator Community</h1>
              <p>
                นำเสนอเนื้อหาที่เกี่ยวข้องกับวงการอาหาร, บนสื่อ สังคมออนไลน์ต่าง
                ๆ ที่มุ่งเน้น คัดสรร ร้านอาหารที่ดี มีคุณภาพ มารีวิว ให้กับ
                ผู้ใช้บริการได้ไปลองใช้บริการ
              </p>
            </div>
          </div>
        </div>

        <div className={styles['flip-card']}>
          <div className={styles['flip-card-inner']}>
            <div className={styles['flip-card-front']}>
              <img
                src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643800979/See_You_Soon_fymgbr.jpg"
                alt="logo"
                width="400px"
                height="600px"
              />
            </div>
            <div className={styles['flip-card-back']}>
              <h1 className="p-5 ">Helpful tips and techniques</h1>
              <p>
                I love learning any skill that helps me get the job done faster,
                easier or with a better result. That’s why I created a page of
                nothing but useful tips and techniques.
              </p>
            </div>
          </div>
        </div>

        <div className={styles['flip-card']}>
          <div className={styles['flip-card-inner']}>
            <div className={styles['flip-card-front']}>
              <img
                src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1643800979/See_You_Soon_fymgbr.jpg"
                alt="logo"
                width="400px"
                height="600px"
              />
            </div>
            <div className={styles['flip-card-back']}>
              <h1 className="p-5 ">The Mission</h1>
              <p>
                We’re hungry storytellers on a mission to hunt down and document
                the most unique cuisine from around the world, encouraging
                empathy, understanding and appreciation of different cultures
                through their food.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
