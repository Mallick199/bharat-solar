import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star, Zap, Sun, Battery, Home, HardHat, Clock, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Counter Component
  const Counter = ({ target, duration = 2 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = target / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, [target, duration]);

    return <span>{count.toLocaleString()}</span>;
  };

  // Featured solar products
  const featuredProducts = [
    {
      id: 1,
      title: "Solar Panel 500W",
      tagline: "High efficiency monocrystalline",
      price: "₹22,999*",
      feature: "25-Year Warranty",
      badge: "BESTSELLER",
      description: "Efficiency: 21.3% | Temperature Coefficient: -0.34%/°C"
    },
    {
      id: 2,
      title: "Solar Inverter 5KVA",
      tagline: "Hybrid solar inverter with grid-tie",
      price: "₹49,999*",
      feature: "MPPT Technology",
      badge: "NEW"
    },
    {
      id: 3,
      title: "Solar Battery 150Ah",
      tagline: "Deep cycle tubular battery",
      price: "₹18,999*",
      feature: "1200+ Cycles",
      badge: "ECONOMY"
    }
  ];

  // Government schemes
  const governmentSchemes = [
    {
      name: "PM Surya Ghar Muft Bijli Yojana",
      description: "Central financial assistance for residential rooftop solar",
      subsidy: "Up to ₹78,000 subsidy",
      link: "https://pmsuryaghar.gov.in"
    },
    {
      name: "KUSUM Scheme",
      description: "Solar pumps and grid-connected solar power plants for farmers",
      subsidy: "30-50% subsidy",
      link: "https://mnre.gov.in/kusum"
    },
    {
      name: "Rooftop Solar Phase II",
      description: "Achieve 40 GW rooftop solar capacity by 2026",
      subsidy: "Up to 40% subsidy",
      link: "https://solarrooftop.gov.in"
    },
    {
      name: "Solar Park Scheme",
      description: "Development of solar parks and ultra mega solar power projects",
      subsidy: "₹20 lakh/MW or 30% of project cost",
      link: "https://mnre.gov.in/solar/solar-park"
    }
  ];

  // Current slide for featured products
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // ===== Category Scroller with Arrow Buttons =====
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const categorySolutions = [
    { name: "Residential Solar", icon: "https://img.icons8.com/fluency/48/solar-panel.png" },
    { name: "Commercial Solar", icon: "https://img.icons8.com/color/48/office-building.png" },
    { name: "Industrial Solar", icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-industry-industry-flaticons-flat-flat-icons.png" },
    { name: "Solar Water Pumps", icon: "https://img.icons8.com/color/48/water-pump.png" },
    { name: "Solar Street Lights", icon: "https://img.icons8.com/color/48/street-light.png" },
    { name: "Solar Inverters", icon: "https://img.icons8.com/color/48/electricity.png" },
    { name: "Solar Batteries", icon: "https://img.icons8.com/color/48/battery-full.png" },
    { name: "Solar Panels", icon: "https://img.icons8.com/color/48/solar-panel2.png" },
    { name: "Solar Heaters", icon: "https://img.icons8.com/color/48/boiler.png" },
    { name: "EV Charging", icon: "https://img.icons8.com/color/48/charging-battery.png" },
    { name: "Solar Farms", icon: "https://img.icons8.com/color/48/renewable-energy.png" },
    { name: "Off-Grid Systems", icon: "https://img.icons8.com/fluency/48/no-connection.png" },
    { name: "On-Grid Systems", icon: "https://img.icons8.com/color/48/power-plant.png" },
    { name: "Hybrid Systems", icon: "https://img.icons8.com/color/48/smart-home-automation.png" },
    { name: "Government Schemes", icon: "https://img.icons8.com/color/48/government-building.png" },
    { name: "Solar Subsidies", icon: "https://img.icons8.com/color/48/money-bag.png" },
    { name: "Solar Installation", icon: "https://img.icons8.com/color/48/worker-male--v1.png" },
    { name: "Solar Maintenance", icon: "https://img.icons8.com/color/48/wrench.png" },
    { name: "Environment Friendly", icon: "https://img.icons8.com/color/48/earth-planet.png" },
  ];

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* ===== Category Scroller with Arrows ===== */}
      <section className="py-8 bg-white relative">
        <div className="container px-4 relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Scrollable Categories */}
          <div ref={scrollRef} className="flex overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
            <div className="flex space-x-6">
              {categorySolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  className="flex flex-col items-center min-w-[100px] flex-shrink-0"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2 p-3 shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={solution.icon}
                      alt={solution.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">
                    {solution.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </section>



<style jsx>{`
  .animate-scroll-slow {
    animation: scroll 30s linear infinite;
    width: max-content;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% + 100vw));
    }
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
<section className="relative h-[400px] text-white overflow-hidden">
  {/* Photo Slider */}
  <div className="absolute inset-0">
    <AnimatePresence mode="wait">
      <motion.img
        key={currentSlide}
        src={[
          "https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg",
          "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
          "https://images.unsplash.com/photo-1588854337236-6889d631faa8",
          "https://images.unsplash.com/photo-1566837946088-5f0e0b1b8e0f",
          "https://images.unsplash.com/photo-1581093196276-1a1b58b9a5e4",
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a"
        ][currentSlide]}
        alt={`Solar installation ${currentSlide + 1}`}
        className="w-full h-full object-cover brightness-[0.65] absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </AnimatePresence>
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

  {/* Content */}
  <div className="container h-full flex flex-col justify-center px-6 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
      className="max-w-3xl"
    >
      <motion.h1
        variants={slideUp}
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg"
      >
        Power Your Future <br /> With Solar Energy
      </motion.h1>
      <motion.p
        variants={slideUp}
        className="text-lg md:text-xl mb-10 max-w-2xl text-gray-200 leading-relaxed"
      >
        India’s leading solar solutions provider with government-approved
        installations and subsidy support.
      </motion.p>
      <motion.div variants={slideUp} className="flex flex-wrap gap-4">
        <Link to="/quote">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-6 text-lg shadow-lg rounded-xl transition">
            Get Free Consultation
          </Button>
        </Link>
        <Link to="/schemes">
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-xl transition"
          >
            Check Subsidy Eligibility
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  </div>

  {/* Controls */}
  <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
    <button
      onClick={prevSlide}
      className="p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition shadow-md"
    >
      <ChevronLeft className="h-7 w-7 text-white" />
    </button>
    <button
      onClick={nextSlide}
      className="p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition shadow-md"
    >
      <ChevronRight className="h-7 w-7 text-white" />
    </button>
  </div>

  {/* Dots */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
    {["img1", "img2", "img3", "img4", "img5", "img6"].map((_, i) => (
      <button
        key={i}
        onClick={() => goToSlide(i)}
        className={`w-4 h-4 rounded-full transition-all duration-300 ${
          i === currentSlide
            ? "bg-yellow-400 scale-110 shadow-lg"
            : "bg-white/40 hover:bg-white/60"
        }`}
      />
    ))}
  </div>
</section>


      {/* Government Schemes Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 via-white to-blue-50">
  <div className="container px-4">
    {/* Section Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <motion.h2 variants={slideUp} className="text-3xl font-bold mb-4">
        Government <span className="text-blue-600">Solar Schemes</span>
      </motion.h2>
      <motion.p
        variants={slideUp}
        className="text-gray-600 max-w-2xl mx-auto text-lg"
      >
        Avail substantial subsidies and benefits on your solar installation
      </motion.p>
    </motion.div>

    {/* Scheme Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {governmentSchemes.map((scheme, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true }}
        >
          <Card className="relative h-full rounded-2xl overflow-hidden border border-blue-100 shadow-md hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white/80 via-blue-50/60 to-white/80 backdrop-blur-lg">
            {/* Accent strip */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-400"></div>

            <CardHeader>
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4 shadow-inner">
                <ShieldCheck className="h-7 w-7 text-blue-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-800">
                {scheme.name}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription className="mb-4 text-gray-600">
                {scheme.description}
              </CardDescription>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full shadow-sm">
                  {scheme.subsidy}
                </span>
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* Featured Products Section */}
      <section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Title */}
    <div className="flex items-center justify-between mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-900"
      >
        Featured Solar Products
      </motion.h2>
      <a
        href="#"
        className="text-blue-600 font-medium hover:underline text-sm"
      >
        View All Products →
      </a>
    </div>

    {/* Products Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[
        {
          id: 1,
          title: "Residential Solar Panel",
          price: "$899",
          feature: "5KW Power Output",
          image: "https://img.icons8.com/fluency/96/solar-panel.png",
          badge: "Best Seller",
        },
        {
          id: 2,
          title: "Solar Inverter",
          price: "$499",
          feature: "High Efficiency",
          image: "https://img.icons8.com/color/96/electricity.png",
          badge: "New Arrival",
        },
        {
          id: 3,
          title: "Solar Water Pump",
          price: "$699",
          feature: "Energy Efficient",
          image: "https://img.icons8.com/color/96/water-pump.png",
          badge: "Hot Deal",
        },
        {
          id: 4,
          title: "Solar Battery",
          price: "$399",
          feature: "Long Backup",
          image: "https://img.icons8.com/color/96/battery-full.png",
          badge: "Trending",
        },
        {
          id: 5,
          title: "Solar Street Light",
          price: "$299",
          feature: "Auto On/Off",
          image: "https://img.icons8.com/color/96/street-light.png",
          badge: "Govt Approved",
        },
        {
          id: 6,
          title: "Hybrid Solar System",
          price: "$1499",
          feature: "On/Off Grid Compatible",
          image: "https://img.icons8.com/color/96/smart-home-automation.png",
          badge: "Premium",
        },
      ].map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
        >
          {/* Product Image */}
          <div className="relative bg-gray-50 p-6 flex justify-center">
            <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full text-gray-900">
              {product.badge}
            </span>
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {product.title}
            </h3>
            <p className="text-sm text-teal-600 font-medium">{product.feature}</p>

            <div className="mt-auto">
              <p className="text-xl font-bold text-blue-600">{product.price}</p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
  <div className="container px-4 relative z-10">
    {/* Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <motion.h2 
        variants={slideUp} 
        className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900"
      >
        Why Choose <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Solar Energy?</span>
      </motion.h2>
      <motion.p 
        variants={slideUp} 
        className="text-gray-600 max-w-2xl mx-auto text-lg"
      >
        Discover the numerous benefits of switching to solar power
      </motion.p>
    </motion.div>

    {/* Grid Benefits */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: Sun,
          title: "Reduce Electricity Bills",
          description: "Save up to 90% on your monthly electricity expenses",
          gradient: "from-yellow-400 to-orange-500"
        },
        {
          icon: Battery,
          title: "Energy Independence",
          description: "Generate your own power and reduce grid dependency",
          gradient: "from-blue-500 to-cyan-500"
        },
        {
          icon: Home,
          title: "Increase Property Value",
          description: "Solar homes sell faster and at higher prices",
          gradient: "from-teal-500 to-green-500"
        },
        {
          icon: HardHat,
          title: "Low Maintenance",
          description: "Solar systems require minimal maintenance",
          gradient: "from-orange-500 to-red-500"
        },
        {
          icon: Clock,
          title: "Quick Payback",
          description: "Recoup your investment in 4-6 years typically",
          gradient: "from-purple-500 to-pink-500"
        },
        {
          icon: Users,
          title: "Environment Friendly",
          description: "Reduce your carbon footprint significantly",
          gradient: "from-green-500 to-lime-500"
        }
      ].map((benefit, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true }}
        >
          <Card className="h-full border-0 bg-white/80 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl">
            <CardContent className="p-8 flex flex-col items-center text-center">
              {/* Icon */}
              <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${benefit.gradient} shadow-md mb-4`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
              {/* Description */}
              <p className="text-gray-600">{benefit.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Decorative Background Circles */}
  <div className="absolute top-20 left-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
</section>


      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50">
  <div className="container px-6 mx-auto">
    {/* Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <motion.h2
        variants={slideUp}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
      >
        Our Simple <span className="text-blue-600">4-Step Process</span>
      </motion.h2>
      <motion.p
        variants={slideUp}
        className="text-gray-600 max-w-2xl mx-auto"
      >
        From consultation to installation, we make going solar effortless.
      </motion.p>
    </motion.div>

    {/* Steps */}
    <div className="relative">
      {/* Vertical line in center */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-100 to-transparent transform -translate-x-1/2" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {[
          {
            step: "1",
            title: "Site Assessment",
            description: "Our experts evaluate your property for solar potential.",
            icon: Users,
          },
          {
            step: "2",
            title: "Custom Design",
            description: "We create a solar system tailored to your needs.",
            icon: ShieldCheck,
          },
          {
            step: "3",
            title: "Approvals & Subsidy",
            description: "We handle all paperwork and subsidy applications.",
            icon: HardHat,
          },
          {
            step: "4",
            title: "Installation",
            description: "Certified technicians install your solar system.",
            icon: Zap,
          },
        ].map((item, index) => (
          <motion.div
            key={item.step}
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0
                ? "md:flex-row-reverse md:text-right"
                : "md:text-left"
            }`}
          >
            {/* Connector dot */}
            <div
              className={`hidden md:flex absolute ${
                index % 2 === 0 ? "right-1/2 translate-x-6" : "left-1/2 -translate-x-6"
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md" />
            </div>

            {/* Step Icon & Number */}
            <div
              className={`flex flex-col items-center ${
                index % 2 === 0 ? "md:items-end" : "md:items-start"
              }`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg mb-4 relative">
                <item.icon className="h-7 w-7" />
                <span className="absolute -top-3 -right-3 bg-white text-blue-600 font-bold rounded-full w-7 h-7 flex items-center justify-center shadow">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 max-w-xs">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
    {/* CTA Section */}
<section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white overflow-hidden">
  {/* Decorative Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
  </div>

  <div className="relative container px-4 text-center">
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      {/* Stats Counter Row */}
      <motion.div
        variants={slideUp}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16"
      >
        {[
          { target: 2500, label: "Solar Installations" },
          { target: 3500, label: "Happy Customers" },
          { target: 15, label: "MW Clean Energy Generated" }
        ].map((stat, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition"
          >
            <div className="text-5xl font-extrabold text-yellow-400 mb-2">
              <Counter target={stat.target} duration={3} />{i === 2 ? " MW" : "+"}
            </div>
            <p className="text-blue-100 text-lg">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* CTA Content */}
      <motion.h2
        variants={slideUp}
        className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug"
      >
        Power Your Future with <span className="text-yellow-400">Solar Energy</span>
      </motion.h2>
      <motion.p
        variants={slideUp}
        className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100"
      >
        Get a free consultation today and discover how much you can save while making the planet greener.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={slideUp}
        className="flex flex-wrap justify-center gap-6"
      >
        <Link to="/quote">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-yellow-400/50 transition-all duration-300">
            Get Free Quote
          </Button>
        </Link>
        <Link to="/contact">
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-6 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            📞 Call Now: 1800-123-4567
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>

    </div>
  );
};

export default HomePage;