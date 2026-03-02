"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Globe, Package, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="largeSmallSizeLargeTitles"
      background="fluid"
      cardStyle="layered-gradient"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Jio"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "Shop", id: "products" }
          ]}
          bottomLeftText="Jio Toys - Happiness Delivered"
          bottomRightText="hello@jiotoys.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Welcome to Jio - Where Joy Comes to Play"
          description="Discover the world's most delightful toys crafted for imagination, learning, and endless fun. Every toy tells a story of happiness."
          tag="Premium Toys for Every Age"
          imageSrc="http://img.b2bpic.net/free-photo/elevated-view-two-boys-gathering-confetti-wooden-floor_23-2148046178.jpg"
          imageAlt="Colorful toys and children playing"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "Learn More", href: "#about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Toys Collection"
          description="Handpicked toys that spark joy and creativity in every child"
          tag="Best Sellers"
          products={[
            {
              id: "1",              name: "Rainbow Building Blocks Set",              price: "$34.99",              variant: "50 Pieces • Colorful",              imageSrc: "http://img.b2bpic.net/free-photo/plastic-eccano-set_1398-2179.jpg",              imageAlt: "Rainbow building blocks set",              isFavorited: false
            },
            {
              id: "2",              name: "Adventure Action Figures",              price: "$24.99",              variant: "5 Pack • Poseable",              imageSrc: "http://img.b2bpic.net/free-photo/superhero-kids-with-superpowers_53876-138171.jpg",              imageAlt: "Set of adventure action figures",              isFavorited: false
            },
            {
              id: "3",              name: "Brain Quest Puzzle Collection",              price: "$29.99",              variant: "3 Levels • Educational",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-kids-playing-memory-game_23-2150231784.jpg",              imageAlt: "Educational puzzle collection",              isFavorited: false
            },
            {
              id: "4",              name: "Family Game Night Bundle",              price: "$44.99",              variant: "4 Games • Interactive",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiling-friends-playing-board-game_23-2148234843.jpg",              imageAlt: "Bundle of family board games",              isFavorited: false
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Jio Toys: Bringing Smiles to Millions of Children Worldwide Since 2010"
          metrics={[
            { icon: Sparkles, label: "Happy Families", value: "500K+" },
            { icon: Package, label: "Toys Delivered", value: "2M+" },
            { icon: Award, label: "Awards Won", value: "25+" },
            { icon: Globe, label: "Countries Served", value: "50+" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Why Choose Jio Toys?"
          description="We believe every child deserves access to quality, safe, and imaginative toys that foster learning and creativity."
          tag="Quality Assurance"
          features={[
            {
              title: "100% Safe & Certified",              description: "All toys meet international safety standards and certifications. Your child's safety is our top priority.",              imageSrc: "http://img.b2bpic.net/free-vector/extend-guarantee-assurance-shield-badge-business-marketing_1017-62780.jpg",              button: { text: "Learn More" }
            },
            {
              title: "Fast & Free Shipping",              description: "Orders ship within 24 hours. Free shipping on orders over $50. Get your toys delivered quickly.",              imageSrc: "http://img.b2bpic.net/free-photo/express-delivery-package-handover_23-2151994433.jpg",              button: { text: "Shop Now" }
            },
            {
              title: "Premium Quality",              description: "Hand-selected toys from trusted manufacturers worldwide. Every product is tested for quality and durability.",              imageSrc: "http://img.b2bpic.net/free-vector/premium-quality-product-golden-label-design_1017-12393.jpg",              button: { text: "Browse" }
            },
            {
              title: "Pure Joy Guaranteed",              description: "If your child doesn't love it, we don't either. 30-day return policy with no questions asked.",              imageSrc: "http://img.b2bpic.net/free-photo/young-cheerful-stylish-african-american-woman-dances-with-hands-raised-enjoys-celebrating-party-wears-fashionable-blue-dress-moves_273609-43423.jpg",              button: { text: "Details" }
            }
          ]}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="My kids absolutely love their toys from Jio! The quality is incredible, and the fast shipping made them so happy. This is now my go-to store for all birthday and holiday gifts."
          rating={5}
          author="Sarah Mitchell, Parent"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1770825104898-3rxkvw3f.jpg", alt: "Happy child" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1770825104898-3rxkvw3f.jpg", alt: "Smiling child" },
            { src: "http://img.b2bpic.net/free-photo/playing-boy_1098-18497.jpg", alt: "Child playing" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1770825104898-3rxkvw3f.jpg", alt: "Happy kid" },
            { src: "http://img.b2bpic.net/free-photo/outdoor-portrait-three-year-girl_1398-5129.jpg", alt: "Joyful child" },
            { src: "http://img.b2bpic.net/free-photo/happy-girl-laughing-park_1139-229.jpg", alt: "Smiling kid" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Never Miss Out on New Toys & Exclusive Deals"
          description="Subscribe to our newsletter for the latest toy releases, special discounts, and parenting tips delivered straight to your inbox."
          background={{ variant: "rotated-rays-animated-grid" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/elevated-view-two-boys-gathering-confetti-wooden-floor_23-2148046178.jpg"
          imageAlt="Newsletter signup"
          mediaPosition="right"
          mediaAnimation="slide-up"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time. No spam, just pure toy joy!"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Shop",              items: [
                { label: "All Products", href: "#products" },
                { label: "New Arrivals", href: "#products" },
                { label: "Best Sellers", href: "#products" },
                { label: "Gift Ideas", href: "#products" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "#" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Jio Toys | Bringing Joy to Every Home"
        />
      </div>
    </ThemeProvider>
  );
}