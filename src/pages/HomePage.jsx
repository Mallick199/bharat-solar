import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star, Zap, Sun, Battery, Home, HardHat, Clock, DollarSign, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };
  {/* Counter Component (add this to your components) */ }
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
  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Solar solutions data
  const solarSolutions = [
    "Residential Solar",
    "Commercial Solar",
    "Solar Water Pumps",
    "Solar Street Lights",
    "Solar Inverters",
    "Solar Batteries",
    "Solar Panels",
    "Government Schemes",
    "Solar Subsidies"
  ];

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

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="py-8 bg-white">
  <div className="container px-4">
    <div className="relative overflow-hidden">
      <div className="flex overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex space-x-6 animate-scroll-slow">
          {[
            {
              name: "Residential Solar",
              icon: "https://img.icons8.com/fluency/48/solar-panel.png",
            },
            {
              name: "Commercial Solar",
              icon: "https://img.icons8.com/color/48/office-building.png",
            },
            {
              name: "Solar Water Pumps",
              icon: "https://img.icons8.com/color/48/water-pump.png",
            },
            {
              name: "Solar Street Lights",
              icon: "https://img.icons8.com/color/48/street-light.png",
            },
            {
              name: "Solar Inverters",
              icon: "https://img.icons8.com/color/48/electricity.png",
            },
            {
              name: "Solar Batteries",
              icon: "https://img.icons8.com/color/48/battery-full.png",
            },
            {
              name: "Solar Panels",
              icon: "https://img.icons8.com/color/48/solar-panel2.png",
            },
            {
              name: "Government Schemes",
              icon: "https://img.icons8.com/color/48/government-building.png",
            },
            {
              name: "Solar Subsidies",
              icon: "https://img.icons8.com/color/48/money-bag.png",
            }, {
              name: "Government Schemes",
              icon: "https://img.icons8.com/color/48/government-building.png",
            },
            {
              name: "Solar Subsidies",
              icon: "https://img.icons8.com/color/48/money-bag.png",
            }
          ].map((solution, index) => (
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
              <span className="text-sm font-medium text-center">{solution.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
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
<section className="relative h-[500px] text-white overflow-hidden">
  {/* Scrolling Photo Gallery - Now with better visibility */}
  <div className="absolute inset-0 flex">
    {[
      "https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8",
      "https://images.unsplash.com/photo-1566837946088-5f0e0b1b8e0f",
      "https://images.unsplash.com/photo-1581093196276-1a1b58b9a5e4",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a"
    ].map((img, index) => (
      <div 
        key={index}
        className="h-full w-full flex-shrink-0 relative"
      >
        <img
          src={`${img}?auto=format&fit=crop&w=1200&q=80`}
          alt={`Solar installation ${index + 1}`}
          className="w-full h-full object-cover brightness-75"
          loading="lazy"
        />
      </div>
    ))}
  </div>

  {/* Lighter Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-teal-800/40" />

  {/* Content */}
  <div className="container h-full flex flex-col justify-center px-4 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      <motion.h1 variants={slideUp} className="text-4xl font-bold mb-4">
        Power Your Future With Solar Energy
      </motion.h1>
      <motion.p variants={slideUp} className="text-xl mb-8 max-w-2xl">
        India's leading solar solutions provider with government-approved installations and subsidies
      </motion.p>
      <motion.div variants={slideUp} className="flex flex-wrap gap-4">
        <Link to="/quote">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-6 text-lg">
            Get Free Consultation
          </Button>
        </Link>
        <Link to="/schemes">
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            Check Subsidy Eligibility
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  </div>

  <style jsx>{`
    .absolute.inset-0.flex {
      animation: scroll 60s linear infinite;
      width: calc(600%);
    }
    
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-100% + 100vw)); }
    }
  `}</style>
</section>

      {/* Government Schemes Section */}
      <section className="py-8 bg-white">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.h2 variants={slideUp} className="text-2xl font-bold mb-2">
              Government <span className="text-blue-600">Solar Schemes</span>
            </motion.h2>
            <motion.p variants={slideUp} className="text-gray-600 max-w-2xl mx-auto">
              Avail substantial subsidies and benefits on your solar installation
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governmentSchemes.map((scheme, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                      <ShieldCheck className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{scheme.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{scheme.description}</CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        {scheme.subsidy}
                      </span>
                      <a
                        href={scheme.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        Learn More
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
      <section className="py-8 bg-gray-50">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={slideUp}
              viewport={{ once: true }}
              className="text-2xl font-bold"
            >
              Featured Solar Products
            </motion.h2>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-lg bg-gradient-to-r from-blue-50 to-teal-50">
            <AnimatePresence mode='wait'>
              {featuredProducts.map((product, index) => (
                index === currentSlide && (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 p-8 flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded text-gray-900">
                          {product.badge}
                        </span>
                        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                          GOVT APPROVED
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-3xl font-bold">{product.title}</h3>
                      <p className="text-gray-600">{product.tagline}</p>
                      <p className="text-2xl font-bold mt-2 text-blue-600">{product.price}</p>
                      <p className="text-teal-600 font-medium">{product.feature}</p>
                    </div>

                    <div className="flex justify-center gap-2">
                      {featuredProducts.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => goToSlide(i)}
                          className={`w-2 h-2 rounded-full ${i === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                        />
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-8 bg-gray-50">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.h2 variants={slideUp} className="text-2xl font-bold mb-2">
              Why Choose <span className="text-teal-600">Solar Energy?</span>
            </motion.h2>
            <motion.p variants={slideUp} className="text-gray-600 max-w-2xl mx-auto">
              Discover the numerous benefits of switching to solar power
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Sun,
                title: "Reduce Electricity Bills",
                description: "Save up to 90% on your monthly electricity expenses",
                color: "text-yellow-500"
              },
              {
                icon: Battery,
                title: "Energy Independence",
                description: "Generate your own power and reduce grid dependency",
                color: "text-blue-500"
              },
              {
                icon: Home,
                title: "Increase Property Value",
                description: "Solar homes sell faster and at higher prices",
                color: "text-teal-500"
              },
              {
                icon: HardHat,
                title: "Low Maintenance",
                description: "Solar systems require minimal maintenance",
                color: "text-orange-500"
              },
              {
                icon: Clock,
                title: "Quick Payback",
                description: "Recoup your investment in 4-6 years typically",
                color: "text-purple-500"
              },
              {
                icon: Users,
                title: "Environment Friendly",
                description: "Reduce your carbon footprint significantly",
                color: "text-green-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full border-0">
                  <CardContent className="p-6">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-${benefit.color.split('-')[1]}-100 mb-4`}>
                      <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 bg-white">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.h2 variants={slideUp} className="text-2xl font-bold mb-2">
              Our Simple <span className="text-blue-600">4-Step Process</span>
            </motion.h2>
            <motion.p variants={slideUp} className="text-gray-600 max-w-2xl mx-auto">
              From consultation to installation, we make going solar effortless
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-blue-200 transform -translate-x-1/2" />

            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {[
                {
                  step: "1",
                  title: "Site Assessment",
                  description: "Our experts evaluate your property for solar potential",
                  icon: Users
                },
                {
                  step: "2",
                  title: "Custom Design",
                  description: "We create a solar system tailored to your needs",
                  icon: ShieldCheck
                },
                {
                  step: "3",
                  title: "Approvals & Subsidy",
                  description: "We handle all paperwork and subsidy applications",
                  icon: HardHat
                },
                {
                  step: "4",
                  title: "Installation",
                  description: "Certified technicians install your solar system",
                  icon: Zap
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial="hidden"
                  whileInView="visible"
                  variants={slideUp}
                  viewport={{ once: true }}
                  className={`flex ${index % 2 === 0 ? 'md:pr-8 md:text-right md:flex-row-reverse' : 'md:pl-8 md:text-left'}`}
                >
                  <div className={`hidden md:block absolute ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'} transform ${index % 2 === 0 ? 'translate-x-6' : '-translate-x-6'} mt-8`}>
                    <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white" />
                  </div>

                  <div className="flex-1">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-4 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <span className="text-lg font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {/* Stats Counter Row */}
            <motion.div
              variants={slideUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12"
            >
              <div className="p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter target={2500} duration={3} />+
                </div>
                <p className="text-blue-200">Solar Installations</p>
              </div>
              <div className="p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter target={3500} duration={3} />+
                </div>
                <p className="text-blue-200">Happy Customers</p>
              </div>
              <div className="p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter target={15} duration={3} /> MW
                </div>
                <p className="text-blue-200">Clean Energy Generated</p>
              </div>
            </motion.div>

            {/* CTA Content */}
            <motion.h2 variants={slideUp} className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Switch to Solar?
            </motion.h2>
            <motion.p variants={slideUp} className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how much you can save
            </motion.p>
            <motion.div variants={slideUp} className="flex flex-wrap justify-center gap-4">
              <Link to="/quote">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-6 text-lg">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Call Now: 1800-123-4567
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