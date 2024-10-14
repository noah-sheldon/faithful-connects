import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

const HomePage: React.FC = () => {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-22 px-6 lg:px-30">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-6xl font-extrabold leading-tight text-foreground-dark">
            Streamline Your Social Media Presence
          </h1>
          <p className="text-2xl text-foreground-light">
            Manage multiple accounts, schedule posts, and track performance
            effortlessly with Faithful Connects.
          </p>
          <Button className="bg-primary text-white hover:bg-primary-dark px-10 py-5 rounded-xl transition-colors duration-400">
            Visit Site
          </Button>
          <div className="flex items-center space-x-4 pt-6">
            <span className="text-yellow-500 text-2xl">★★★★★</span>
            <span className="text-lg">Easy Management</span>
            <span className="text-lg">|</span>
            <span className="text-lg">Performance Tracking</span>
          </div>
          <blockquote className="italic pt-6 text-lg">
            &quot;Saves me so much time managing my social media!&quot;
            <div className="font-semibold text-xl">- Tony Ramirez</div>
          </blockquote>
        </div>
        <div className="lg:w-1/2 pt-16 lg:pt-0">
          <Image
            src="/homepage/hero.png"
            alt="Laptop showing social media management"
            width={600}
            height={400}
            className="rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-600"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary-dark text-white py-22 px-6 lg:px-30">
        <h2 className="text-5xl font-extrabold pb-10 text-center">
          Optimize Social Channels for Growth
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8 bg-secondary rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-600">
            <div className="text-7xl mb-6">📊</div>
            <h3 className="text-3xl font-semibold mb-4">
              Customized Content Creation
            </h3>
            <p className="text-lg text-foreground">
              Craft unique, engaging content tailored to your brand&apos;s voice
              and audience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-secondary rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-600">
            <div className="text-7xl mb-6">📋</div>
            <h3 className="text-3xl font-semibold mb-4">
              Comprehensive Social Media Strategy
            </h3>
            <p className="text-lg text-foreground">
              Develop a strategic plan to enhance your online presence and
              engagement.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-secondary rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-600">
            <div className="text-7xl mb-6">📈</div>
            <h3 className="text-3xl font-semibold mb-4">
              Analytics and Performance Tracking
            </h3>
            <p className="text-lg text-foreground">
              Gain insights with detailed analytics to optimize your social
              media efforts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
