import React, { useRef, useState } from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import vectorIcon from "../../assets/Group 55.svg";
import './style.css'

const ContactPage = () => {
    const testimonials = [
        {
          name: "TypeKing",
          text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
          image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
          bgColor: "bg-green-500",
        },
        {
            name: "TypeKing",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
            bgColor: "bg-green-500",
          },
          {
            name: "TypeKing",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
            bgColor: "bg-green-500",
          },
          {
            name: "TypeKing",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
            bgColor: "bg-green-500",
          },
          {
            name: "TypeKing",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
            bgColor: "bg-green-500",
          },
          {
            name: "TypeKing",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
            bgColor: "bg-green-500",
          },
          {
            name: "TypeKing",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
            bgColor: "bg-green-500",
          },
          {
            name: "TypeKing",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
            bgColor: "bg-green-500",
          },
          {
            name: "TypeKing",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
            bgColor: "bg-green-500",
          },
          {
            name: "TypeKing",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
            bgColor: "bg-green-500",
          },
          {
            name: "TypeKing",
            text: "Absolutely blown away by the app developed! It's like you read our minds. User-friendly, sleek design, and flawless performance. A game-changer for our business!",
            image: "https://s3-alpha-sig.figma.com/img/7583/57be/ae9594f1160471db992db1cf36ca3f46?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mOmGXSlvFwEnhHA0TuxrSF-w6lKg3BdkFPJGdPxoYicdEnpD~wSE~YZP129lr9iEMWV2DQM992nl6cHeMV2RmTDbEtv5DVESb5uX5ukdsEAHn8oapeaocNC6~wmPsPFp-X8CYftLYjLc3RzJ3V8FCsVGh14HB6qbn0O0sE2qtpnyvcHaEa8yb-sRq8m42akE8xk-YG8q1yfPP~tpjLjiC8wrjycTIH3fyyn1k7eEXSJOHKl8BGaRMI4SqXS2aq9YnHc5dUJAJcqm4od6At4gHLgPNFAS~-woPPt1cutDUBK62uP9~Woc90J8xMqCm1ojfnXo1qUDSPy-jIHGJ-7NvQ__",
            bgColor: "bg-green-500",
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
                            className="w-[129.89px] h-[129.88px] rounded-full mb-4"
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