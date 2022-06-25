import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import Image from 'next/image'
import 'swiper/css/autoplay';


// Import Swiper styles
import 'swiper/css';

function ImageCarousel() {
  return (
    <div className="h-[800px]  flex  w-full justify-end">
  <Swiper
        modules={[ Pagination,  A11y, Autoplay]}
      className=""
      spaceBetween={50}
      slidesPerView={1}
     
      autoplay={{delay: 5000, disableOnInteraction: false}}
      pagination={{ clickable: true ,enabled: true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <Image src="https://lh3.googleusercontent.com/fife/AAWUweXym8emIEI7Id6HMCW0uevafL1dekVD9nHlkchnp0ILGhr_seHqtvKwdbMFBUwpJJXWT1h7uPZlWjE6KHgPmvTSgpzNGeEXUoY_pLyMvtjpVXnSLu6yRF1OlHLf-dJ5Gzf947u5FJeOc-tmIEMWp8XcodmPK8tC5ZHw7Tl41f3FsGMxM_lJiAWsRxc8cgi8pobeoxvdb5nCcqJK7zVrqxp18BFKmJZ-PozdZ8LkdLU-1k8XUukheL9cM2KfQL1Twnq7hAMkOqlvwZG-OJHhT4XdLoMmalaVK4Oy6oMkatWulXvJ1vG7pUniK2ZyUjXbvs0GvgEtv_eq181YgDBUptRsCbTBeV5nK1lxqJVY-6tVAUBJP6UiKZkFXApXQI8ho2bMnOMw5kQSGeBYr5Th0ty_OYhrAqLi5C1tBZzeiB4AHFy8oe0tol8m_8rROdRFxgXK8fEIKei9Zl1uVPJYpl39JRBRjORXeblSTw1oOtI6QiGYtwFzOp41ld9DpvadGX6gT3F-942dVARphteCUoBZ2hPedoOCR7gRIlhUwkYnIRJi8TbUmMpueS-t-ratYOeFFe_lG8ujkeCpEGLNJlR_4ke4jnXwAIUmy5F2EAWccwPot3nlNQ3U8YGKidwFmkV8mc-yK8f9GLDSfI1J3uj1zoqsJuvG2iOSGJPRdoCu8yk_IvRHOkY7JpFdT2Jtz_jeO3CB43XANln10ws72-0_IDbKgO6vsUncGtO5-Q0muNX8SEbbJZH1KOEGFqN93MEpuPMngw8B-OrTVd_pWP4HK1GUcFknmNtEBL1zwlpTy-Q_3X0xHPMMtmgRw7krLAUzITok0eH8tdyiiOAZCIvOVfCvJKhgfwno8-82khGezzF0B1pR-a-6xHWbwGrP4DxZzwZBU4tCJEmwo_v4Ekkp_1VmRUYYJePqPXE338i4YqXbiPgaMQquRM9A8F4RUBGDVNvVNbcsuqAGAeIXW9HTigGOZWBZVwJh35SjDMwc_f8iaLMM2KEuPeorWk1N3owGr_Zb8GwSz5KC8uNI1GgTT_4II4Z4OywxYlKUMeu_Z0WTD2QORhxGYGaFRG6smVFTJRCPkKFNKSUepM0WmzCti2JUo3_LnrE8sgOocrE3nSMHnY3Q2pfXzoH8do9XR-XOOZ63np2hbUShZ1NFYXePqXWSu-Vv7FlX4onikF4it31JFqxnw9NFHYE5IJW8QpWF5A3Z7xNOly6ybdcjZqsMQczb3jTJziXlPpkeidiyRmvOtsrN2FoHEztUnMdcPMI-drh8uw=w1920-h1080" layout="fill" objectFit="contain"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://lh3.googleusercontent.com/fife/AAWUweWyCU3utVA1S21e2_fIMQsga8wU13QkmDVCFX2s-yZkJx_Ln_CWgO9ray4iKO4hu6hTwjn3mVVDUN3tS-zB9vJgNgjAq38LnZPZZSr4OvHO-eLm5fggRaWVqXPmirtZlphryLBKHH-wdxlpf5NzBiNvygc2DI6xrsXR5bWY3tuu4IlRbUWDh9BlmEgmO7QF7WEm_Q5F7CK8GsW3ioXN4KgSSldpqybdu_rsg4o5VcFgJhr53bN0C6IzkyEsfoSOiNQ_xOMVvtKeaXEptirxXlVmoCXXKQasIsOGJO5FKRt-QKWNUcfZKa42zrA2TP9s2QjwU2sSW6pR6n50Hfaqw3iHJG0aOnPSwf4EwdewN_c_SeLyv2zznHzkkhWOWBkHm17EakbT_uLTJ9iu5z_aq6SNmrmq325m5oV4a_hnD6UF9LpJYJkKghhyhImbfM65M0482K68zVy7P9c4eDfH5UrBgXD45ZlMrfqRdsDVqOpklMvke9OgJOz2ymZSxnjpf2MhaHHeudOMW5rVVD_2V0V34GlmEK6C4qerHN2AwLJQ2M6krG7Gki4aKbhLegaBSzEHM5Cl-PsHe7Xd0_fG3J0x_miqDsb-CZkSLGvp_HCUuMVVmgqY3aJwyfaevGO3jkpnHPc7LULwJD6_j1nq9nFWa9Sx-keZOsnv9SlAtANjUk0ID21Pd3WO4TyFVQ_VPOX9Qn43rfg74zw3Z__SPieB2XgjgEVkZr-Lp5rv1uag_pJ68VvubwTjKbTXQ3wYU0Djjo7sT_Lgl-XujszIET1RbifQnyclSYKlF7jLWcNIgruhxWcyqQOYM2Q8E-iTXA0AFNDA8UqTQXP9Jelnk1ZokrMr6MTUDn6-TjZw-EdbYmxJzHDz-ELnqtgdKGSC8cfF01DiC_8PZx118irPxlreI0fld-oeFeCGHC4VNJ4rWRyJ0sprqOXw7BmHduSwN70Zb3HKnt9oyy2K-uwraIlfropPk2pGr9Y2E0MQruj7aJ7IiX_swteSprh30lKGTr7uhdF7P-ikONBe2k66-fmQv3aTX7motr6foE_-lguRvy2kpNmL3ov6nusWNHOtEesnMh_AnwJH_d63QefmziN2bEGSHLzZDZ73lrswCQAmQgWVledbu26p4Dr8VE1qLk4nvEa9pN8hzD51FZtJeJx8tX7pT94Vt8D-jMXLjix_LaDoEC-YLIydp3UT_ytj-CIj_toLc_bwv0wsjLJvivwCpWgJLyeicAp7digei_R5qN16VnZDUY8s8bxdYtFsn26Sge6lnA=w1920-h1080"  layout="fill" objectFit="contain"/>
        </SwiperSlide>
         <SwiperSlide>
          <Image src="https://lh3.googleusercontent.com/fife/AAWUweUsg6YseUyE96cqd070Cm3Mq2uc4l0IWggq1aAUdsoQk_dpNYS6mI_QD50WQhxldSAEt7rvLP0WSYb2FW-gcwGS98KlfI2KPLuhYVVG1KS5hB9WtCsgfV3PGXLIP0MvCJrsBw9aduBQiKqtcMqllrYk8BLu8p2bZtTb6vAVzd2QfU_vC7BbAO_F3vPzx1ATNiF6Cty4kXvBrjmb8PR7WKim9DSx1n58deb0mZt7R72NXvLXbfdnycxVhEGHhDFmHxfAjA-3KgXSX5A_NSGvvXmSv0DN4BqA5NhST8_ez_doPVvqav8q-JwNsiChqUQOgksEpmbpIT3GFJ__D1HsZfhauFeiWJuPkXXyuR6vOumUdTS1oX7BabFatWDOS7qjWEWLeXeZBQNxqogqvUUPWSCZISdS1iHItvJa6ry5NK7J1xQEoknkBOh7TyWYPlbS_qR2lER1zvK9IiD_A1j-qK2XrAeAcXGQ4U60FKXYxL27u14S6TxLV0tBV1YU8P1ZvKolesIulYRmbc_ZGUD5gcTuxJ4uVVuer3RfyEsBqDJtLCe2lF_umH-YBVsY2Kti3BbZxdUFIQT9jLNNKElACsA1Z3PgC7sGbf1aHJOzrhXU-gx7ntvLccRqgf6hzO_rcBW_dVwC14gpsS1XVgKvvVYVy9aJa8HukKIhb3lNnyWUCd947Va2onnpo7K5RS8emDSuqma2DOiudhp15oov8N1GmFA82GNReMuvs4pHFwNr6KBSb6Oq2Ad6ZpPSBoXOwjaT7oQDy5WUNAKldTzLjokrvbP5E5CH9bxb_F6HPID7ykPx_QISdWaNR0kIQkxW4FKEsTSKFULPhcr2RyvCUwQQkuaWqQb319skqN7ce9jTgYR3DD2gZK20IOba0Xg42kbAAO2BJjh6W1QnYDwfX7Tiwp0oA_Gq-h2Lof9S1abeiqPHwZhmB4KzIGElDKjLyMeb4_GnoAa7h-D42WOnvN6opztY8rzpmOMdRkjR6T7kuQS-tw9MD8jKprWsWUkM-2G87MmiHlktS4A9dItxrONsp9-vEPWpVANQ2eoMDrys9aCUMPg1O3Iarj8Id8p5t8xAtVZ3GNATYHxiydFWY7A1bWNpfj1sipt6hlFvqRNpfAWpgtcFS3FXPBIvOV8zDi6k9ITpLTTNl0HQ-7TbIIhpp1mQvFoTwjTLmoQcihbnIm7Cg80dJfZ3_r0VFssrK1VKQEr417cMk0-_IwyxEnIo6HXMGToyk3R9EyrcjVS5YshTuhVWGLkkDjSDhkHr7JcCDnOpiw=w1920-h1080" layout="fill"   objectFit="contain"/>
        </SwiperSlide>
         <SwiperSlide>
          <Image src="https://lh3.googleusercontent.com/fife/AAWUweVTnSy9A601IJtvh8XERoe-KCorwbhjBuIoZFKXWtcaWBHmg7AJ6YVipzyIzfq0I9tac2AeGgncPP842RGt_qmfK53BVetKCikddbrlwG8rdEen2YPd5ooaGEsDEPXtJ0dCUFUC6IoyCHRupWrU4Nf8Q1rsl_FmMwKLbQ4G8WftVC7rS6n_F5dPERX1r9W1zFuvASG2UC2zbxXVpbPpcXTPVmDwPbOZZskRcdV1UhQIYmPKP_8CN8aKtIdSLfR3SZ_OgyWayOBC7SNtzYOC0kILjb-jovVEq0q2iw9UEflczcABTD-bL-TyP6TE7HruVJ7oP1ljdvFOHGYA8fSN9Z_uXPJAuv3IdddWudFXkHrap-Q5Iz03uN6740Xg_Mtkwf0u55H2gVu6zhBARfyNB1lPq-SRWqNJ3mfOrn6ixQiRFLNj9I-wAfx_6BfPKpa0Dh754AiV6sAbTnQ3nlz5pJXdcsr1Ai1vHl0v3Z8jjmPTtR0w5SIIl7a2ieMS820dbtyezBl89tFGPxB0p08XPZGo9KnTlfh-Z0t6ZnpNYJeBJ6DP9RqnBI0UxiW58PvsNd89AsnOCYDhKI9G5-0_bS4SUmDZ8UrYUD45LUcKIj79d0toMLBm-sdNDVF_vHgUL1jPMhGWC_maHhWC2ydtAHR5SSGgkCRhkhxkG-jxdF-hhWd4AIOUoH2dll3wA60zfCs28Cqe9ZO33UVqugIS4N27IluyEjTRiW8Nk4JpKYl9wnLq4tGkmxI6kUKbzPzfrrlJrteeP_esIe1Bzchti1-1gISwK56fYZLVN2ioiLVDCspZ6xL6chn8Vi0Y4PixlejpehDotntnmbvR-S5lyL_bMFriDaGgM6Fk3cCuiARITSghynnmZhkJuAQkNoMLZaIBKGoxQcnC1Eo5JCqMRoESWSZ3nzbYHh5jY6HJG9PSkBfSwAjFlK10xd2rrNsXHKkggLt_EfZ8lR0BVvDMIRWOkwiW520i2ZDTulOqYKjFup8K9Mq2874AqSskFL9EQJvqFkb5FFnahECCe62rB4gpB0Rilcj-5N0mvXmHV6LzKv_hDzr2RghRQ-DkCdyWByqhVNWJw1JTckmYh5uYEb_JF2bJttANP7NbxwJqF5BELtdRda4Ou8V3hC7zTP42AaYDdM6S5HfB4lyfvaFrdczdQla-e4zezNWFzObVgn3dmxkXclSHTTXNXwbyZXZnCe8sXu0LeDiyHjMDnRuYXyLoXKdKcQX2zaQ_gE49MSwlgiuQMoEwzpU_nRCeAFWLiS8Q7j8WQQ=w1920-h1080"   layout="fill" objectFit="contain"/>
        </SwiperSlide>
      ...
    </Swiper>    </div>
  );
}

export default ImageCarousel;
