import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Apple, ChromeIcon } from "lucide-react";

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  // Carousel images and content
  const carouselData = [
    {
      image:
        "https://images.unsplash.com/photo-1733810763720-4c83af0668ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpZmklMkMlMjByb3V0ZXJ8ZW58MHx8MHx8fDA%3D",
      title: "Network Control",
      subtitle: "Complete WiFi Management",
      description:
        "Empower your ISP with comprehensive WiFi network monitoring, control, and optimization tools.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RhdHMlMkMlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D",
      title: "Smart Analytics",
      subtitle: "Data-Driven Insights",
      description:
        "Unlock powerful network performance insights and customer usage analytics to optimize your infrastructure.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1691435828932-911a7801adfb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ISP Solutions",
      subtitle: "Built for Providers",
      description:
        "Streamline your operations with tools designed specifically for Internet Service Providers.",
    },
  ];

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (formData.email && formData.password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Left Side - Carousel */}
      <div className="w-3/5 relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-blue-600">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${carouselData[currentSlide].image})`,
          }}
        ></div>

        {/* Mountain/Landscape Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-800/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-12">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              {carouselData[currentSlide].title}
            </h1>
            <h2 className="text-2xl text-red-200 mb-6 font-light">
              {carouselData[currentSlide].subtitle}
            </h2>
            <p className="text-gray-300 text-lg max-w-md leading-relaxed">
              {carouselData[currentSlide].description}
            </p>
          </div>

          {/* Carousel Indicators */}
          <div className="flex space-x-3">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-110"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 left-8">
          <div className="text-white font-bold text-2xl">
            xauron
            <div className="text-xs text-red-200 font-normal">
              powered by ALEA
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="w-2/5 bg-slate-800 flex flex-col">
        <div className="flex-1 flex flex-col justify-center px-12 py-12">
          {/* Toggle Buttons */}
          <div className="mb-8">
            <div className="flex bg-slate-700 rounded-lg p-1">
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                  !isLogin
                    ? "bg-gradient-to-r from-red-500 to-blue-500 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Create an account
              </button>
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                  isLogin
                    ? "bg-gradient-to-r from-red-500 to-blue-500 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Login
              </button>
            </div>
          </div>

          <h2 className="text-white text-2xl font-semibold mb-2">
            {isLogin ? "Welcome back!" : "Create an account"}
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            {isLogin
              ? "Sign in to your account to continue"
              : "Already have an account? Login!"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {!isLogin && (
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="agreeTerms" className="text-gray-400 text-sm">
                  I agree to the Terms and Privacy Policy
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              {isLogin ? "Login" : "Create account"}
            </button>
          </form>

          {/* <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-slate-800 px-2 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex justify-center items-center px-4 py-3 border border-slate-600 rounded-lg text-gray-300 hover:text-white hover:border-slate-500 transition-colors duration-200">
                <ChromeIcon size={20} />
                <span className="ml-2 text-sm">Google</span>
              </button>
              <button className="flex justify-center items-center px-4 py-3 border border-slate-600 rounded-lg text-gray-300 hover:text-white hover:border-slate-500 transition-colors duration-200">
                <Apple size={20} />
                <span className="ml-2 text-sm">Apple</span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
