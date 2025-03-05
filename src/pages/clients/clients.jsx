import React, { useRef, useState } from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import vectorIcon from "../../assets/Group 55.svg";
import './style.css'

const ContactPage = () => {
    const testimonials = [
        {
          name: "RIDER APP",
          text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
          image: "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
          bgColor: "bg-yellow-300",
        },
        {
          name: "RIDER APP",
          text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
          image: "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
          bgColor: "bg-yellow-300",
        },
        {
          name: "TypeKing",
          text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
          image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
          bgColor: "bg-green-500",
        },
        {
            name: "GBPLUS",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/9cc4/464c/2f27326011ba562898e108aa9522819c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ISICWf-~48Sjl3A6MMVpHY75PsDbkBGho8nB6iaLnA4Uw9RW1avWHxw~kpkDZ0uM0XLwvdZ~3XVj4oR5nQkFGpdOj2qiVjuBZjzpESTOyluAp6aspYoCHpTFRlNg7Bq-l5VvzfmynwXS7MWOCBwqG~E9UrIwFr3cd2bmF4FKLfz-LzPMUW2~Rc6o4DDJiEZ4CW~JOICBlZCniZLk5mSOy9ApNXOPCk5jdB4qz1VyuiMf6fUv6svD5dD6wH~oPuEHsaVYFISsMMTTa6pQ1x5UwAUZbJTWbTlWKNRYdtMTiruoLEA1bsREdco1hpXLTj961U5aMQHiG4NAV0wpt4Xbfg__",
            bgColor: "bg-blue-800",
          },
          {
            name: "ANNOE",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/a5bc/27e2/38474c3a8026069d17b3fde301968dd3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=trkC7sa8Z45Fc9H9xnTFzvzxeck8dhr0Ewm4bCaeJeeupHa0LDZ6dQGOOnzkKMAx5l0F2ndLBVsmVFZsR3WGng8zzQQnep9~t5K27KuwcGsm0BHSy6jhzXP00oVLA4EPpFJWKfWGMkXKWbUHVoO-n4m60wK3NEmbrjN3flL0bIBQz1kLjuc6Fo8~8xN9ukDLcp5rGIyjRZBtw7QEYYsedrtaopRDC7mpXA4GgYf0wyq-uCH2Y0axnkC5kwuH5pKUHsgwIf3oDrspg2YMqqsOimn2qdOwUpEOl4Mwd3pWw-~nXBLQ53ygZ~2d-XufWBPGVYp~NxEapWun0iTGFt3jKg__",
            bgColor: "bg-green-500",
          },
          {
            name: "RIDER APP",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
            bgColor: "bg-yellow-300",
          },
          {
            name: "RIDER APP",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
            bgColor: "bg-green-500",
          },
          {
            name: "RIDER APP",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
            bgColor: "bg-yellow-300",
          },
          {
            name: "RIDER APP",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
            bgColor: "bg-yellow-300",
          },
          {
            name: "RIDER APP",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
            bgColor: "bg-yellow-300",
          },
          {
            name: "RIDER APP",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/983d/1c23/b1cb49125e6afb2afa495f719730af57?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3bRZ7-nAgIYBwig8Yr4PdEA6E3YDngVhpUbaeLL5WrFynud0g8iky5o1OMLZjNpsNeMM39525p3lSJcKj6HeGd5-XT~PTP7ceqdOqcsn9tY99hlc7hx1wKeBhBBykioYu4yoBMFb2tK9Bc~wOk8l0bCtVrJuVIvTXOWKgspwqpKaGOXotLSpQhjESoyptZ~ZsfP0L4DITsivKtC8xWDMv6qzVN1P4fXQ-1pHL~QJ5lW4rhs7rkTKBJa4Ne9Gol~gcZ7slcckEdX~g1ANBIHY2OvalLjNe5kqEyH3SpT3IAvkw~x~rKzvTlRzndpC7EKc5AQi0Glmoatz~DE4rU1Kg__",
            bgColor: "bg-yellow-300",
          },
    ];

    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const startDragging = (e) => {
        setIsDragging(true);
        const pageX = e.pageX || (e.touches && e.touches[0].pageX);
        setStartX(pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    const drag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const pageX = e.pageX || (e.touches && e.touches[0].pageX);
        const x = pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="relative min-h-screen bg-white">
            <Header />

            <a href="home">
                <img 
                    src={vectorIcon} 
                    alt="Decoration" 
                    className="fixed top-6 right-6 w-10 h-10 cursor-pointer" 
                />
            </a>

            <div className="flex items-center justify-center ">
                <div className="w-[979px] h-[13px] bg-[#D9D9D9]"></div>
            </div>
            
            {/* Updated Carousel with Hidden Scrollbar and Responsive Grid */}
            <div 
                ref={carouselRef}
                onMouseDown={startDragging}
                onMouseLeave={stopDragging}
                onMouseUp={stopDragging}
                onMouseMove={drag}
                onTouchStart={startDragging}
                onTouchMove={drag}
                onTouchEnd={stopDragging}
                className="
                slider
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:flex 
                    md:overflow-x-scroll 
                    md:no-scrollbar 
                    cursor-grab 
                    active:cursor-grabbing 
                    space-x-6 
                    px-6 
                    py-12 
                    scroll-smooth
                "
                style={{ 
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`
                            flex-shrink-0 
                            w-full 
                            sm:w-[295px] 
                            h-[418px] 
                            ${testimonial.bgColor} 
                            rounded-2xl 
                            shadow-lg 
                            flex 
                            flex-col 
                            items-center 
                            text-center 
                            p-6 
                            scroll-ml-6 
                            scroll-snap-align-center
                            mb-6 
                            sm:mb-0
                        `}
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-[133px] h-[129.88px] rounded-full mb-4"
                        />
                        <h3 className="text-white font-bold text-xl">{testimonial.name}</h3>
                        <p className="text-white mt-2 text-sm">{testimonial.text}</p>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;